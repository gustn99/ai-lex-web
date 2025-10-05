import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	// 무시할 경로
	globalIgnores(['dist', '.next', 'node_modules', 'eslint.config.js', 'vite.config.ts']),

	{
		files: ['**/*.{ts,tsx,js,jsx}'],

		// Flat Config에서는 plugin 등록이 객체로 이루어짐
		plugins: {
			import: importPlugin,
			'unused-imports': unusedImports,
			prettier: prettierPlugin,
		},

		// 중첩 extends 금지 → 스프레드(...)로 풀어서 flat하게 작성
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],

		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},

		rules: {
			// -------------------
			// TypeScript 규칙
			// -------------------
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'warn',

			// -------------------
			// React Hooks 규칙
			// -------------------
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// -------------------
			// Import 규칙
			// -------------------
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external', 'internal'], ['parent', 'sibling', 'index'], 'unknown'],
					pathGroups: [
						{ pattern: 'react*', group: 'builtin', position: 'before' },
						{ pattern: '@/assets/**', group: 'internal', position: 'after' },
						{ pattern: '@/components/**', group: 'internal', position: 'after' },
						{ pattern: '@/hooks/**', group: 'internal', position: 'after' },
						{ pattern: '@/lib/**', group: 'internal', position: 'after' },
						{ pattern: '@/services/**', group: 'internal', position: 'after' },
						{ pattern: '@/types/**', group: 'internal', position: 'after' },
						{ pattern: '@/**', group: 'internal', position: 'after' },
						{ pattern: '../**', group: 'internal', position: 'after' },
						{ pattern: './**', group: 'internal', position: 'after' },
					],
					pathGroupsExcludedImportTypes: [],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
				},
			],

			// -------------------
			// Unused Imports 규칙
			// -------------------
			'unused-imports/no-unused-imports': 'warn',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// -------------------
			// Prettier 통합
			// -------------------
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
					singleQuote: true,
					semi: true,
					printWidth: 100,
					tabWidth: 2,
					trailingComma: 'all',
				},
			],
		},
	},
]);
