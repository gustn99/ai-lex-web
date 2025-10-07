import clsx from 'clsx';

export interface ButtonProps {
	appearance: 'solid' | 'outlined';
	variant?: 'primary' | 'secondary' | 'assistive';
	size?: 'small' | 'medium' | 'large';
	leadingIcon?: string;
	trailingIcon?: string;
	iconOnly?: boolean;
	disabled?: boolean;
	loading?: boolean;
	fullWidth?: boolean;
	contentColor?: string;
	backgroundColor?: string;
	children: React.ReactNode;
}

export default function Button({
	appearance,
	variant = 'primary',
	size = 'large',
	leadingIcon,
	trailingIcon,
	iconOnly = false,
	disabled = false,
	loading = false,
	fullWidth = false,
	contentColor,
	backgroundColor,
	children,
}: ButtonProps) {
	const buttonStyle = {
		solid: {
			primary: 'bg-primary-normal hover:bg-primary-neutral text-white font-semibold',
			secondary: 'bg-cool-neutral-20 text-white font-semibold',
			assistive: 'bg-fill-normal text-label-neutral font-medium',
		},
		outlined: {
			primary: 'border border-primary-normal text-primary-normal font-semibold',
			secondary: 'border border-line-normal-neutral text-primary-normal font-semibold',
			assistive: 'border border-line-normal-neutral text-label-normal font-medium',
		},
	};

	const buttonSize = {
		small: `text-label-02 gap-1 ${iconOnly ? 'p-2' : 'px-4 py-2'}`,
		medium: `text-body-02-normal gap-[5px] ${iconOnly ? 'p-2.5' : 'px-5 py-2.5'}`,
		large: `text-body-01-normal gap-1.5 ${iconOnly ? 'p-3' : 'px-7 py-3'}`,
	};

	const iconSize = {
		small: iconOnly ? 'w-[18px] h-[18px]' : 'w-4 h-4',
		medium: iconOnly ? 'w-5 h-5' : 'w-[18px] h-[18px]',
		large: iconOnly ? 'w-6 h-6' : 'w-5 h-5',
	};

	const interaction = {
		base: 'before:absolute before:inset-0 before:content-[""] before:opacity-0',
		solid: `before:bg-label-normal ${variant === 'primary' ? 'active:before:opacity-18 focus:before:opacity-12 hover:before:opacity-7.5' : 'active:before:opacity-12 focus:before:opacity-8 hover:before:opacity-5'}`,
		outlined: `${variant === 'primary' ? 'before:bg-primary-normal' : 'before:bg-label-normal'} active:before:opacity-12 focus:before:opacity-8 hover:before:opacity-5`,
	};

	return (
		<button
			disabled={disabled}
			className={clsx(
				'relative flex items-center justify-center overflow-hidden rounded-lg disabled:opacity-40',
				fullWidth && 'w-full',
				buttonStyle[appearance][variant],
				buttonSize[size],
				interaction['base'],
				interaction[appearance],
			)}
		>
			{leadingIcon && <img src={leadingIcon} alt="" className={iconSize[size]} />}
			{children}
			{trailingIcon && <img src={trailingIcon} alt="" className={iconSize[size]} />}
		</button>
	);
}
