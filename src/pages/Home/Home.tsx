import InputField from '@/components/common/InputField';
import TextareaField from '@/components/common/TextareaField';
import { useState } from 'react';

export default function Home() {
	const [value, setValue] = useState('');
	const [text, setText] = useState('');

	return (
		<div className="space-y-4">
			{/* 필수 항목 */}
			<InputField
				label="제목"
				value={value}
				placeholder="하이"
				description="메시지에 마침표를 찍어요."
				required
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>

			{/* disabled + placeholder */}
			<InputField
				label="제목"
				value={value}
				placeholder="하이"
				description="메시지에 마침표를 찍어요."
				disabled
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>

			{/* disabled + 값이 있음 */}
			<InputField
				label="제목"
				value="값이 있다"
				placeholder="하이"
				description="메시지에 마침표를 찍어요."
				disabled
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>

			<TextareaField
				label="설명"
				value={text}
				onChange={(e) => setText(e.target.value)}
				maxLength={100}
				description="100자 이내로 입력해 주세요."
				required
			/>
		</div>
	);
}
