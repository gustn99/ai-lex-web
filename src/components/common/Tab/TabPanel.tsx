export interface TabPanelProps {
	label: string;
	activeTab: string;
	children: React.ReactNode;
}

export default function TabPanel({ label, activeTab, children }: TabPanelProps) {
	const isActive = label === activeTab;

	if (!isActive) return null;

	return <>{children}</>;
}
