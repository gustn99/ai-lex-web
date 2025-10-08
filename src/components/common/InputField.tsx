import CloseIcon from '@/assets/svgs/common/close-circle-gray.svg';
import { useState } from 'react';

interface InputFieldProps {
	label: string;
	value: string;
	placeholder?: string;
	description?: string;
	isRequired?: boolean;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClear?: () => void;
}

export default function InputField({
	label,
	value,
	placeholder = '텍스트를 입력해 주세요.',
	description,
	isRequired = false,
	disabled,
	onChange,
	onClear,
}: InputFieldProps) {
	const [isFocused, setIsFocused] = useState(false);

	const showClear = !!value && !disabled && isFocused;
	const handleClear = () => {
		if (onClear) onClear();
		else if (onChange) {
			onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
		}
	};

	return (
		<div className="flex w-[335px] flex-col gap-2">
			<label className="text-label-01-normal text-label-neutral flex items-center font-semibold">
				{label}
				{isRequired && <span className="text-status-negative ml-1">*</span>}
			</label>

			<div className="relative">
				<input
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					required={isRequired}
					disabled={disabled}
					className="border-line-normal-neutral text-body-01-normal placeholder:text-label-assistive text-label-normal disabled:bg-interaction-disable disabled:text-label-alternative h-12 w-full rounded-lg border px-4 py-3 pr-10 focus:border-2 focus:border-[#9EBBF9] focus:outline-none"
				/>

				{showClear && (
					<button
						type="button"
						onMouseDown={handleClear}
						className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer p-[1px]"
					>
						<img src={CloseIcon} alt="입력 내용 지우기" />
					</button>
				)}
			</div>

			{description && <span className="text-caption-01 text-label-alternative">{description}</span>}
		</div>
	);
}
