import { useState } from 'react';
import FileUploader from '@/components/common/Input/FileUploader';
import EvidenceRequestModal from '@/components/Clipping/EvidenceRequestModal';

export default function Home() {
	const [documentFiles, setDocumentFiles] = useState<File[]>([]);
	const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);

	const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);
	const [isClippingModalOpen, setIsClippingModalOpen] = useState(false);

	const handleOpenEvidenceModal = () => setIsEvidenceModalOpen(true);
	const handleCloseEvidenceModal = () => setIsEvidenceModalOpen(false);

	const handleOpenClippingModal = () => setIsClippingModalOpen(true);
	const handleCloseClippingModal = () => setIsClippingModalOpen(false);

	return (
		<div className="space-y-3">
			<FileUploader files={documentFiles} setFiles={setDocumentFiles} type="document" />
			<FileUploader files={evidenceFiles} setFiles={setEvidenceFiles} type="evidence" singleOnly />

			<button onClick={handleOpenEvidenceModal}>증거제출 요청</button>

			{/* 증거제출 모달 */}
			{isEvidenceModalOpen && (
				<EvidenceRequestModal
					onCancel={handleCloseEvidenceModal}
					onCreate={() => {
						handleCloseEvidenceModal();
						handleOpenClippingModal();
					}}
				/>
			)}

			{/* 클리핑 모달 */}
			{/* {isClippingModalOpen && <ClippingModal onCancel={handleCloseClippingModal} />} */}
		</div>
	);
}
