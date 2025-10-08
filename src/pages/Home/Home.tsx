import InputField from '@/components/common/InputField';
import { useState } from 'react';

export default function Home() {
	const [value, setValue] = useState('');

	return (
		<div className="space-y-4">
			{/* 필수 항목 */}
			<InputField
				label="제목"
				value={value}
				placeholder="하이"
				description="메시지에 마침표를 찍어요."
				isRequired
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
		</div>
	);
}
