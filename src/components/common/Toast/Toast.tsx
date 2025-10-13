import { useEffect, useState } from 'react';

import ArrowIcon from '@/assets/svgs/common/arrow.svg?react';
import AlertIcon from '@/assets/svgs/toast/alert.svg?react';
import CheckIcon from '@/assets/svgs/toast/confirm.svg?react';

interface ToastProps {
	message: string;
	type?: 'check' | 'alert';
	actionLabel?: string;
	onActionClick?: () => void;
	duration?: number;
	onClose?: () => void;
}

export default function Toast({
	message,
	type = 'check',
	actionLabel,
	onActionClick,
	duration = 3000,
	onClose,
}: ToastProps) {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		if (!duration) return; // duration이 0이면 자동 닫힘 비활성화
		const timer = setTimeout(() => {
			setVisible(false);
			onClose?.();
		}, duration);
		return () => clearTimeout(timer);
	}, [duration, onClose]);

	if (!visible) return null;

	const renderIcon = () => {
		switch (type) {
			case 'alert':
				return <AlertIcon />;
			case 'check':
			default:
				return <CheckIcon />;
		}
	};

	return (
		<div className="bg-label-neutral fixed bottom-10 left-1/2 z-[100] flex w-[335px] -translate-x-1/2 transform items-center justify-between gap-2 rounded-lg px-3 py-2 text-white">
			<div className="flex items-center gap-1">
				{renderIcon()}
				<span className="text-label-01-normal px-0.5 py-1.25 font-semibold">{message}</span>
			</div>

			{actionLabel && (
				<button onClick={onActionClick} className="flex items-center gap-0.5">
					<span className="text-label-02">{actionLabel}</span>
					<ArrowIcon className="h-4.5 w-4.5 text-white" />
				</button>
			)}
		</div>
	);
}
