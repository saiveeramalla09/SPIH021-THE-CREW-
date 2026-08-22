import type { ApiResponse } from "../types/learning";
import { startSessionMock, submitInteractionMock } from "./mockApi";

// Check environment variables to determine base URL.
// If VITE_API_BASE_URL is not set, we run entirely in Mock API Mode.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const USE_MOCK = !API_BASE_URL;

export const startSession = async (payload: {
  student_id: string;
  class_level: number;
  language: string;
  topic: string;
  goal: string;
  input_mode: string;
}): Promise<ApiResponse> => {
  if (USE_MOCK) {
    console.log("VidyaAI API: Running in Mock Mode (Start Session)");
    return startSessionMock(payload);
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/session/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("VidyaAI API: Flask backend communication error (Start Session)", error);
    throw error;
  }
};

export const submitInteraction = async (
  session_id: string,
  payload: {
    question_id: string;
    skill: string;
    type: string;
    answer: string;
    input_mode: string;
  }
): Promise<ApiResponse> => {
  if (USE_MOCK) {
    console.log(`VidyaAI API: Running in Mock Mode (Submit Interaction: ${payload.question_id})`);
    return submitInteractionMock(session_id, payload);
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/session/${session_id}/interaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("VidyaAI API: Flask backend communication error (Submit Interaction)", error);
    throw error;
  }
};
