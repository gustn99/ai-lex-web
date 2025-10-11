export interface TabPanelProps {
	label: string;
	activeTab: string;
	children: React.ReactNode;
}

export default function TabPanel({ label, activeTab, children }: TabPanelProps) {
	const isActive = label === activeTab;

	return (
		<div hidden={!isActive} className="h-full w-full pt-3">
			{isActive && children}
		</div>
	);
}
