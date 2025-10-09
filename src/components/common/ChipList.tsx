import clsx from 'clsx';
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
	onSelect: (chip: string) => void;
	onDeselect: (e: React.MouseEvent, chip: string) => void;
}

export default function ChipList({ chips, activeChips, isEditable = false, onSelect, onDeselect }: ChipListProps) {
	return (
		<div className="text-label-01-normal flex gap-1.5 font-medium">
			{chips.map(({ label, value, backgroundColor }) => {
				const isActive = activeChips.includes(label);
				const isAll = label === 'all';

				return (
					<button
						className={clsx(
							'flex items-center gap-1 rounded-lg border px-2.5 py-1.5',
							isActive
								? `bg-label-strong ${backgroundColor} text-inverse-label`
								: 'border-line-normal-neutral text-label-alternative',
						)}
						onClick={() => onSelect(label)}
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
			})}
		</div>
	);
}
