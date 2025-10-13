import clsx from 'clsx';

import PlusIcon from '@/assets/svgs/clipping/plus.svg?react';

import Chip from './Chip';

export interface Chip {
	label: string;
	value: string;
	backgroundColor?: string;
}

export interface ChipListProps {
	chips: Chip[];
	activeChips: string[];
	isEditable?: boolean;
	isSingleSelect?: boolean;
	setActiveChips: (chips: string[]) => void;
	onAddChip?: () => void;
	isNewFolderActive?: boolean;
	setIsNewFolderActive?: (state: boolean) => void;
}

export default function ChipList({
	chips,
	activeChips,
	isEditable = false,
	isSingleSelect,
	setActiveChips,
	onAddChip,
	isNewFolderActive = false,
	setIsNewFolderActive,
}: ChipListProps) {
	const handleSelect = (chip: string) => {
		if (setIsNewFolderActive) setIsNewFolderActive(false);
		if (chip === 'all') {
			setActiveChips(['all']);
			return;
		}
		if (isSingleSelect) {
			setActiveChips([chip]);
			return;
		}

		if (activeChips.includes(chip)) return;

		const filteredChips = activeChips.filter((c) => c !== 'all');
		const nextActiveChips = [...filteredChips, chip];

		const selectableChips = chips.filter((c) => c.label !== 'all'); // 전체 외 chips
		const isAllSelected = selectableChips.every((c) => nextActiveChips.includes(c.label));
		setActiveChips(isAllSelected ? ['all'] : nextActiveChips);
	};

	const handleDeselect = (e: React.MouseEvent, chip: string) => {
		e.stopPropagation();
		if (isSingleSelect) return;

		const filteredChips = activeChips.filter((c) => c !== chip);
		const nextActiveChips = filteredChips.length ? filteredChips : ['all'];
		setActiveChips(nextActiveChips);
	};

	const handleAddChipClick = () => {
		if (isSingleSelect) setActiveChips([]);
		if (setIsNewFolderActive) setIsNewFolderActive(true);
		onAddChip?.();
	};

	return (
		<div className="text-label-01-normal scrollbar-hide flex flex-nowrap gap-1.5 overflow-x-auto font-medium">
			{chips.map((c) => (
				<Chip
					key={c.label}
					chip={c}
					isActive={activeChips.includes(c.label)}
					isAll={c.label === 'all'}
					isEditable={isEditable}
					onSelect={handleSelect}
					onDeselect={handleDeselect}
					isSingleSelect={isSingleSelect}
				/>
			))}

			{onAddChip && (
				<button
					onClick={handleAddChipClick}
					className={clsx(
						'text-label-01-normal flex shrink-0 items-center gap-0.5 rounded-lg border px-2 py-1.5 transition-colors',
						isNewFolderActive
							? 'bg-label-strong text-inverse-label border-transparent'
							: 'border-line-normal-neutral text-label-alternative',
					)}
				>
					<PlusIcon className={clsx(isNewFolderActive ? 'text-inverse-label' : 'text-label-alternative')} />
					<span className="px-0.5">새 폴더 만들기</span>
				</button>
			)}
		</div>
	);
}
