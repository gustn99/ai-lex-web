import clsx from 'clsx';
import { Chip } from './ChipList';

// TODO: 주석 원복
// import ChipIcon from '@/assets/chip/deselect.svg?react'

export interface ChipButtonProps {
	chip: Chip;
	isActive: boolean;
	isAll: boolean;
	isEditable?: boolean;
	onSelect: (chip: string) => void;
	onDeselect: (e: React.MouseEvent, chip: string) => void;
	setIsMenuOpen: (state: boolean) => void;
}

export default function ChipButton({
	chip,
	isActive,
	isAll,
	isEditable = false,
	onSelect,
	onDeselect,
	setIsMenuOpen,
}: ChipButtonProps) {
	const handleContextMenu = (e: React.MouseEvent) => {
		// if (!isEditable || isAll) return;
		e.preventDefault();
		setIsMenuOpen(true);
	};

	const { label, value, backgroundColor } = chip;

	// TODO: bg twMerge 적용
	return (
		<button
			className={clsx(
				'flex items-center gap-1 rounded-lg border px-2.5 py-1.5',
				isActive
					? `bg-label-strong ${backgroundColor} text-inverse-label`
					: 'border-line-normal-neutral text-label-alternative',
			)}
			onClick={() => onSelect(label)}
			onContextMenu={handleContextMenu}
		>
			{value}

			{!isAll && isActive && (
				<div
					role="button"
					tabIndex={0}
					onClick={(e) => onDeselect(e, label)}
					className="bg-accent-background-cyan h-4 w-4"
				>
					{/* <ChipIcon /> */}
				</div>
			)}
		</button>
	);
}
