import clsx from 'clsx';
// TODO: 주석 원복
// import ChipIcon from '@/assets/chip/deselect.svg?react'

export interface Chip {
	label: string;
	value: string;
	backgroundColor?: string;
}

export interface ChipListProps {
	chips: Chip[];
	activeChips: string[];
	isEditable?: boolean;
	setActiveChips: (chips: string[]) => void;
}

export default function ChipList({ chips, activeChips, isEditable = false, setActiveChips }: ChipListProps) {
	const handleSelect = (chip: string) => {
		if (chip === 'all') {
			setActiveChips(['all']);
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

		const filteredChips = activeChips.filter((c) => c !== chip);
		const nextActiveChips = filteredChips.length ? filteredChips : ['all'];
		setActiveChips(nextActiveChips);
	};

	return (
		<div className="text-label-01-normal flex gap-1.5 font-medium">
			{chips.map(({ label, value, backgroundColor }) => {
				const isActive = activeChips.includes(label);
				const isAll = label === 'all';

				// TODO: bg 부분 twMerge 적용
				return (
					<button
						className={clsx(
							'flex items-center gap-1 rounded-lg border px-2.5 py-1.5',
							isActive
								? `bg-label-strong ${backgroundColor} text-inverse-label`
								: 'border-line-normal-neutral text-label-alternative',
						)}
						onClick={() => handleSelect(label)}
					>
						{value}
						{!isAll && isActive && (
							<div
								role="button"
								tabIndex={0}
								onClick={(e) => handleDeselect(e, label)}
								className="bg-accent-background-cyan h-4 w-4"
							>
								{/* <ChipIcon /> */}
							</div>
						)}
					</button>
				);
			})}
		</div>
	);
}
