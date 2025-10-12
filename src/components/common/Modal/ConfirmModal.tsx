import Button from '../Button';

import ModalWrapper from './ModalWrapper';

export interface ConfirmModalProps {
	title: string;
	content: React.ReactNode;
	onCancel: () => void;
	confirmButton?: { content: string; onClick: () => void };
	isNegative?: boolean;
}

export default function ConfirmModal({
	title,
	content,
	onCancel,
	confirmButton,
	isNegative = false,
}: ConfirmModalProps) {
	const isText = typeof content === 'string';
	// TODO: useOutsideClick 훅 추가

	return (
		<ModalWrapper>
			<div className="flex w-100 flex-col rounded-xl bg-white">
				<div className="text-headline-01 pt-5 text-center font-semibold">{title}</div>

				<div
					className={
						isText
							? 'text-body-01-normal text-label-neutral mt-2 text-center font-normal whitespace-pre-line'
							: 'mt-4 px-4'
					}
				>
					{content}
				</div>

				<div className="mt-4 flex gap-3 px-4 py-3">
					<Button onClick={onCancel} appearance="solid" variant="assistive" size="medium" className="flex-1">
						취소
					</Button>
					{confirmButton && (
						<Button
							onClick={confirmButton.onClick}
							appearance="solid"
							size="medium"
							backgroundColor={isNegative ? 'bg-status-negative' : undefined}
							className="flex-1"
						>
							{confirmButton.content}
						</Button>
					)}
				</div>
			</div>
		</ModalWrapper>
	);
}
