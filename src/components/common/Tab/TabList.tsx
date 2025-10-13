import clsx from 'clsx';

export interface Tab {
	label: string;
	value: string;
	count?: number;
}

export interface TabListProps {
	tabs: Tab[];
	activeTab: string; // label
	onClick: (tab: string) => void;
}

export default function TabList({ tabs, activeTab, onClick }: TabListProps) {
	const activeDivider = 'before:absolute before:inset-0 before:border-b-2 before:border-label-strong';

	return (
		<div className="text-body-02-normal flex font-semibold">
			{tabs.map(({ label, value, count }) => {
				const isActive = label === activeTab;
				return (
					<button
						key={label}
						onClick={() => onClick(label)}
						className={clsx(
							'border-interaction-inactive relative flex-1 border-b py-2',
							isActive ? `text-label-strong ${activeDivider}` : 'text-label-alternative',
						)}
					>
						{value}
						{count !== undefined && <> ({count})</>}
					</button>
				);
			})}
		</div>
	);
}
