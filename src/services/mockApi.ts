import type { ApiResponse } from "../types/learning";
import { getAdaptedDemoResponses } from "../data/mockLearning";

// Local storage keys or temporary variables to track progress state in mock mode
let mockStep = 1;
let currentMastery = 0.45;
let currentWater = 50;
let activeTopic = "Fractions";
let activeLanguage = "en";

export const resetMockSession = () => {
  mockStep = 1;
  currentMastery = 0.45;
  currentWater = 50;
};

export const startSessionMock = async (payload: {
  student_id: string;
  class_level: number;
  language: string;
  topic: string;
  goal: string;
  input_mode: string;
}): Promise<ApiResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  activeTopic = payload.topic || "Fractions";
  activeLanguage = payload.language || "en";
  resetMockSession();
  
  const adapted = getAdaptedDemoResponses(activeTopic, activeLanguage);
  
  // Return initial greeting response (Step 1)
  const resp = JSON.parse(JSON.stringify(adapted[1]));
  
  // Apply language customization
  if (payload.language === "te") {
    resp.ai_response.tutor_message.text = `నమస్కారం! నేను విద్యాAI, మీ వ్యక్తిగత నేర్చుకునే భాగస్వామిని. Class ${payload.class_level || 5} కోసం ${activeTopic} గురించి మీకు ఇప్పటికే ఏమి తెలుసో చూద్దాం. ఒక చిన్న పజిల్ కోసం సిద్ధంగా ఉన్నారా?`;
  } else if (payload.language === "hi") {
    resp.ai_response.tutor_message.text = `नमस्ते! मैं विद्याAI हूँ, आपकी व्यक्तिगत सीखने की साथी। आइए देखें कि आप कक्षा ${payload.class_level || 5} के लिए ${activeTopic} के बारे में पहले से क्या जानते हैं। क्या आप तैयार हैं?`;
  } else if (payload.language === "ta") {
    resp.ai_response.tutor_message.text = `வணக்கம்! நான் வித்யாAI. வகுப்பு ${payload.class_level || 5}க்கான ${activeTopic} பற்றி நீங்கள் ஏற்கனவே என்ன தெரிந்து வைத்திருக்கிறீர்கள் என்று பார்ப்போம்.`;
  } else if (payload.language === "es") {
    resp.ai_response.tutor_message.text = `¡Hola! Soy VidyaAI, tu tutor personal. Veamos lo que ya sabes sobre ${activeTopic} para Grado ${payload.class_level || 5}. ¿Listo para un reto?`;
  }
  
  return resp;
};

export const submitInteractionMock = async (
  session_id: string,
  payload: {
    question_id: string;
    skill: string;
    type: string;
    answer: string;
    input_mode: string;
  }
): Promise<ApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const qid = payload.question_id;
  const answer = payload.answer.trim();
  const lowercaseTopic = activeTopic.toLowerCase();
  const adapted = getAdaptedDemoResponses(activeTopic, activeLanguage);

  // Scenario 1 -> 2 or 3 (Initial diagnostic comparison)
  if (qid === "frac_q_001") {
    let isWrong = false;
    if (lowercaseTopic === "decimals") {
      isWrong = answer === "0.25" || answer.includes("four") || answer.includes("bada") || answer.includes("pedda") || answer.includes("two five") || answer.includes("0.25");
    } else if (lowercaseTopic === "percentages") {
      isWrong = answer === "25%" || answer === "25" || answer.includes("four") || answer.includes("bada") || answer.includes("pedda") || answer.includes("twenty");
    } else if (lowercaseTopic === "machine learning" || lowercaseTopic === "ml") {
      isWrong = answer.toLowerCase().includes("unsupervised");
    } else if (lowercaseTopic === "photosynthesis") {
      isWrong = answer.toLowerCase().includes("oxygen") || answer.toLowerCase().includes("night");
    } else {
      isWrong = answer === "1/4" || answer.includes("four") || answer.includes("bada") || answer.includes("pedda") || answer.includes("1/4") || answer.toLowerCase().includes("smaller");
    }

    if (isWrong) {
      mockStep = 2;
      const resp = JSON.parse(JSON.stringify(adapted[2]));
      currentWater = Math.max(10, resp.water.new_level);
      currentMastery = resp.learning_update.new_mastery;
      return resp;
    } else {
      mockStep = 3;
      const resp = JSON.parse(JSON.stringify(adapted[3]));
      currentWater = Math.min(100, resp.water.new_level);
      currentMastery = resp.learning_update.new_mastery;
      return resp;
    }
  }

  // Visual question response
  if (qid === "frac_vis_001") {
    let isCorrect = false;
    if (lowercaseTopic === "decimals") {
      isCorrect = answer.includes("0.5") || answer.includes("Half") || answer.includes("1/2") || answer.includes("సగం") || answer.includes("आधा") || answer.includes("0.5 Block");
    } else if (lowercaseTopic === "percentages") {
      isCorrect = answer.includes("50%") || answer.includes("50") || answer.includes("Half") || answer.includes("1/2") || answer.includes("సగం") || answer.includes("आधा") || answer.includes("50% Block");
    } else if (lowercaseTopic === "machine learning" || lowercaseTopic === "ml") {
      isCorrect = answer.toLowerCase().includes("classification") || answer.toLowerCase().includes("supervised");
    } else {
      isCorrect = answer.includes("Half") || answer.includes("1/2") || answer.includes("సగం") || answer.includes("आधा") || answer.includes("Half Block") || answer.includes("1") || answer.toLowerCase().includes("first");
    }

    if (isCorrect) {
      mockStep = 3;
      const resp = JSON.parse(JSON.stringify(adapted[3]));
      currentWater = Math.min(100, resp.water.new_level);
      currentMastery = resp.learning_update.new_mastery;
      return resp;
    } else {
      const resp = JSON.parse(JSON.stringify(adapted[2]));
      resp.ai_response.tutor_message.text = `Let's try again. Look closely at the visual model of ${activeTopic}. Which component has greater magnitude?`;
      return resp;
    }
  }

  // Teach Me description response
  if (payload.type === "teach_me" || qid === "teach_frac_001") {
    // If text is short, prompt for more detail
    if (answer.length < 15) {
      mockStep = 4;
      const explanationText = `Good start! Can you explain a little bit more about why this happens in ${activeTopic}? Imagine you are teaching a friend.`;

      return {
        session_id,
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: explanationText,
            voice_text: `Good start! Can you explain a little bit more about why this happens in ${activeTopic}?`
          }
        },
        evaluation: {
          result: "partial",
          understanding: 0.50,
          reasoning: 0.45,
          explanation_quality: 0.35,
          transfer: 0.0,
          misconception: null
        },
        learning_update: {
          skill: "reasoning",
          previous_mastery: currentMastery,
          new_mastery: currentMastery + 0.02,
          mastery_change: 0.02
        },
        water: {
          previous_level: currentWater,
          change: 2,
          new_level: Math.min(100, currentWater + 2)
        },
        tree: {
          stage: 2,
          growth: 0.0,
          event: "none"
        },
        next_action: {
          type: "teach_me",
          question_id: "teach_frac_001"
        }
      };
    } else {
      // Strong explanation -> Tree grows new leaf & Water surges +12%
      mockStep = 5;
      const resp = JSON.parse(JSON.stringify(adapted[5]));
      resp.learning_update.previous_mastery = currentMastery;
      resp.learning_update.new_mastery = currentMastery + 0.16;
      resp.learning_update.mastery_change = 0.16;
      resp.water.previous_level = currentWater;
      resp.water.new_level = Math.min(100, currentWater + 14);
      resp.water.change = 14;
      resp.tree.stage = 3;
      resp.tree.event = "new_leaf";
      
      currentWater = resp.water.new_level;
      currentMastery = resp.learning_update.new_mastery;
      return resp;
    }
  }

  // Transfer Challenge response
  if (qid === "frac_trans_001") {
    let isCorrect = answer.length > 0 && !answer.toLowerCase().includes("wrong") && !answer.toLowerCase().includes("neither");

    if (isCorrect) {
      mockStep = 6;
      const resp = JSON.parse(JSON.stringify(adapted[6]));
      resp.learning_update.previous_mastery = currentMastery;
      resp.learning_update.new_mastery = Math.min(1.0, currentMastery + 0.18);
      resp.learning_update.mastery_change = resp.learning_update.new_mastery - currentMastery;
      resp.water.previous_level = currentWater;
      resp.water.new_level = Math.min(100, currentWater + 15);
      resp.water.change = 15;
      resp.tree.stage = 4;
      resp.tree.event = "new_branch";
      
      currentWater = resp.water.new_level;
      currentMastery = resp.learning_update.new_mastery;
      return resp;
    } else {
      const resp = JSON.parse(JSON.stringify(adapted[2]));
      resp.ai_response.tutor_message.text = `Not quite! Let's think about how the rules of ${activeTopic} apply in this real-world scenario.`;
      return resp;
    }
  }

  // Harder Challenge (Final Stage)
  if (qid === "frac_hard_001") {
    return {
      session_id,
      ai_response: {
        response_type: "mastery",
        tutor_message: {
          text: `Incredible achievement! You've mastered the advanced concepts for ${activeTopic}! Look at your Learning Tree blossoming with golden flowers and full hydration!`,
          voice_text: `Incredible achievement! You have mastered ${activeTopic}!`
        }
      },
      evaluation: {
        result: "correct",
        understanding: 1.0,
        reasoning: 0.98,
        explanation_quality: 0.95,
        transfer: 0.95,
        misconception: null
      },
      learning_update: {
        skill: "reasoning",
        previous_mastery: currentMastery,
        new_mastery: 1.0,
        mastery_change: 1.0 - currentMastery
      },
      water: {
        previous_level: currentWater,
        change: 100 - currentWater,
        new_level: 100
      },
      tree: {
        stage: 5,
        growth: 1.0,
        event: "flower_bloom"
      },
      next_action: {
        type: "summary",
        question_id: ""
      }
    };
  }

  // Fallback default
  return JSON.parse(JSON.stringify(adapted[1]));
};
