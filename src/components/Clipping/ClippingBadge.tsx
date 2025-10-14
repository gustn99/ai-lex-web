import clsx from 'clsx';

import EnforceIcon from '@/assets/svgs/clipping/enforce.svg?react';
import ReasonIcon from '@/assets/svgs/clipping/reason.svg?react';
import RefuteIcon from '@/assets/svgs/clipping/refute.svg?react';

// TODO: 추후 api 연동하면서 type 모듈화
// TODO: EVIDENCE_REQUEST 추가
type ClippingType = 'REFUTED' | 'ENFORCED' | 'REASON';

interface ClippingBadgeProps {
	type: ClippingType;
	hasText?: boolean;
	hasGap?: boolean;
	count?: number;
	size?: 12 | 15;
}
export default function ClippingBadge({ type, hasText = false, hasGap = false, count, size = 12 }: ClippingBadgeProps) {
	const Icon = ({ type }: { type: ClippingType }) => {
		if (type === 'REFUTED') return <RefuteIcon />;
		if (type === 'ENFORCED') return <EnforceIcon />;
		if (type === 'REASON') return <ReasonIcon />;
	};

	const tag = {
		REFUTED: { textContent: '반박', color: 'text-tag-orange' },
		ENFORCED: { textContent: '강화', color: 'text-tag-green' },
		REASON: { textContent: '증거', color: 'text-tag-purple' },
	};

	const textSize = {
		12: 'text-caption-01',
		15: 'text-body-02-normal',
	};

	return (
		<div className={clsx('flex items-center font-semibold', textSize[size], tag[type]['color'])}>
			<Icon type={type} />
			{hasText && <div className={hasGap ? 'ml-0.5' : ''}>{tag[type]['textContent']}</div>}
			{count && <div>{count}</div>}
		</div>
	);
}
