import { useState } from 'react';

export interface ChipInputProps {
	value: string;
	setIsEditing: (state: boolean) => void;
}

export default function ChipInput({ value, setIsEditing }: ChipInputProps) {
	const [content, setContent] = useState(value);

	// TODO: enter, esc, blur 모두 다 edit api 호출하는지 확인
	// api 호출 -> chip value 수정(mutation)해 chip과 동기화

	return (
		<input
			type="text"
			value={content}
			onChange={(e) => setContent(e.target.value)}
			onBlur={() => setIsEditing(false)}
			onKeyDown={(e) => {
				if (e.key === 'Enter') setIsEditing(false);
				if (e.key === 'Escape') setIsEditing(false);
			}}
			autoFocus
			className="text-label-alternative border-line-normal-neutral w-42 rounded-lg border px-2.5 py-1.5 outline-[#0077ff80] focus:outline-2 focus:-outline-offset-5"
		/>
	);
}
