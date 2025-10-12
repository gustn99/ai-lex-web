import { useState } from 'react';

import clsx from 'clsx';

import { Button } from '../common/Button';

import PartySelector from './PartySelector';

interface FileUploaderContentProps {
	isModal?: boolean;
}

type Party = 'plaintiff' | 'defendant';

export default function FileUploaderContent({ isModal = false }: FileUploaderContentProps) {
	const [selectedParty, setSelectedParty] = useState<Party | null>(null);
	const isSubmitDisabled = !selectedParty;

	return (
		<div className={clsx('w-154 gap-6 space-y-6 rounded-[20px] bg-white p-5', !isModal && 'shadow-emphasize')}>
			<PartySelector selectedParty={selectedParty} setSelectedParty={setSelectedParty} />
			<Button disabled={isSubmitDisabled} appearance="solid" isFullWidth>
				등록
			</Button>
		</div>
	);
}
