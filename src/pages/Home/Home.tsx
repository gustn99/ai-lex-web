import { useState } from 'react';

import ClippingModal from '@/components/Clipping/ClippingModal';
import EvidenceHistoryModal from '@/components/Clipping/EvidenceHistoryModal';
import EvidenceRequestModal from '@/components/Clipping/EvidenceRequestModal';
import Toast from '@/components/common/Toast/Toast';

export default function Home() {
	const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);
	const [isClippingModalOpen, setIsClippingModalOpen] = useState(false);
	const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);
	const [showToast, setShowToast] = useState(false);

	// 증거제출 요청 모달
	const handleOpenEvidenceModal = () => setIsEvidenceModalOpen(true);
	const handleCloseEvidenceModal = () => setIsEvidenceModalOpen(false);

	// 클리핑 모달
	const handleOpenClippingModal = () => setIsClippingModalOpen(true);
	const handleCloseClippingModal = () => setIsClippingModalOpen(false);

	// 증거제출 요청 → 클리핑 모달 전환
	const handleCreateEvidence = () => {
		handleCloseEvidenceModal();
		handleOpenClippingModal();
		setShowToast(true);
		setTimeout(() => setShowToast(false), 3000);
	};

	// 클리핑 → 증거제출내역 모달 전환
	const handleOpenEvidenceHistory = (id: number) => {
		setSelectedRequestId(id);
		setIsClippingModalOpen(false);
	};

	// 히스토리 → 클리핑 되돌아가기
	const handleBackToClipping = () => {
		setSelectedRequestId(null);
		setIsClippingModalOpen(true);
	};

	// 히스토리 완전 닫기 (CloseIcon)
	const handleCloseEvidenceHistory = () => {
		setSelectedRequestId(null);
	};

	return (
		<div className="flex flex-col gap-4 p-10">
			<button onClick={handleOpenEvidenceModal} className="bg-primary-normal rounded-md px-4 py-2 text-white">
				증거제출 요청
			</button>

			{/* 증거제출 요청 모달 */}
			{isEvidenceModalOpen && (
				<EvidenceRequestModal onCancel={handleCloseEvidenceModal} onCreate={handleCreateEvidence} />
			)}

			{/* 클리핑 모달 */}
			{isClippingModalOpen && (
				<ClippingModal onCancel={handleCloseClippingModal} onViewDetail={handleOpenEvidenceHistory} />
			)}

			{/* 증거제출내역 모달 */}
			{selectedRequestId !== null && (
				<EvidenceHistoryModal
					requestId={selectedRequestId}
					onBack={handleBackToClipping} // ← 화살표 클릭 시
					onClose={handleCloseEvidenceHistory} // ✕ 클릭 시
				/>
			)}

			{/* 토스트 */}
			{showToast && <Toast type="check" message="링크 복사 완료" />}
		</div>
	);
}
