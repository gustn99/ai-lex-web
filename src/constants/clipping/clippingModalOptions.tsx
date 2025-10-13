import EnhanceIcon from '@/assets/svgs/clipping/enhance-icon.svg?react';
import EvidenceIcon from '@/assets/svgs/clipping/evidence-request-icon.svg?react';
import RebuttalIcon from '@/assets/svgs/clipping/rebuttal-icon.svg?react';

export const CLIPPING_MODAL_MENUS = [
	{ label: 'all', value: '전체' },
	{ label: 'enhance', value: '강화' },
	{ label: 'rebuttal', value: '반박' },
	{ label: 'evidence', value: '근거' },
	{ label: 'evidence-request', value: '증거제출 요청' },
] as const;

export const CLIPPING_TYPE_CONFIGS = {
	rebuttal: {
		label: '반박',
		icon: <RebuttalIcon />,
		typeColor: 'text-tag-orange',
	},
	evidence: {
		label: '근거',
		icon: <EvidenceIcon className="text-tag-purple" />,
		typeColor: 'text-tag-purple',
	},
	enhance: {
		label: '강화',
		icon: <EnhanceIcon />,
		typeColor: 'text-tag-green',
	},
	'evidence-request': {
		label: '증거 제출 요청',
		icon: <EvidenceIcon className="text-accent-foreground-cyan" />,
		typeColor: 'text-accent-foreground-cyan',
	},
} as const;
