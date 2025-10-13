import { useState } from 'react';

import { ChipList, ChipType } from '../../../common/Chip';

const chips: Record<'all' | 'document' | 'party', ChipType[]> = {
	all: [{ label: 'all', value: '전체' }],
	document: [
		{ label: 'writtenStatement', value: '서면' },
		{ label: 'documentaryEvidence', value: '서증' },
		{ label: 'etc', value: '그 외' },
	],
	party: [
		{ label: 'plaintiff', value: '원고', backgroundColor: 'bg-tag-red' },
		{ label: 'defendant', value: '피고', backgroundColor: 'bg-tag-blue' },
	],
};

export default function FileFilter() {
	const partyChips = chips.party;
	const nonPartyChips = [...chips.all, ...chips.document];

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
