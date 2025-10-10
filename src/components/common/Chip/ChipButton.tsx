import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import ChipIcon from '@/assets/svgs/chip/deselect.svg?react';

import { Chip } from './ChipList';

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
		if (!isEditable || isAll) return;
		e.preventDefault();
		setIsMenuOpen(true);
	};

	const { label, value, backgroundColor } = chip;

	return (
		<button
			className={twMerge(
				clsx(
					'flex items-center gap-1 rounded-lg border px-2.5 py-1.5',
					isActive
						? `bg-label-strong ${backgroundColor} text-inverse-label`
						: 'border-line-normal-neutral text-label-alternative',
				),
			)}
			onClick={() => onSelect(label)}
			onContextMenu={handleContextMenu}
		>
			{value}

			{!isAll && isActive && (
				<div role="button" tabIndex={0} onClick={(e) => onDeselect(e, label)}>
					<ChipIcon />
				</div>
			)}
		</button>
	);
}
