import { useState } from 'react';
import ChipList, { Chip } from '../common/ChipList';

const chips: Chip[] = [
	{
		label: 'all',
		value: '전체',
	},
	{
		label: 'writtenStatement',
		value: '서면',
	},
	{
		label: 'documentaryEvidence',
		value: '서증',
	},
	{
		label: 'etc',
		value: '그 외',
	},
	{
		label: 'plaintiff',
		value: '원고',
		backgroundColor: 'bg-tag-red',
	},
	{
		label: 'defendant',
		value: '피고',
		backgroundColor: 'bg-tag-blue',
	},
];

const defaultChip = chips[0].label;

export default function FileFilter() {
	const [activeChips, setActiveChips] = useState([defaultChip]);

	const handleSelect = (chip: string) => {
		if (chip === defaultChip) {
			setActiveChips([defaultChip]);
		} else {
			const filteredChips = activeChips.filter((c) => c !== defaultChip);
			filteredChips.push(chip);
			setActiveChips(filteredChips);
		}
	};

	const handleDeselect = (e: React.MouseEvent, chip: string) => {
		e.stopPropagation();
		if (chip === defaultChip) return;

		const filteredChips = activeChips.filter((c) => c !== chip);
		if (filteredChips.length === 0) {
			filteredChips.push(defaultChip);
		}
		setActiveChips(filteredChips);
	};

	return (
		<div className="p-4">
			<ChipList chips={chips} activeChips={activeChips} onSelect={handleSelect} onDeselect={handleDeselect} />
		</div>
	);
}
