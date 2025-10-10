import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import LoadingIcon from './LoadingIcon';

export interface ButtonProps {
	appearance: 'solid' | 'outlined';
	variant?: 'primary' | 'secondary' | 'assistive';
	size?: 'small' | 'medium' | 'large';
	LeadingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	TrailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	disabled?: boolean;
	isIconOnly?: boolean;
	isLoading?: boolean;
	isFullWidth?: boolean;
	contentColor?: string; // utility class
	backgroundColor?: string; // utility class
	borderColor?: string; // utility class
	typography?: string; // utility class
	className?: string;
	children?: React.ReactNode;
}

export default function Button({
	appearance,
	variant = 'primary',
	size = 'large',
	LeadingIcon,
	TrailingIcon,
	isIconOnly = false,
	disabled = false,
	isLoading = false,
	isFullWidth = false,
	contentColor,
	backgroundColor,
	borderColor,
	typography,
	children,
	className,
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
		small: `text-label-02 gap-1 ${isIconOnly ? 'p-2' : 'px-4 py-2'}`,
		medium: `text-body-02-normal gap-[5px] ${isIconOnly ? 'p-2.5' : 'px-5 py-2.5'}`,
		large: `text-body-01-normal gap-1.5 ${isIconOnly ? 'p-3' : 'px-7 py-3'}`,
	};

	const iconSize = {
		small: isIconOnly ? 'w-[18px] h-[18px]' : 'w-4 h-4',
		medium: isIconOnly ? 'w-5 h-5' : 'w-[18px] h-[18px]',
		large: isIconOnly ? 'w-6 h-6' : 'w-5 h-5',
	};

	const interaction = {
		base: 'before:absolute before:inset-0 before:content-[""] before:opacity-0',
		solid: `before:bg-label-normal ${variant === 'primary' ? 'active:before:opacity-18 focus:before:opacity-12 hover:before:opacity-7.5' : 'active:before:opacity-12 focus:before:opacity-8 hover:before:opacity-5'}`,
		outlined: `${variant === 'primary' ? 'before:bg-primary-normal' : 'before:bg-label-normal'} active:before:opacity-12 focus:before:opacity-8 hover:before:opacity-5`,
	};
	return (
		<button
			disabled={disabled}
			className={twMerge(
				clsx(
					'relative h-fit overflow-hidden rounded-lg disabled:opacity-40',
					isFullWidth ? 'w-full' : 'w-fit',
					buttonStyle[appearance][variant],
					interaction['base'],
					interaction[appearance],
					contentColor,
					backgroundColor,
					borderColor,
					typography,
					className,
				),
			)}
		>
			<div className={clsx('flex items-center justify-center', isLoading && 'invisible', buttonSize[size])}>
				{LeadingIcon && <LeadingIcon className={iconSize[size]} />}
				{children}
				{TrailingIcon && !isIconOnly && <TrailingIcon className={iconSize[size]} />}
			</div>
			{isLoading && (
				<div className={clsx('absolute top-1/2 left-1/2 -translate-1/2', iconSize[size])}>
					<LoadingIcon />
				</div>
			)}
		</button>
	);
}
