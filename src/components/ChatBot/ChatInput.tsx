import { useState } from 'react';
import SendIcon from '@/assets/svgs/chatbot/send.svg?react';
import CheckIcon from '@/assets/svgs/chatbot/check.svg?react';

interface ChatInputProps {
	category: string | null;
	onSubmit?: () => void;
	isFixed?: boolean;
}

export default function ChatInput({ category, onSubmit, isFixed }: ChatInputProps) {
	const [value, setValue] = useState('');
	const placeholder = category ? `${category}과 관련된 질문을 해주세요.` : '질문을 입력해 주세요.';

	const isActive = value.trim().length > 0;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!value.trim()) return;
		onSubmit?.();
		setValue('');
	};

	return (
		<div className="flex w-full flex-col gap-2">
			<form
				onSubmit={handleSubmit}
				className="border-line-normal-alternative bg-fill-alternative flex w-full items-center justify-between gap-2 rounded-3xl border p-2 shadow-[0_2px_8px_0_#2F313426]"
			>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					className="text-body-01-normal placeholder:text-label-alternative text-label-normal flex-1 bg-transparent px-2 outline-none"
				/>

				{isActive ? (
					<button type="submit" className="bg-cool-neutral-20 flex h-10 w-10 items-center justify-center rounded-full">
						<SendIcon />
					</button>
				) : (
					<div className="h-10 w-10" />
				)}
			</form>

			<div className="flex items-center px-2">
				<label htmlFor="table-mode" className="relative inline-flex cursor-pointer items-center select-none">
					<input
						id="table-mode"
						type="checkbox"
						className="peer border-line-normal-normal checked:bg-primary-normal h-4.5 w-4.5 appearance-none rounded-[5px] border bg-white transition-colors duration-200 checked:border-none"
					/>

					<CheckIcon className="absolute top-[3px] left-[1px] hidden h-4 w-4 text-white peer-checked:block" />

					<span className="text-body-02-normal text-label-normal ml-2">표로 답변 받기</span>
				</label>
			</div>
		</div>
	);
}
