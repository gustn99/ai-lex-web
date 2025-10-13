import EnhanceIcon from '@/assets/svgs/clipping/enhance-icon.svg?react';
import EvidenceIcon from '@/assets/svgs/clipping/evidence-request-icon.svg?react';
import RebuttalIcon from '@/assets/svgs/clipping/rebuttal-icon.svg?react';

export const typeConfig = {
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
