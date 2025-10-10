import { useState } from 'react';

import TabList from '../common/TabList';
import TabPanel from '../common/TabPanel';

const tabs = [
	{ label: 'files', value: '사건 기록' },
	{ label: 'ai-suggestion', value: 'AI 클립핑 제안' },
	{ label: 'history', value: '사건 히스토리' },
];

export default function ClippingTabs() {
	const [activeTab, setActiveTab] = useState(tabs[1].label);

	return (
		<div className="px-3">
			<TabList tabs={tabs} activeTab={activeTab} onClick={(tab) => setActiveTab(tab)} />

			<TabPanel label={tabs[0].label} activeTab={activeTab}>
				사건 기록
			</TabPanel>
			<TabPanel label={tabs[1].label} activeTab={activeTab}>
				ai 클립핑 제안
			</TabPanel>
			<TabPanel label={tabs[2].label} activeTab={activeTab}>
				사건 히스토리
			</TabPanel>
		</div>
	);
}
