import { useEffect, useRef } from 'react';

import DeleteIcon from '@/assets/svgs/common/close-circle-gray.svg?react';
import SearchIcon from '@/assets/svgs/documents/search.svg?react';

interface SearchInputProps {
	searchKeyword: string;
	setSearchKeyword: (s: string) => void;
	isSearching: boolean;
}

export default function SearchInput({ searchKeyword, setSearchKeyword, isSearching }: SearchInputProps) {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (isSearching && inputRef.current) inputRef.current.focus();
	}, [isSearching]);

	return (
		<div className="bg-fill-normal flex flex-1 items-center gap-1 rounded-lg p-2">
			<SearchIcon width={24} height={24} className="px-0.5" style={{ '--fill-opacity': 0.28 } as React.CSSProperties} />
			<input
				ref={inputRef}
				type="text"
				value={searchKeyword}
				onChange={(e) => setSearchKeyword(e.target.value)}
				className="placeholder:text-label-assistive flex-1 focus:outline-0"
				placeholder="검색어를 입력해주세요."
			/>
			{isSearching && searchKeyword && (
				<button onClick={() => setSearchKeyword('')}>
					<DeleteIcon width={22} height={22} />
				</button>
			)}
		</div>
	);
}
