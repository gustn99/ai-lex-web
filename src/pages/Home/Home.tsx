import { useState } from 'react';

import FileUploader from '@/components/common/Input/FileUploader';

export default function Home() {
	const [documentFiles, setDocumenetFiles] = useState<File[]>([]);
	const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);
	return (
		<div className="space-y-3">
			<FileUploader files={documentFiles} setFiles={setDocumenetFiles} type="document" />
			<FileUploader files={evidenceFiles} setFiles={setEvidenceFiles} type="evidence" singleOnly />
		</div>
	);
}
