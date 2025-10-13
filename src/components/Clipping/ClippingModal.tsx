import { useRef, useState } from 'react';

import ClippingGuide from '@/assets/svgs/clipping/clipping-guide.svg?react';
import CloseIcon from '@/assets/svgs/common/close.svg?react';

import { ChipList } from '@/components/common/Chip';
import { ModalWrapper } from '@/components/common/Modal';
import { TabList, TabPanel } from '@/components/common/Tab';

import useOutsideClick from '@/hooks/useOutsideClick';

import { CLIPPING_MODAL_MENUS } from '@/constants/clipping/clippingModalOptions';

import ClippingCard, { ClippingCardProps } from './ClippingCard';

const clippingData = {
	enhance: [
		{
			id: 1,
			type: 'enhance' as const,
			fileName: '을 제3호증: 의무기록.pdf',
			content: '"2020.07.17..."',
			page: 3,
			folderName: '1차 서면 준비 작성',
			savedAt: '2025-10-13T21:00:00Z',
		},
	],
	rebuttal: [
		{
			id: 2,
			type: 'rebuttal' as const,
			fileName: '갑 제2호증: 진단서.pdf',
			content: '"2023.02.11..."',
			page: 2,
			folderName: '2차 서면 보충 작성',
			savedAt: '2025-10-12T11:00:00Z',
		},
	],
	evidence: [
		{
			id: 3,
			type: 'evidence' as const,
			fileName: '을 제5호증: 진료기록 사본',
			content: '"의무기록에는..."',
			page: 5,
			folderName: '1차 서면 준비 작성',
			savedAt: '2025-10-10T09:30:00Z',
		},
	],
	'evidence-request': [
		{
			id: 4,
			type: 'evidence-request' as const,
			requestText: '의료기록 전체 제출을 요청합니다.',
			fileName: '갑 제1호증: 매매계약서',
			content: '"2018.12.21..."',
			page: 19,
			folderName: '1차 서면 준비 작성',
			sentAt: '2025-10-14T07:45:00Z',
			isSubmittedEvidence: true,
		},
		{
			id: 5,
			type: 'evidence-request' as const,
			requestText: '추가 증거 제출 요청 내용입니다.',
			fileName: '을 제2호증: 진단서.pdf',
			content: '"2022.09.10..."',
			page: 12,
			folderName: '2차 반박 서류',
			sentAt: '2025-10-14T00:45:00Z',
			link: 'www.naver.com',
		},
	],
} as const;

export default function ClippingModal({
	onCancel,
	onViewDetail,
}: {
	onCancel: () => void;
	onViewDetail: (id: number) => void;
}) {
	const modalRef = useRef<HTMLDivElement>(null);
	useOutsideClick({ ref: modalRef, onClick: onCancel });

	const [activeTab, setActiveTab] = useState<(typeof CLIPPING_MODAL_MENUS)[number]['label']>('all');
	const [isAddingFolder, setIsAddingFolder] = useState(false);
	const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

	const allData: ClippingCardProps[] = Object.values(clippingData).flat();
	const currentList = activeTab === 'all' ? allData : clippingData[activeTab];

	const [folderList, setFolderList] = useState([
		{ label: 'all', value: '전체 폴더' }, // 추후 변경
		{ label: '1차 서면 준비 작성', value: '1차 서면 준비 작성' },
		{ label: '2차 반박 서류', value: '2차 반박 서류' },
		{ label: '3차 반박 서류', value: '3차 반박 서류' },
		{ label: '4차 반박 서류', value: '4차 반박 서류' },
		{ label: '5차 반박 서류', value: '5차 반박 서류' },
		{ label: '6차 반박 서류', value: '6차 반박 서류' },
	]);

	const [activeFolders, setActiveFolders] = useState<string[]>(['all']);

	const handleAddFolder = () => {
		setIsAddingFolder(true);
		// 폴더 생성 모달 띄우기
	};

	return (
		<ModalWrapper>
			<div ref={modalRef} className="flex h-full max-h-187 w-full max-w-200 flex-col rounded-xl bg-white">
				<div className="flex shrink-0 items-center justify-between p-4">
					<h2 className="text-heading-02 text-label-normal font-semibold">클립핑</h2>
					<button onClick={onCancel}>
						<CloseIcon />
					</button>
				</div>

				<div className="scrollbar-hide flex w-full items-center overflow-x-auto px-4 pb-3">
					<ChipList
						chips={folderList}
						activeChips={activeFolders}
						isEditable
						setActiveChips={setActiveFolders}
						isSingleSelect
						onAddChip={handleAddFolder}
						isNewFolderActive={isAddingFolder}
						setIsNewFolderActive={setIsAddingFolder}
					/>
				</div>

				<div className="shrink-0 bg-white px-4">
					<TabList
						tabs={CLIPPING_MODAL_MENUS.map((tab) => ({
							...tab,
							count: tab.label === 'all' ? allData.length : clippingData[tab.label].length,
						}))}
						activeTab={activeTab}
						onClick={(tab) => setActiveTab(tab as typeof activeTab)}
					/>
				</div>

				<div className="scrollbar-hide flex-1 overflow-y-auto px-4">
					<TabPanel label={activeTab} activeTab={activeTab}>
						{currentList.length === 0 ? (
							<div className="flex h-full flex-col items-center justify-center gap-4 py-20 text-center">
								<div className="flex flex-col gap-1">
									<h3 className="text-body-01-normal text-label-normal font-semibold">아직 생성된 클립핑이 없어요!</h3>
									<p className="text-body-01-normal text-label-alternative">
										문서에 직접 드래그하여 클립핑을 추가해보세요.
									</p>
								</div>

								<ClippingGuide className="rounded-lg" />
							</div>
						) : (
							<div className="flex flex-col">
								{currentList.map((item, idx) => (
									<div key={idx} className={idx < currentList.length - 1 ? 'mb-3' : ''}>
										<ClippingCard {...item} onViewDetail={onViewDetail} />
									</div>
								))}
								<div className="h-4 shrink-0" />
							</div>
						)}
					</TabPanel>
				</div>
			</div>
		</ModalWrapper>
	);
}
