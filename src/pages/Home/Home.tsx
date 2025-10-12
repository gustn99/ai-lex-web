import { FileUploader } from '@/components/common/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	const [documentFiles, setDocumenetFiles] = useState<File[]>([]);
	const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
	return (
		<div className="space-y-3">
			<button onClick={() => navigate('/chatbot')}>챗봇 테스트</button>
			<FileUploader files={documentFiles} setFiles={setDocumenetFiles} type="document" />
			<FileUploader files={evidenceFiles} setFiles={setEvidenceFiles} type="evidence" singleOnly />
		</div>
	);
}
