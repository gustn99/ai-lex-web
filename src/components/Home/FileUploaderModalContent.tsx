import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { Button } from '../common/Button';
import { FileUploader } from '../common/Input';

import PartySelector from './PartySelector';

interface FileUploaderModalContentProps {
	isModal?: boolean;
}

export type Party = 'plaintiff' | 'defendant';

export default function FileUploaderModalContent({ isModal = false }: FileUploaderModalContentProps) {
	const [files, setFiles] = useState<File[]>([]);
	const [selectedParty, setSelectedParty] = useState<Party | null>(null);
	const isValidForm = files.length > 0 && selectedParty;

	// TODO: 추후에 등록 클릭 시 서류 요약 모달 렌더링
	const nav = useNavigate();

	return (
		<div className={clsx('space-y-6', isModal ? 'w-full' : 'shadow-emphasize w-154 rounded-[20px] bg-white p-5')}>
			<FileUploader type="document" files={files} setFiles={setFiles} />
			<PartySelector selectedParty={selectedParty} setSelectedParty={setSelectedParty} />
			<Button
				disabled={!isValidForm}
				onClick={() => void nav('/documents', { replace: true })}
				appearance="solid"
				isFullWidth
			>
				등록
			</Button>
		</div>
	);
}
