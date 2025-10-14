import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { Party } from '@/utils/types';

import { Button } from '../common/Button';
import { FileUploader } from '../common/Input';

import PartySelector from './PartySelector';

interface FileUploaderModalContentProps {
	isModal?: boolean;
	onClose?: () => void;
}

export default function FileUploaderModalContent({ isModal = false, onClose }: FileUploaderModalContentProps) {
	const [files, setFiles] = useState<File[]>([]);
	const [selectedParty, setSelectedParty] = useState<Party | null>(null);
	const isValidForm = files.length > 0 && selectedParty;

	// TODO: 추후에 등록 클릭 시 서류 요약 모달 렌더링
	const nav = useNavigate();

	return (
		<div className={clsx('w-154 space-y-6', !isModal && 'shadow-emphasize rounded-[20px] bg-white p-5')}>
			<FileUploader type="document" files={files} setFiles={setFiles} />
			<PartySelector selectedParty={selectedParty} setSelectedParty={setSelectedParty} />
			<div className="flex gap-3">
				{isModal && onClose && (
					<Button
						onClick={onClose}
						appearance="solid"
						variant="assistive"
						size={isModal ? 'medium' : 'large'}
						isFullWidth
					>
						취소
					</Button>
				)}
				<Button
					disabled={!isValidForm}
					onClick={() => {
						void nav('/documents', { replace: true });
						if (onClose) onClose();
					}}
					appearance="solid"
					size={isModal ? 'medium' : 'large'}
					isFullWidth
				>
					등록
				</Button>
			</div>
		</div>
	);
}
