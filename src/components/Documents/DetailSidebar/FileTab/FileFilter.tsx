import { useState } from 'react';

import clsx from 'clsx';

import SearchIcon from '@/assets/svgs/documents/search.svg?react';

import SearchInput from './SearchInput';

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

const partyChips = chips.party;
const nonPartyChips = [...chips.all, ...chips.document];

interface FileFilterProps {
	searchKeyword: string;
	setSearchKeyword: (s: string) => void;
}

export default function FileFilter(props: FileFilterProps) {
	const [activeChips, setActiveChips] = useState(['all']);
	const [isSearching, setIsSeraching] = useState(false);

	return (
		<div
			className={clsx('text-body-01-normal flex h-10 items-center justify-between', isSearching ? 'gap-3' : 'gap-2.5')}
		>
			{isSearching ? (
				<SearchInput {...props} isSearching={isSearching} />
			) : (
				<div className="flex items-center gap-1.5">
					<ChipList chips={nonPartyChips} activeChips={activeChips} setActiveChips={setActiveChips} />
					<div className="bg-line-normal-normal h-4 w-px" />
					<ChipList chips={partyChips} activeChips={activeChips} setActiveChips={setActiveChips} />
				</div>
			)}

			<button onClick={() => setIsSeraching(!isSearching)}>
				{isSearching ? (
					<div className="text-label-alternative px-2 font-semibold">닫기</div>
				) : (
					<SearchIcon width={24} height={24} />
				)}
			</button>
		</div>
	);
}
