declare module 'tailwind-merge' {
	export type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, unknown>;
	export const twMerge: (...classLists: ClassValue[]) => string;
	export default twMerge;
}
