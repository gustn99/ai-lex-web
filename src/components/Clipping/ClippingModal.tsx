import { useRef, useState } from 'react';

import CloseIcon from '@/assets/svgs/common/close.svg?react';

import { ModalWrapper } from '@/components/common/Modal';

import useOutsideClick from '@/hooks/useOutsideClick';

import { TabList, TabPanel } from '../common/Tab';

import ClippingCard from './ClippingCard';

interface ClippingModalProps {
	onCancel: () => void;
}

const tabs = [
	{ label: 'all', value: '전체', count: 25 },
	{ label: 'enhance', value: '강화', count: 10 },
	{ label: 'rebuttal', value: '반박', count: 10 },
	{ label: 'evidence', value: '근거', count: 10 },
	{ label: 'evidence-request', value: '증거제출 요청', count: 10 },
];

export default function ClippingModal({ onCancel }: ClippingModalProps) {
	const modalRef = useRef<HTMLDivElement | null>(null);
	useOutsideClick({ ref: modalRef, onClick: onCancel });

	const [activeTab, setActiveTab] = useState(tabs[0].label);

	const clippingData = {
		enhance: [
			{
				type: 'enhance' as const,
				fileName: '을 제3호증: 의무기록.pdf',
				content: '"2020. 07.17. 09:00경 측정된 산소포화도는 96%로 정상 범위이며, 호흡 수 또한 안정적이었습니다."',
				page: 3,
				folderName: '1차 서면 준비 작성',
				savedAt: '2025-10-13T21:00:00Z',
			},
		],
		rebuttal: [
			{
				type: 'rebuttal' as const,
				fileName: '갑 제2호증: 진단서.pdf',
				content:
					'"2023. 02.11. 진단서에 따르면, 해당 질환은 기존 질환과 직접적인 인과관계가 없음을 명시하고 있습니다."',
				page: 2,
				folderName: '2차 서면 보충 작성',
				savedAt: '2025-10-12T11:00:00Z',
			},
		],
		evidence: [
			{
				type: 'evidence' as const,
				fileName: '을 제5호증: 진료기록 사본',
				content:
					'"의무기록에는 망인이 사고 당시 의식이 명료했으며, 특별한 신경학적 이상이 없었던 것으로 기록되어 있습니다."',
				page: 5,
				folderName: '1차 서면 준비 작성',
				savedAt: '2025-10-10T09:30:00Z',
			},
		],
		'evidence-request': [
			{
				type: 'evidence-request' as const,
				requestText: '의료기록 전체 제출을 요청합니다.',
				fileName: '갑 제1호증: 매매계약서',
				content:
					'"2018. 12. 21. 11:57경 기관내 삽관 당시 망인의 동맥혈가스검사결과를 살펴보면, 망인의 산소포화도는 90%, pH 7.42, PCO2 36mmHg로 산증 및 고이산화탄소증 소견은 전혀 존재하지 않았고 PO2 역시 58mmHg로 기관내 삽관을 고려할 정도의 저산소증 소견 역시 존재하지 않았습니다."',
				page: 19,
				folderName: '1차 서면 준비 작성',
				sentAt: '2025-10-14T07:45:00Z',
				isSubmittedEvidence: true,
			},
			{
				type: 'evidence-request' as const,
				requestText: '추가 증거 제출 요청 내용입니다.',
				fileName: '을 제2호증: 진단서.pdf',
				content: '"2022. 09.10. 당시 검사 기록에는 질병과 직접적인 연관이 없다고 명시되어 있습니다."',
				page: 12,
				folderName: '2차 반박 서류',
				sentAt: '2025-10-14T00:45:00Z',
				link: 'www.naver.com',
			},
		],
	};

	// 전체 탭
	const allData = [
		...clippingData.enhance,
		...clippingData.rebuttal,
		...clippingData.evidence,
		...clippingData['evidence-request'],
	];

	const renderCards = (list: any[]) => (
		<>
			<div className="flex flex-col gap-3">
				{list.map((item, idx) => (
					<ClippingCard key={idx} {...item} />
				))}
			</div>

			<div className="h-4 shrink-0" />
		</>
	);

	return (
		<ModalWrapper>
			<div ref={modalRef} className="flex h-full max-h-187 w-full max-w-200 flex-col rounded-xl bg-white">
				{/* 헤더 */}
				<div className="flex shrink-0 items-center justify-between p-4">
					<h2 className="text-heading-02 text-label-normal font-semibold">클립핑</h2>
					<button onClick={onCancel}>
						<CloseIcon />
					</button>
				</div>

				{/* 탭 리스트 */}
				<div className="shrink-0 bg-white px-4">
					<TabList tabs={tabs} activeTab={activeTab} onClick={(label) => setActiveTab(label)} />
				</div>

				{/* 스크롤 영역 */}
				<div className="scrollbar-hide flex-1 overflow-y-auto px-4">
					{/* 전체 */}
					<TabPanel label="all" activeTab={activeTab}>
						{renderCards(allData)}
					</TabPanel>

					{/* 강화 */}
					<TabPanel label="enhance" activeTab={activeTab}>
						{renderCards(clippingData.enhance)}
					</TabPanel>

					{/* 반박 */}
					<TabPanel label="rebuttal" activeTab={activeTab}>
						{renderCards(clippingData.rebuttal)}
					</TabPanel>

					{/* 근거 */}
					<TabPanel label="evidence" activeTab={activeTab}>
						{renderCards(clippingData.evidence)}
					</TabPanel>

					{/* 증거제출 요청 */}
					<TabPanel label="evidence-request" activeTab={activeTab}>
						{renderCards(clippingData['evidence-request'])}
					</TabPanel>
				</div>
			</div>
		</ModalWrapper>
	);
}
