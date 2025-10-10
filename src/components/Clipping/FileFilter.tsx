import { useState } from 'react';

import { ChipList, ChipType } from '../common/Chip';

const chips: (ChipType & { type: 'all' | 'document' | 'party' })[] = [
	{
		type: 'all',
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
	const nonPartyChips = [chips[0], ...documentChips];

	const [activeChips, setActiveChips] = useState(['all']);

	return (
		<div className="p-4">
			<div className="flex items-center gap-1.5">
				<ChipList chips={nonPartyChips} activeChips={activeChips} setActiveChips={setActiveChips} />
				<div className="bg-line-normal-normal h-4 w-px" />
				<ChipList chips={partyChips} activeChips={activeChips} setActiveChips={setActiveChips} />
			</div>
		</div>
	);
}
