export const API_BASE_URL = process.env.NEXT_PUBLIC_CHAT_API_URI;
export const config = {
  getAIChatResponse: `${API_BASE_URL}/get_response/corporate`,
};

export default config;
