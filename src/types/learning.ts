export interface Student {
  class_level: number;
  language: string;
}

export interface SkillProgressMap {
  [skillName: string]: number;
}

export interface LearnerState {
  skills: SkillProgressMap;
  reasoning: number;
  confidence: number;
  misconceptions: string[];
  learning_preferences: string[];
}

export interface CurrentInteraction {
  question_id: string;
  skill: string;
  type: string; // 'question' | 'teach_me' | 'transfer_challenge'
  question: string;
  student_answer: string;
}

export interface HistoryItem {
  question_id?: string;
  question?: string;
  student_answer?: string;
  result?: string;
  misconception?: string | null;
}

export interface InteractionContext {
  student: Student;
  topic: string;
  learner_state: LearnerState;
  current_interaction: CurrentInteraction;
  recent_history: HistoryItem[];
  mock_scenario?: string;
}

export interface TutorMessage {
  text: string;
  voice_text: string;
}

export interface LearningEvaluation {
  result: string; // 'correct' | 'partial' | 'wrong'
  understanding: number;
  reasoning: number;
  explanation_quality: number;
  transfer: number;
  misconception: string | null;
}

export interface LearningUpdate {
  skill: string;
  previous_mastery: number;
  new_mastery: number;
  mastery_change: number;
}

export interface WaterState {
  previous_level: number;
  change: number;
  new_level: number;
}

export interface TreeState {
  stage: number;
  growth: number;
  event: string; // 'none' | 'seed_growth' | 'stem_growth' | 'new_branch' | 'new_leaf' | 'flowering' | 'milestone'
}

export interface NextAction {
  type: string; // 'answer_question' | 'visual_explanation' | 'guided_question' | 'teach_me' | 'transfer_challenge' | ...
  question_id: string | null;
}

export interface ApiResponse {
  session_id: string;
  ai_response: {
    response_type: string; // 'greeting' | 'question' | 'correct' | 'partial' | 'wrong' | 'guidance' | 'misconception' | 'teach_me' | 'mastery' | 'transfer_challenge'
    tutor_message: TutorMessage;
  };
  evaluation: LearningEvaluation;
  learning_update: LearningUpdate;
  water: WaterState;
  tree: TreeState;
  next_action: NextAction;
}
