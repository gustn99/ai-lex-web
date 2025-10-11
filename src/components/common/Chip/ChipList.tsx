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
			{chips.map((c) => (
				<Chip
					key={c.label}
					chip={c}
					isActive={activeChips.includes(c.label)}
					isAll={c.label === 'all'}
					isEditable={isEditable}
					onSelect={handleSelect}
					onDeselect={handleDeselect}
				/>
			))}
		</div>
	);
}
