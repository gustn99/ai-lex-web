import { useState } from 'react';

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
	const isSubmitDisabled = !selectedParty;

	return (
		<div className={clsx('space-y-6', isModal ? 'w-full' : 'shadow-emphasize w-154 rounded-[20px] bg-white p-5')}>
			<FileUploader type="document" files={files} setFiles={setFiles} />
			<PartySelector selectedParty={selectedParty} setSelectedParty={setSelectedParty} />
			<Button disabled={isSubmitDisabled} onClick={() => {}} appearance="solid" isFullWidth>
				등록
			</Button>
		</div>
	);
}
