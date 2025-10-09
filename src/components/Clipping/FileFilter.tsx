import { useState } from 'react';
import ChipList, { Chip } from '../common/ChipList';

const chips: (Chip & { type: 'document' | 'party' })[] = [
	{
		type: 'document',
		label: 'all',
		value: '전체',
	},
	{
		type: 'document',
		label: 'writtenStatement',
		value: '서면',
	},
	{
		type: 'document',
		label: 'documentaryEvidence',
		value: '서증',
	},
	{
		type: 'document',
		label: 'etc',
		value: '그 외',
	},
	{
		type: 'party',
		label: 'plaintiff',
		value: '원고',
		backgroundColor: 'bg-tag-red',
	},
	{
		type: 'party',
		label: 'defendant',
		value: '피고',
		backgroundColor: 'bg-tag-blue',
	},
];

export default function FileFilter() {
	const documentChips = chips.filter((c) => c.type === 'document');
	const partyChips = chips.filter((c) => c.type === 'party');

	const [activeChips, setActiveChips] = useState(['all']);

	const handleSelect = (chip: string) => {
		if (chip === 'all') {
			setActiveChips(['all']);
		} else {
			const filteredChips = activeChips.filter((c) => c !== 'all');
			filteredChips.push(chip);
			setActiveChips(filteredChips);
		}
	};

	const handleDeselect = (e: React.MouseEvent, chip: string) => {
		e.stopPropagation();
		if (chip === 'all') return;

		const filteredChips = activeChips.filter((c) => c !== chip);
		if (filteredChips.length === 0) {
			filteredChips.push('all');
		}
		setActiveChips(filteredChips);
	};

	return (
		<div className="p-4">
			<div className="flex items-center gap-1.5">
				<ChipList chips={documentChips} activeChips={activeChips} onSelect={handleSelect} onDeselect={handleDeselect} />
				<div className="bg-line-normal-normal h-4 w-px" />
				<ChipList chips={partyChips} activeChips={activeChips} onSelect={handleSelect} onDeselect={handleDeselect} />
			</div>
		</div>
	);
}
