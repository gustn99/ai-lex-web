import { useState } from 'react';

import FileTab from './FileTab/FileTab';

import { TabList, TabPanel } from '../../common/Tab';

const tabs = [
	{ label: 'files', value: '사건 기록', tabContent: FileTab },
	{ label: 'ai-suggestion', value: 'AI 클립핑 제안', tabContent: FileTab },
	{ label: 'history', value: '사건 히스토리', tabContent: FileTab },
];

export default function DetailSidebarTabs() {
	const [activeTab, setActiveTab] = useState(tabs[1].label);

	return (
		<div className="space-y-3 px-3">
			<TabList tabs={tabs} activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />

			{tabs.map(({ label, tabContent: TabContent }) => (
				<TabPanel key={label} label={label} activeTab={activeTab}>
					<TabContent />
				</TabPanel>
			))}
		</div>
	);
}
