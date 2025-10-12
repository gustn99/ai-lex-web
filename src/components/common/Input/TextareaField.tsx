import { useEffect, useId, useRef } from 'react';

interface TextareaFieldProps {
	value: string;
	label?: string;
	placeholder?: string;
	description?: string;
	required?: boolean;
	disabled?: boolean;
	maxLength?: number;
	minHeight?: number;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaField({
	label,
	value,
	placeholder = '텍스트를 입력해 주세요.',
	description,
	required = false,
	disabled = false,
	maxLength = 100,
	minHeight,
	onChange,
}: TextareaFieldProps) {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const reactId = useId();
	const textareaId = label ? `textarea-${label.replace(/\s+/g, '-').toLowerCase()}-${reactId}` : `textarea-${reactId}`;

	useEffect(() => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}, [value]);

	return (
		<div className="flex w-full flex-col gap-2">
			{label && (
				<label htmlFor={textareaId} className="text-label-01-normal text-label-neutral flex items-center font-semibold">
					{label}
					{required && <span className="text-status-negative ml-1">*</span>}
				</label>
			)}

			<div
				className={`border-line-normal-neutral focus-within:outline-primary-normal/43 box-border flex flex-col justify-between gap-3 rounded-lg border py-3 pr-1.5 pl-4 focus-within:outline-[2px] focus-within:outline-offset-[-2px] ${
					disabled ? 'bg-interaction-disable' : 'bg-white'
				}`}
			>
				<textarea
					id={textareaId}
					ref={textareaRef}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					disabled={disabled}
					maxLength={maxLength}
					rows={1}
					style={{
						minHeight: minHeight ? (typeof minHeight === 'number' ? `${minHeight}px` : minHeight) : undefined,
					}}
					className="textarea-scrollbar text-label-normal text-body-01-normal placeholder:text-label-assistive disabled:text-label-alternative max-h-[78px] w-full resize-none overflow-y-auto bg-transparent pr-[7px] outline-none"
				/>

				<span className="text-label-02 text-label-assistive flex h-6 items-center font-medium">
					{value.length}/{maxLength}
				</span>
			</div>

			{description && <span className="text-caption-01 text-label-alternative">{description}</span>}
		</div>
	);
}
