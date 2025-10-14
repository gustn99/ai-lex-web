export const CHATBOT_CATEGORIES = ['금융', '카카오톡', '이메일', '의무기록지', '녹취록'] as const;

export const CATEGORY_MAPPING: Record<string, (typeof CHATBOT_CATEGORIES)[number]> = {
	FINANCE: '금융',
	KAKAO_TALK: '카카오톡',
	EMAIL: '이메일',
	MEDICAL_RECORD: '의무기록지',
	RECORDING: '녹취록',
};
