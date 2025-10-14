import { useRef } from 'react';

import CloseIcon from '@/assets/svgs/common/close-black.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { ModalWrapper } from '../common/Modal';

import FileUploaderModalContent from './FileUploaderModalContent';

interface FileUploaderModalProps {
	onClose: () => void;
}

export default function FileUploaderModal({ onClose }: FileUploaderModalProps) {
	const modalRef = useRef<HTMLDivElement | null>(null);
	useOutsideClick({ ref: modalRef, onClick: onClose });

	return (
		<ModalWrapper>
			<div ref={modalRef} className="w-fit rounded-xl bg-white p-4">
				<div className="text-heading-02 mb-7 flex justify-between font-semibold">
					새 사건 서류
					<button onClick={onClose}>
						<CloseIcon />
					</button>
				</div>
				<FileUploaderModalContent isModal onClose={onClose} />
			</div>
		</ModalWrapper>
	);
}
