import { twMerge } from 'tailwind-merge';

interface ContentBadgeProps {
	appearance: 'solid' | 'outlined';
	color: 'red' | 'blue' | 'green' | 'orange' | 'purple';
	className?: string;
	children: React.ReactNode;
}

export default function ContentBadge({ appearance, color, className, children }: ContentBadgeProps) {
	const styles = {
		solid: {
			red: 'text-tag-red bg-tag-red/8',
			blue: 'text-tag-blue bg-tag-blue/8',
			green: 'text-tag-green bg-tag-green/8',
			orange: 'text-tag-orange bg-tag-orange/8',
			purple: 'text-tag-purple bg-tag-purple/8',
		},
		outlined: {
			red: 'text-accent-foreground-red border border-accent-foreground-red/43',
			blue: 'text-accent-foreground-light-blue border border-accent-foreground-light-blue/43',
			green: 'text-accent-foreground-cyan border border-accent-foreground-cyan/43',
			orange: 'text-accent-foreground-red-orange border border-accent-foreground-red-orange/43',
			purple: 'text-accent-foreground-violet border border-accent-foreground-violet/43',
		},
	};

	return (
		<div
			className={twMerge(
				'text-caption-02 inline rounded-md px-1.5 py-[3px] font-medium',
				styles[appearance][color],
				className,
			)}
		>
			{children}
		</div>
	);
}
