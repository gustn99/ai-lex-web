import { useState } from 'react';

import EvidenceRequestModal from '@/components/Clipping/EvidenceRequestModal';
import Toast from '@/components/common/Toast/Toast';

export default function Home() {
	const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);
	const [isClippingModalOpen, setIsClippingModalOpen] = useState(false);

	const [showToast, setShowToast] = useState(false); // ✅ 토스트 상태

	const handleOpenEvidenceModal = () => setIsEvidenceModalOpen(true);
	const handleCloseEvidenceModal = () => setIsEvidenceModalOpen(false);

	const handleOpenClippingModal = () => setIsClippingModalOpen(true);
	const handleCloseClippingModal = () => setIsClippingModalOpen(false);

	const handleCreateEvidence = () => {
		handleCloseEvidenceModal();
		handleOpenClippingModal();

		setShowToast(true);
		setTimeout(() => setShowToast(false), 5000);
	};

	return (
		<div className="space-y-3">
			<button onClick={handleOpenEvidenceModal}>증거제출 요청</button>

			{/* 증거제출 모달 */}
			{isEvidenceModalOpen && (
				<EvidenceRequestModal onCancel={handleCloseEvidenceModal} onCreate={handleCreateEvidence} />
			)}

			{/* 클리핑 모달 */}
			{/* {isClippingModalOpen && <ClippingModal onCancel={handleCloseClippingModal} />} */}

			{showToast && <Toast message="링크 복사 완료" />}
		</div>
	);
}
