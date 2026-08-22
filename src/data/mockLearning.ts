import type { ApiResponse } from "../types/learning";

export interface QuestionData {
  id: string;
  skill: string;
  type: "question" | "teach_me" | "transfer_challenge" | "visual_explanation" | "guided_question" | "revisit_prerequisite" | "easier_question" | "harder_question";
  question: string;
  options?: string[];
  hint: string;
  visualContent?: string; // Markdown or simple HTML simulation of fractions
}

export const TOPIC_DATA = {
  title: "AI Personal Tutor",
  classLevel: 5,
  language: "en",
  skillsList: ["comparison", "addition", "simplification", "reasoning"]
};

// Hand-curated question sets for each supported topic
export const TOPICS_DB: {
  [topic: string]: {
    questions: { [id: string]: QuestionData };
    responses: { [step: number]: ApiResponse };
  }
} = {
  fractions: {
    questions: {
      "frac_q_001": {
        id: "frac_q_001",
        skill: "comparison",
        type: "question",
        question: "Which is larger: 1/2 or 1/4?",
        options: ["1/2", "1/4"],
        hint: "Think about dividing a chocolate bar. If you divide it into 2 parts versus 4 parts, which part is larger?"
      },
      "frac_vis_001": {
        id: "frac_vis_001",
        skill: "comparison",
        type: "visual_explanation",
        question: "Let's look at this visually. Which block is longer: the one cut into 2 pieces (half) or the one cut into 4 pieces (quarters)?",
        options: ["Half Block (1/2)", "Quarter Block (1/4)"],
        hint: "Look closely at the sizes of the colored segments. The 1/2 segment takes up more space than the 1/4 segment.",
        visualContent: "half_vs_quarter"
      },
      "teach_frac_001": {
        id: "teach_frac_001",
        skill: "comparison",
        type: "teach_me",
        question: "Your turn! Teach me in your own words: why is 1/2 larger than 1/4?",
        hint: "Try explaining what the bottom number (the denominator) means when you cut a whole object into parts."
      },
      "frac_trans_001": {
        id: "frac_trans_001",
        skill: "comparison",
        type: "transfer_challenge",
        question: "A recipe needs 1/2 cup of milk, and another recipe needs 1/4 cup of milk. Which recipe uses more milk?",
        options: ["The recipe with 1/2 cup", "The recipe with 1/4 cup"],
        hint: "The same rule applies to measuring cups as pizza. Is a half cup bigger or a quarter cup?"
      },
      "frac_hard_001": {
        id: "frac_hard_001",
        skill: "comparison",
        type: "harder_question",
        question: "Excellent! Let's try a tougher one. Which fraction is larger: 3/4 or 5/8?",
        options: ["3/4", "5/8"],
        hint: "Try converting 3/4 so it has the same bottom number as 5/8. What is 3/4 with an 8 at the bottom?"
      }
    },
    responses: {
      1: {
        session_id: "sess_001",
        ai_response: {
          response_type: "greeting",
          tutor_message: {
            text: "Hi there! I am VidyaAI, your personal learning partner. Let's see what you already know about fractions. Ready for a quick puzzle?",
            voice_text: "Hi there! I am Vidya AI, your personal learning partner. Let's see what you already know about fractions."
          }
        },
        evaluation: { result: "correct", understanding: 0.50, reasoning: 0.50, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.45, mastery_change: 0.0 },
        water: { previous_level: 50, change: 0, new_level: 50 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "answer_question", question_id: "frac_q_001" }
      },
      2: {
        session_id: "sess_001",
        ai_response: {
          response_type: "misconception",
          tutor_message: {
            text: "I see why you chose 1/4 because 4 is larger than 2. But remember, the bottom number (denominator) tells us how many pieces we divide the whole into. More pieces mean smaller slices! Let's check a visual representation.",
            voice_text: "I see why you chose one fourth. But remember, more pieces mean smaller slices! Let's check a visual representation."
          }
        },
        evaluation: { result: "wrong", understanding: 0.20, reasoning: 0.30, explanation_quality: 0.0, transfer: 0.0, misconception: "larger_denominator_means_larger_fraction" },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.43, mastery_change: -0.02 },
        water: { previous_level: 50, change: -2, new_level: 48 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "visual_explanation", question_id: "frac_vis_001" }
      },
      3: {
        session_id: "sess_001",
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: "Exactly! The half block is much longer than the quarter block. When we cut a block into only 2 pieces, each piece is bigger. Let's see if you can explain it to me.",
            voice_text: "Exactly! The half block is much longer than the quarter block."
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.43, new_mastery: 0.48, mastery_change: 0.05 },
        water: { previous_level: 48, change: 6, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      4: {
        session_id: "sess_001",
        ai_response: {
          response_type: "teach_me",
          tutor_message: {
            text: "Great! Now teach me in your own words. Why is 1/2 larger than 1/4? Type or speak your thoughts.",
            voice_text: "Great! Now teach me in your own words. Why is one half larger than one fourth?"
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.48, mastery_change: 0.0 },
        water: { previous_level: 54, change: 0, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      5: {
        session_id: "sess_001",
        ai_response: {
          response_type: "correct",
          tutor_message: {
            text: "Wow! What a beautiful explanation. You explained that dividing a whole into fewer parts makes each part larger. That shows true understanding! Look at your tree growing a new leaf!",
            voice_text: "Wow! What a beautiful explanation. That shows true understanding!"
          }
        },
        evaluation: { result: "correct", understanding: 0.91, reasoning: 0.88, explanation_quality: 0.90, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.62, mastery_change: 0.14 },
        water: { previous_level: 54, change: 10, new_level: 64 },
        tree: { stage: 3, growth: 0.14, event: "new_leaf" },
        next_action: { type: "transfer_challenge", question_id: "frac_trans_001" }
      },
      6: {
        session_id: "sess_001",
        ai_response: {
          response_type: "mastery",
          tutor_message: {
            text: "Spectacular! You correctly transferred your understanding to cooking measurements. You've mastered fraction comparisons! Let's celebrate with a stronger branch on your tree.",
            voice_text: "Spectacular! You correctly transferred your understanding to cooking measurements. You have mastered fraction comparisons!"
          }
        },
        evaluation: { result: "correct", understanding: 0.95, reasoning: 0.92, explanation_quality: 0.90, transfer: 0.95, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.62, new_mastery: 0.80, mastery_change: 0.18 },
        water: { previous_level: 64, change: 12, new_level: 76 },
        tree: { stage: 4, growth: 0.18, event: "new_branch" },
        next_action: { type: "harder_question", question_id: "frac_hard_001" }
      }
    }
  },
  decimals: {
    questions: {
      "frac_q_001": {
        id: "frac_q_001",
        skill: "comparison",
        type: "question",
        question: "Which is larger: 0.5 or 0.25?",
        options: ["0.5", "0.25"],
        hint: "Think about money. Is 50 cents (0.5) larger than 25 cents (0.25)?"
      },
      "frac_vis_001": {
        id: "frac_vis_001",
        skill: "comparison",
        type: "visual_explanation",
        question: "Let's look at this visually. Which block is longer: the one shaded to 0.5 or the one shaded to 0.25?",
        options: ["0.5 Block", "0.25 Block"],
        hint: "0.5 represents half of the grid (5 tenths), while 0.25 represents a quarter of the grid (2 tenths and 5 hundredths).",
        visualContent: "half_vs_quarter"
      },
      "teach_frac_001": {
        id: "teach_frac_001",
        skill: "comparison",
        type: "teach_me",
        question: "Your turn! Teach me in your own words: why is 0.5 larger than 0.25, even though 25 is larger than 5?",
        hint: "Think about place value. Look at the tenths place (the first number after the decimal point)."
      },
      "frac_trans_001": {
        id: "frac_trans_001",
        skill: "comparison",
        type: "transfer_challenge",
        question: "An experiment needs 0.5 liters of water, and another needs 0.25 liters. Which experiment needs more water?",
        options: ["The experiment with 0.5 liters", "The experiment with 0.25 liters"],
        hint: "0.5 liters is half a liter, whereas 0.25 liters is a quarter of a liter."
      },
      "frac_hard_001": {
        id: "frac_hard_001",
        skill: "comparison",
        type: "harder_question",
        question: "Excellent! Let's try a tougher one. Which decimal is larger: 0.75 or 0.625?",
        options: ["0.75", "0.625"],
        hint: "Compare the tenths place first. 7 tenths is larger than 6 tenths."
      }
    },
    responses: {
      1: {
        session_id: "sess_001",
        ai_response: {
          response_type: "greeting",
          tutor_message: {
            text: "Hi there! I am VidyaAI, your personal learning partner. Let's see what you already know about decimals. Ready for a quick puzzle?",
            voice_text: "Hi there! I am Vidya AI, your personal learning partner. Let's see what you already know about decimals."
          }
        },
        evaluation: { result: "correct", understanding: 0.50, reasoning: 0.50, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.45, mastery_change: 0.0 },
        water: { previous_level: 50, change: 0, new_level: 50 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "answer_question", question_id: "frac_q_001" }
      },
      2: {
        session_id: "sess_001",
        ai_response: {
          response_type: "misconception",
          tutor_message: {
            text: "I see why you chose 0.25 because 25 is larger than 5. But remember, the first digit after the decimal represents tenths. 0.5 has 5 tenths, while 0.25 has only 2 tenths! Let's see a picture.",
            voice_text: "I see why you chose zero point two five. But remember, place value is what matters! Let's see a picture."
          }
        },
        evaluation: { result: "wrong", understanding: 0.20, reasoning: 0.30, explanation_quality: 0.0, transfer: 0.0, misconception: "larger_number_after_decimal_means_larger" },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.43, mastery_change: -0.02 },
        water: { previous_level: 50, change: -2, new_level: 48 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "visual_explanation", question_id: "frac_vis_001" }
      },
      3: {
        session_id: "sess_001",
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: "Exactly! The 0.5 block is twice as long as the 0.25 block. Having 5 dimes is worth more than having 2 dimes and 5 pennies! Let's see if you can explain it to me.",
            voice_text: "Exactly! The zero point five block is twice as long."
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.43, new_mastery: 0.48, mastery_change: 0.05 },
        water: { previous_level: 48, change: 6, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      4: {
        session_id: "sess_001",
        ai_response: {
          response_type: "teach_me",
          tutor_message: {
            text: "Great! Now teach me in your own words. Why is 0.5 larger than 0.25? Type or speak your thoughts.",
            voice_text: "Great! Now teach me in your own words. Why is zero point five larger than zero point two five?"
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.48, mastery_change: 0.0 },
        water: { previous_level: 54, change: 0, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      5: {
        session_id: "sess_001",
        ai_response: {
          response_type: "correct",
          tutor_message: {
            text: "Wow! What a beautiful explanation. You explained that tenths are larger than hundredths and comparing place value is key. That shows true understanding! Look at your tree growing a new leaf!",
            voice_text: "Wow! What a beautiful explanation. That shows true understanding!"
          }
        },
        evaluation: { result: "correct", understanding: 0.91, reasoning: 0.88, explanation_quality: 0.90, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.62, mastery_change: 0.14 },
        water: { previous_level: 54, change: 10, new_level: 64 },
        tree: { stage: 3, growth: 0.14, event: "new_leaf" },
        next_action: { type: "transfer_challenge", question_id: "frac_trans_001" }
      },
      6: {
        session_id: "sess_001",
        ai_response: {
          response_type: "mastery",
          tutor_message: {
            text: "Spectacular! You correctly transferred your understanding to metric units. You've mastered decimal comparisons! Let's celebrate with a stronger branch on your tree.",
            voice_text: "Spectacular! You correctly transferred your understanding. You have mastered decimal comparisons!"
          }
        },
        evaluation: { result: "correct", understanding: 0.95, reasoning: 0.92, explanation_quality: 0.90, transfer: 0.95, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.62, new_mastery: 0.80, mastery_change: 0.18 },
        water: { previous_level: 64, change: 12, new_level: 76 },
        tree: { stage: 4, growth: 0.18, event: "new_branch" },
        next_action: { type: "harder_question", question_id: "frac_hard_001" }
      }
    }
  },
  percentages: {
    questions: {
      "frac_q_001": {
        id: "frac_q_001",
        skill: "comparison",
        type: "question",
        question: "Which is larger: 50% or 25%?",
        options: ["50%", "25%"],
        hint: "Percentages are parts out of 100. Is 50 parts larger or 25 parts larger?"
      },
      "frac_vis_001": {
        id: "frac_vis_001",
        skill: "comparison",
        type: "visual_explanation",
        question: "Let's look at this visually. Which grid shows a larger shaded portion: 50% or 25%?",
        options: ["50% Block", "25% Block"],
        hint: "50% takes up exactly half the area, while 25% takes up exactly one quarter.",
        visualContent: "half_vs_quarter"
      },
      "teach_frac_001": {
        id: "teach_frac_001",
        skill: "comparison",
        type: "teach_me",
        question: "Your turn! Teach me in your own words: why is 50% larger than 25%?",
        hint: "Explain what percent (%) means, and compare the count out of 100."
      },
      "frac_trans_001": {
        id: "frac_trans_001",
        skill: "comparison",
        type: "transfer_challenge",
        question: "A phone battery has 50% charge, and another has 25% charge. Which phone can run longer under the same usage?",
        options: ["The phone with 50% battery", "The phone with 25% battery"],
        hint: "Which battery contains a larger fraction of its full capacity?"
      },
      "frac_hard_001": {
        id: "frac_hard_001",
        skill: "comparison",
        type: "harder_question",
        question: "Excellent! Let's try a tougher one. Which percentage is larger: 75% or 62.5%?",
        options: ["75%", "62.5%"],
        hint: "Both are out of 100. Compare 75 parts vs 62.5 parts."
      }
    },
    responses: {
      1: {
        session_id: "sess_001",
        ai_response: {
          response_type: "greeting",
          tutor_message: {
            text: "Hi there! I am VidyaAI, your personal learning partner. Let's see what you already know about percentages. Ready for a quick puzzle?",
            voice_text: "Hi there! I am Vidya AI, your personal learning partner. Let's see what you already know about percentages."
          }
        },
        evaluation: { result: "correct", understanding: 0.50, reasoning: 0.50, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.45, mastery_change: 0.0 },
        water: { previous_level: 50, change: 0, new_level: 50 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "answer_question", question_id: "frac_q_001" }
      },
      2: {
        session_id: "sess_001",
        ai_response: {
          response_type: "misconception",
          tutor_message: {
            text: "I see why you chose 25% because 25 is a common quarter benchmark. But remember, percentages are portions out of 100. 50% is 50 parts, while 25% is only 25 parts. Let's check a visual representation.",
            voice_text: "Let's review this with a visual representation."
          }
        },
        evaluation: { result: "wrong", understanding: 0.20, reasoning: 0.30, explanation_quality: 0.0, transfer: 0.0, misconception: "confuses_percentage_proportions" },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.43, mastery_change: -0.02 },
        water: { previous_level: 50, change: -2, new_level: 48 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "visual_explanation", question_id: "frac_vis_001" }
      },
      3: {
        session_id: "sess_001",
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: "Exactly! The 50% block is twice as large as the 25% block. 50% represents half of the whole. Let's see if you can explain it to me.",
            voice_text: "Exactly! The fifty percent block is twice as large."
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.43, new_mastery: 0.48, mastery_change: 0.05 },
        water: { previous_level: 48, change: 6, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      4: {
        session_id: "sess_001",
        ai_response: {
          response_type: "teach_me",
          tutor_message: {
            text: "Great! Now teach me in your own words. Why is 50% larger than 25%? Type or speak your thoughts.",
            voice_text: "Great! Now teach me in your own words. Why is fifty percent larger than twenty-five percent?"
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.48, mastery_change: 0.0 },
        water: { previous_level: 54, change: 0, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      5: {
        session_id: "sess_001",
        ai_response: {
          response_type: "correct",
          tutor_message: {
            text: "Wow! What a beautiful explanation. You explained that percentages represent fractions of 100, so a larger count is a larger fraction. That shows true understanding! Look at your tree growing a new leaf!",
            voice_text: "Wow! What a beautiful explanation. That shows true understanding!"
          }
        },
        evaluation: { result: "correct", understanding: 0.91, reasoning: 0.88, explanation_quality: 0.90, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.62, mastery_change: 0.14 },
        water: { previous_level: 54, change: 10, new_level: 64 },
        tree: { stage: 3, growth: 0.14, event: "new_leaf" },
        next_action: { type: "transfer_challenge", question_id: "frac_trans_001" }
      },
      6: {
        session_id: "sess_001",
        ai_response: {
          response_type: "mastery",
          tutor_message: {
            text: "Spectacular! You correctly transferred your understanding to battery levels. You've mastered percentage comparisons! Let's celebrate with a stronger branch on your tree.",
            voice_text: "Spectacular! You correctly transferred your understanding. You have mastered percentage comparisons!"
          }
        },
        evaluation: { result: "correct", understanding: 0.95, reasoning: 0.92, explanation_quality: 0.90, transfer: 0.95, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.62, new_mastery: 0.80, mastery_change: 0.18 },
        water: { previous_level: 64, change: 12, new_level: 76 },
        tree: { stage: 4, growth: 0.18, event: "new_branch" },
        next_action: { type: "harder_question", question_id: "frac_hard_001" }
      }
    }
  },
  algebra: {
    questions: {
      "frac_q_001": {
        id: "frac_q_001",
        skill: "comparison",
        type: "question",
        question: "Solve for x: if 2x + 4 = 10, what is the value of x?",
        options: ["x = 3", "x = 4"],
        hint: "Subtract 4 from both sides to isolate 2x. What is 10 - 4? Then divide by 2."
      },
      "frac_vis_001": {
        id: "frac_vis_001",
        skill: "comparison",
        type: "visual_explanation",
        question: "Let's look at this visually. In the equation y = mx + c, which variable represents the slope (steepness) of the line?",
        options: ["m (slope)", "c (y-intercept)"],
        hint: "The multiplier of x determines how fast y increases as x grows, which defines the slope of the line.",
        visualContent: "half_vs_quarter"
      },
      "teach_frac_001": {
        id: "teach_frac_001",
        skill: "comparison",
        type: "teach_me",
        question: "Your turn! Teach me in your own words: why must we perform the exact same operation on both sides of an algebraic equation?",
        hint: "Think of an equation like a balance scale. What happens if you add or remove weight on one side only?"
      },
      "frac_trans_001": {
        id: "frac_trans_001",
        skill: "comparison",
        type: "transfer_challenge",
        question: "A taxi charges a flat rate of $5 plus $2 per mile. Which algebraic expression represents the total cost for x miles?",
        options: ["2x + 5", "5x + 2"],
        hint: "The flat fee ($5) is paid once, and the per-mile cost ($2) is multiplied by the number of miles (x)."
      },
      "frac_hard_001": {
        id: "frac_hard_001",
        skill: "comparison",
        type: "harder_question",
        question: "Excellent! Let's try a tougher one. Solve for x: if x^2 - 9 = 0, what are the possible values of x?",
        options: ["x = 3 or -3", "x = 9 or -9"],
        hint: "Add 9 to both sides, so x^2 = 9. Find all numbers that square to 9."
      }
    },
    responses: {
      1: {
        session_id: "sess_001",
        ai_response: {
          response_type: "greeting",
          tutor_message: {
            text: "Hi there! I am VidyaAI, your personal learning partner. Let's see what you already know about algebra. Ready for a quick puzzle?",
            voice_text: "Hi there! I am Vidya AI, your personal learning partner. Let's see what you already know about algebra."
          }
        },
        evaluation: { result: "correct", understanding: 0.50, reasoning: 0.50, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.45, mastery_change: 0.0 },
        water: { previous_level: 50, change: 0, new_level: 50 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "answer_question", question_id: "frac_q_001" }
      },
      2: {
        session_id: "sess_001",
        ai_response: {
          response_type: "misconception",
          tutor_message: {
            text: "I see why you chose x = 4. Perhaps you added 4 and 10 or made a calculation error. Let's write the equation down and solve it step-by-step.",
            voice_text: "Let's review this algebra equation step by step."
          }
        },
        evaluation: { result: "wrong", understanding: 0.20, reasoning: 0.30, explanation_quality: 0.0, transfer: 0.0, misconception: "basic_algebra_arithmetic_error" },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.43, mastery_change: -0.02 },
        water: { previous_level: 50, change: -2, new_level: 48 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "visual_explanation", question_id: "frac_vis_001" }
      },
      3: {
        session_id: "sess_001",
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: "Exactly! 'm' represents the slope (rise over run), while 'c' represents the y-intercept where the line hits the vertical axis. Let's see if you can explain equations to me.",
            voice_text: "Exactly! m represents the slope."
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.43, new_mastery: 0.48, mastery_change: 0.05 },
        water: { previous_level: 48, change: 6, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      4: {
        session_id: "sess_001",
        ai_response: {
          response_type: "teach_me",
          tutor_message: {
            text: "Great! Now teach me in your own words. Why must we perform the same operation on both sides of an equation? Type or speak your thoughts.",
            voice_text: "Great! Now teach me in your own words. Why must we perform the same operation on both sides of an equation?"
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.48, mastery_change: 0.0 },
        water: { previous_level: 54, change: 0, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      5: {
        session_id: "sess_001",
        ai_response: {
          response_type: "correct",
          tutor_message: {
            text: "Wow! What a beautiful explanation. You explained that an equation is a balance, so operations on both sides preserve equality. That shows true understanding! Look at your tree growing a new leaf!",
            voice_text: "Wow! What a beautiful explanation. That shows true understanding!"
          }
        },
        evaluation: { result: "correct", understanding: 0.91, reasoning: 0.88, explanation_quality: 0.90, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.62, mastery_change: 0.14 },
        water: { previous_level: 54, change: 10, new_level: 64 },
        tree: { stage: 3, growth: 0.14, event: "new_leaf" },
        next_action: { type: "transfer_challenge", question_id: "frac_trans_001" }
      },
      6: {
        session_id: "sess_001",
        ai_response: {
          response_type: "mastery",
          tutor_message: {
            text: "Spectacular! You correctly modeled the taxi fare algebraically. You've mastered algebraic setups! Let's celebrate with a stronger branch on your tree.",
            voice_text: "Spectacular! You correctly modeled the taxi fare. You have mastered algebraic setups!"
          }
        },
        evaluation: { result: "correct", understanding: 0.95, reasoning: 0.92, explanation_quality: 0.90, transfer: 0.95, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.62, new_mastery: 0.80, mastery_change: 0.18 },
        water: { previous_level: 64, change: 12, new_level: 76 },
        tree: { stage: 4, growth: 0.18, event: "new_branch" },
        next_action: { type: "harder_question", question_id: "frac_hard_001" }
      }
    }
  },
  "machine learning": {
    questions: {
      "frac_q_001": {
        id: "frac_q_001",
        skill: "comparison",
        type: "question",
        question: "Which type of learning requires labeled training data: Supervised Learning or Unsupervised Learning?",
        options: ["Supervised Learning", "Unsupervised Learning"],
        hint: "Think about whether you need a 'teacher' (target labels/answers) to guide the training process."
      },
      "frac_vis_001": {
        id: "frac_vis_001",
        skill: "comparison",
        type: "visual_explanation",
        question: "Let's look at this visually. In a scatter plot of data points with a decision boundary line, which technique separates the groups: Classification or Clustering?",
        options: ["Classification (Supervised)", "Clustering (Unsupervised)"],
        hint: "Classification draws a line to separate classes, whereas clustering groups points by distance.",
        visualContent: "half_vs_quarter"
      },
      "teach_frac_001": {
        id: "teach_frac_001",
        skill: "comparison",
        type: "teach_me",
        question: "Your turn! Teach me in your own words: why does overfitting happen in Machine Learning models?",
        hint: "Think about what happens when a model learns the training noise too well instead of the general pattern."
      },
      "frac_trans_001": {
        id: "frac_trans_001",
        skill: "comparison",
        type: "transfer_challenge",
        question: "A model is trained to predict house prices (regression) but is now asked to classify emails as spam or not. Can we use a regression output directly for binary classification?",
        options: ["No, we need classification mapping", "Yes, directly"],
        hint: "We need a threshold function (like the Sigmoid function) to map continuous regression outputs to binary classes."
      },
      "frac_hard_001": {
        id: "frac_hard_001",
        skill: "comparison",
        type: "harder_question",
        question: "Excellent! Let's try a tougher one. Which evaluation metric is more appropriate for a highly imbalanced dataset: Accuracy or F1-Score?",
        options: ["F1-Score", "Accuracy"],
        hint: "If 99% of emails are not spam, a model that says 'never spam' is 99% accurate but useless. F1-Score balances precision and recall."
      }
    },
    responses: {
      1: {
        session_id: "sess_001",
        ai_response: {
          response_type: "greeting",
          tutor_message: {
            text: "Hi there! I am VidyaAI, your personal learning partner. Let's see what you already know about Machine Learning. Ready for a quick puzzle?",
            voice_text: "Hi there! I am Vidya AI, your personal learning partner. Let's see what you already know about Machine Learning."
          }
        },
        evaluation: { result: "correct", understanding: 0.50, reasoning: 0.50, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.45, mastery_change: 0.0 },
        water: { previous_level: 50, change: 0, new_level: 50 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "answer_question", question_id: "frac_q_001" }
      },
      2: {
        session_id: "sess_001",
        ai_response: {
          response_type: "misconception",
          tutor_message: {
            text: "I see why you chose Unsupervised Learning, but remember: Supervised Learning relies on supervisor guidance (labels) to train. Unsupervised learning finds hidden patterns without labels. Let's check a visual representation.",
            voice_text: "Let's review supervised versus unsupervised learning with a visual representation."
          }
        },
        evaluation: { result: "wrong", understanding: 0.20, reasoning: 0.30, explanation_quality: 0.0, transfer: 0.0, misconception: "confuses_supervised_unsupervised" },
        learning_update: { skill: "comparison", previous_mastery: 0.45, new_mastery: 0.43, mastery_change: -0.02 },
        water: { previous_level: 50, change: -2, new_level: 48 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "visual_explanation", question_id: "frac_vis_001" }
      },
      3: {
        session_id: "sess_001",
        ai_response: {
          response_type: "guidance",
          tutor_message: {
            text: "Exactly! Classification draws a decision boundary (line) to separate labeled classes. Clustering groups unlabeled data points by proximity. Let's see if you can explain ML to me.",
            voice_text: "Exactly! Classification separates classes, while clustering groups data by distance."
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.43, new_mastery: 0.48, mastery_change: 0.05 },
        water: { previous_level: 48, change: 6, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      4: {
        session_id: "sess_001",
        ai_response: {
          response_type: "teach_me",
          tutor_message: {
            text: "Great! Now teach me in your own words. Why does overfitting happen in Machine Learning? Type or speak your thoughts.",
            voice_text: "Great! Now teach me in your own words. Why does overfitting happen in Machine Learning?"
          }
        },
        evaluation: { result: "correct", understanding: 0.60, reasoning: 0.65, explanation_quality: 0.0, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.48, mastery_change: 0.0 },
        water: { previous_level: 54, change: 0, new_level: 54 },
        tree: { stage: 2, growth: 0.0, event: "none" },
        next_action: { type: "teach_me", question_id: "teach_frac_001" }
      },
      5: {
        session_id: "sess_001",
        ai_response: {
          response_type: "correct",
          tutor_message: {
            text: "Wow! What a beautiful explanation. You explained that the model memorizes the training data noise instead of learning the general trend. That shows true understanding! Look at your tree growing a new leaf!",
            voice_text: "Wow! What a beautiful explanation. That shows true understanding!"
          }
        },
        evaluation: { result: "correct", understanding: 0.91, reasoning: 0.88, explanation_quality: 0.90, transfer: 0.0, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.48, new_mastery: 0.62, mastery_change: 0.14 },
        water: { previous_level: 54, change: 10, new_level: 64 },
        tree: { stage: 3, growth: 0.14, event: "new_leaf" },
        next_action: { type: "transfer_challenge", question_id: "frac_trans_001" }
      },
      6: {
        session_id: "sess_001",
        ai_response: {
          response_type: "mastery",
          tutor_message: {
            text: "Spectacular! You correctly explained how continuous values are mapped using thresholding. You've mastered basic ML comparisons! Let's celebrate with a stronger branch on your tree.",
            voice_text: "Spectacular! You correctly transferred your understanding to binary classification. You have mastered basic Machine Learning concepts!"
          }
        },
        evaluation: { result: "correct", understanding: 0.95, reasoning: 0.92, explanation_quality: 0.90, transfer: 0.95, misconception: null },
        learning_update: { skill: "comparison", previous_mastery: 0.62, new_mastery: 0.80, mastery_change: 0.18 },
        water: { previous_level: 64, change: 12, new_level: 76 },
        tree: { stage: 4, growth: 0.18, event: "new_branch" },
        next_action: { type: "harder_question", question_id: "frac_hard_001" }
      }
    }
  }
};

// Also support "ml" alias for "machine learning"
TOPICS_DB["ml"] = TOPICS_DB["machine learning"];

export const getQuestionsForTopic = (topicName: string): { [id: string]: QuestionData } => {
  const normalized = topicName.trim().toLowerCase();
  if (TOPICS_DB[normalized]) {
    return TOPICS_DB[normalized].questions;
  }
  
  // Custom topic template fallback
  return getAdaptedQuestions(topicName);
};

export const getAdaptedQuestions = (topicName: string): { [id: string]: QuestionData } => {
  const lowercaseTopic = topicName.trim().toLowerCase();
  const adapted: { [id: string]: QuestionData } = {};
  
  // Base off fractions and adapt
  const baseQuestions = TOPICS_DB["fractions"].questions;
  
  for (const [id, q] of Object.entries(baseQuestions)) {
    let questionText = q.question;
    let hintText = q.hint;
    let options = q.options ? [...q.options] : undefined;
    
    questionText = questionText
      .replace(/fractions/gi, topicName)
      .replace(/fraction/gi, topicName);
    hintText = hintText
      .replace(/fractions/gi, topicName)
      .replace(/fraction/gi, topicName);
    
    adapted[id] = {
      ...q,
      question: questionText,
      hint: hintText,
      options
    };
  }
  
  return adapted;
};

export const getAdaptedDemoResponses = (topicName: string, language: string): { [step: number]: ApiResponse } => {
  const normalized = topicName.trim().toLowerCase();
  if (TOPICS_DB[normalized]) {
    // Return direct static responses if curated
    const db = TOPICS_DB[normalized].responses;
    
    // Apply translations directly for curated topics
    if (language === "te" || language === "hi") {
      const adapted: { [step: number]: ApiResponse } = {};
      for (const [step, resp] of Object.entries(db)) {
        const stepNum = parseInt(step);
        const cloned = JSON.parse(JSON.stringify(resp)) as ApiResponse;
        // Basic translation substitution
        if (cloned.ai_response && cloned.ai_response.tutor_message) {
          if (language === "te") {
            cloned.ai_response.tutor_message.text = cloned.ai_response.tutor_message.text
              .replace(/super/gi, "సూపర్")
              .replace(/great/gi, "చాలా బాగుంది")
              .replace(/correct/gi, "సరైనది");
          } else {
            cloned.ai_response.tutor_message.text = cloned.ai_response.tutor_message.text
              .replace(/super/gi, "शानदार")
              .replace(/great/gi, "बहुत अच्छा")
              .replace(/correct/gi, "सही");
          }
        }
        adapted[stepNum] = cloned;
      }
      return adapted;
    }
    
    return db;
  }

  // General fallback text replacement
  const lowercaseTopic = topicName.trim().toLowerCase();
  
  const adaptString = (str: string): string => {
    let result = str;
    result = result
      .replace(/fractions/gi, topicName)
      .replace(/fraction/gi, topicName);
    
    // Telugu replacements for custom topics
    if (language === "te") {
      result = result
        .replace(/భిన్నాల/g, topicName)
        .replace(/భిన్నాలు/g, topicName)
        .replace(/భిన్నం/g, topicName);
    }
    // Hindi replacements for custom topics
    if (language === "hi") {
      result = result
        .replace(/भिन्नों/g, topicName)
        .replace(/भिन्न/g, topicName);
    }
    return result;
  };

  const adapted: { [step: number]: ApiResponse } = {};
  const baseResponses = TOPICS_DB["fractions"].responses;
  
  for (const [stepStr, resp] of Object.entries(baseResponses)) {
    const step = parseInt(stepStr);
    const cloned = JSON.parse(JSON.stringify(resp)) as ApiResponse;
    
    if (cloned.ai_response && cloned.ai_response.tutor_message) {
      cloned.ai_response.tutor_message.text = adaptString(cloned.ai_response.tutor_message.text);
      cloned.ai_response.tutor_message.voice_text = adaptString(cloned.ai_response.tutor_message.voice_text);
    }
    
    adapted[step] = cloned;
  }
  
  return adapted;
};
