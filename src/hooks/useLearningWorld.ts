import { useState, useCallback } from "react";
import type { 
  Student, 
  SkillProgressMap, 
  WaterState, 
  TreeState, 
  HistoryItem,
  LearningEvaluation
} from "../types/learning";
import type { QuestionData } from "../data/mockLearning";
import { startSession, submitInteraction } from "../services/api";
import { getQuestionsForTopic } from "../data/mockLearning";

export const useLearningWorld = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [student, setStudent] = useState<Student>({ class_level: 5, language: "en" });
  const [topic, setTopic] = useState<string>("Fractions");
  
  // Visual learning indicators
  const [skills, setSkills] = useState<SkillProgressMap>({
    comparison: 0.45,
    addition: 0.80,
    simplification: 0.20,
    reasoning: 0.70
  });
  
  const [water, setWater] = useState<WaterState>({
    previous_level: 50,
    change: 0,
    new_level: 50
  });
  
  const [tree, setTree] = useState<TreeState>({
    stage: 2,
    growth: 0.0,
    event: "none"
  });

  // Active interaction state
  const [currentInteraction, setCurrentInteraction] = useState<QuestionData | null>(null);
  const [recentHistory, setRecentHistory] = useState<HistoryItem[]>([]);
  const [tutorMessage, setTutorMessage] = useState<{ text: string; voice_text: string } | null>(null);
  const [responseType, setResponseType] = useState<string | null>(null);
  const [learningEvaluation, setLearningEvaluation] = useState<LearningEvaluation | null>(null);
  
  // UI flags
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeHint, setActiveHint] = useState<string | null>(null);

  // Starts the personal learning session
  const initiateSession = useCallback(async (
    lang: string = "en",
    topicName: string = "Fractions",
    classLevel: number = 5,
    goal: string = "visual"
  ) => {
    setLoading(true);
    setError(null);
    setActiveHint(null);
    const cleanedTopic = topicName.trim() || "Fractions";
    setTopic(cleanedTopic);
    try {
      const initStudent = { class_level: classLevel, language: lang };
      setStudent(initStudent);

      const resp = await startSession({
        student_id: "student_001",
        class_level: classLevel,
        language: lang,
        topic: cleanedTopic,
        goal: goal || `understand ${cleanedTopic}`,
        input_mode: "text"
      });

      // Update state
      setSessionId(resp.session_id);
      setResponseType(resp.ai_response.response_type);
      setTutorMessage(resp.ai_response.tutor_message);
      
      // Update water and tree initial levels
      setWater(resp.water);
      setTree(resp.tree);
      
      // Look up initial question from question database
      const adaptedQuestions = getQuestionsForTopic(cleanedTopic);
      const qid = resp.next_action.question_id;
      if (qid && adaptedQuestions[qid]) {
        setCurrentInteraction(adaptedQuestions[qid]);
      } else {
        // Fallback to initial question
        setCurrentInteraction(adaptedQuestions["frac_q_001"] || Object.values(adaptedQuestions)[0]);
      }
      setRecentHistory([]);
      setLearningEvaluation(resp.evaluation);
      
    } catch (err: any) {
      setError(err.message || "Something interrupted our learning session.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Submits the student answer
  const submitAnswer = useCallback(async (answer: string) => {
    if (!sessionId || !currentInteraction) return;

    setLoading(true);
    setError(null);
    setActiveHint(null);
    try {
      const resp = await submitInteraction(sessionId, {
        question_id: currentInteraction.id,
        skill: currentInteraction.skill,
        type: currentInteraction.type,
        answer: answer,
        input_mode: "text"
      });

      // Save previous state for history
      const historyItem: HistoryItem = {
        question_id: currentInteraction.id,
        question: currentInteraction.question,
        student_answer: answer,
        result: resp.evaluation.result,
        misconception: resp.evaluation.misconception
      };
      setRecentHistory(prev => [...prev, historyItem]);

      // Update evaluation and tutor outputs
      setResponseType(resp.ai_response.response_type);
      setTutorMessage(resp.ai_response.tutor_message);
      setLearningEvaluation(resp.evaluation);

      // Trigger animations in tree and water state
      setWater(resp.water);
      setTree(resp.tree);

      // Update the progress maps for skill levels
      setSkills(prev => ({
        ...prev,
        [resp.learning_update.skill]: resp.learning_update.new_mastery
      }));

      // Update next question interaction
      const nextQid = resp.next_action.question_id;
      const adaptedQuestions = getQuestionsForTopic(topic);
      if (nextQid && adaptedQuestions[nextQid]) {
        // Switch to next active challenge
        setCurrentInteraction(adaptedQuestions[nextQid]);
      } else {
        // No next question (session complete or wait)
        setCurrentInteraction(null);
      }

    } catch (err: any) {
      setError(err.message || "Something interrupted our learning session.");
    } finally {
      setLoading(false);
    }
  }, [sessionId, currentInteraction, topic]);

  // Fetches hint for current question
  const requestHint = useCallback(() => {
    if (currentInteraction) {
      setActiveHint(currentInteraction.hint);
    }
  }, [currentInteraction]);

  // Resets the session state
  const resetSession = useCallback(() => {
    setSessionId(null);
    setCurrentInteraction(null);
    setTutorMessage(null);
    setResponseType(null);
    setLearningEvaluation(null);
    setRecentHistory([]);
    setSkills({
      comparison: 0.45,
      addition: 0.80,
      simplification: 0.20,
      reasoning: 0.70
    });
    setWater({
      previous_level: 50,
      change: 0,
      new_level: 50
    });
    setTree({
      stage: 2,
      growth: 0.0,
      event: "none"
    });
    setError(null);
    setActiveHint(null);
  }, []);

  return {
    sessionId,
    student,
    topic,
    skills,
    water,
    tree,
    currentInteraction,
    recentHistory,
    tutorMessage,
    responseType,
    learningEvaluation,
    loading,
    error,
    activeHint,
    initiateSession,
    submitAnswer,
    requestHint,
    resetSession
  };
};
