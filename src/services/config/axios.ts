import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const request: AxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	timeout: 20000,
	headers: { accept: 'application/json' },
});

// 요청 인터셉터 (토큰 등 추가 가능)
request.interceptors.request.use(
	(config) => {
		// 토큰 추가
		// const token = localStorage.getItem('token');
		// if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => Promise.reject(error),
);

// 응답 인터셉터
request.interceptors.response.use(
	(response: AxiosResponse) => response.data, // data만 반환
	async (error) => {
		const status = error.response?.status || 0;
		const statusText = error.response?.statusText || error.message;
		const data = error.response?.data || null;

		const customError = new Error(data?.message || statusText) as any;
		customError.statusCode = status;
		customError.errorData = data;

		// 에러 로깅
		const method = error.config?.method?.toUpperCase() || 'UNKNOWN';
		const url = error.config?.url || 'UNKNOWN';
		console.error(`${method} ${url} (${status}):`, customError);

		throw customError;
	},
);

// Generic 메서드 wrapper
export const apiRequest = {
	get: <T = any>(url: string, config?: AxiosRequestConfig) => request.get<T>(url, config),
	post: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) => request.post<T>(url, data, config),
	put: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) => request.put<T>(url, data, config),
	patch: <T = any>(url: string, data?: unknown, config?: AxiosRequestConfig) => request.patch<T>(url, data, config),
	delete: <T = any>(url: string, config?: AxiosRequestConfig) => request.delete<T>(url, config),
};
