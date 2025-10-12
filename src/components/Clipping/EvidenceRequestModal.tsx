import { useRef, useState } from 'react';
import { ModalWrapper } from '@/components/common/Modal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { TextareaField } from '@/components/common/Input';
import LinkIcon from '@/assets/svgs/common/link.svg?react';
import CloseIcon from '@/assets/svgs/common/close.svg?react';
import FileIcon from '@/assets/svgs/common/file.svg?react';

interface EvidenceRequestModalProps {
	onCancel: () => void;
	onCreate: () => void;
}

export default function EvidenceRequestModal({ onCancel, onCreate }: EvidenceRequestModalProps) {
	const [requestText, setRequestText] = useState('');

	const modalRef = useRef<HTMLDivElement | null>(null);
	useOutsideClick({ ref: modalRef, onClick: onCancel });

	return (
		<ModalWrapper>
			<div ref={modalRef} className="flex w-[740px] flex-col gap-3 rounded-xl bg-white">
				{/* 헤더 */}
				<div className="flex items-center justify-between p-4">
					<h2 className="text-heading-02 text-label-normal font-semibold">증거 요청</h2>
					<button onClick={onCancel}>
						<CloseIcon />
					</button>
				</div>

				{/* 내용 */}
				<div className="flex flex-col gap-5 px-6 pt-4">
					<div className="bg-fill-alternative flex flex-col gap-2 rounded p-2">
						<span className="text-body-02-normal text-label-neutral line-clamp-2">
							"2018. 12. 21. 11:57경 기관내 삽관 당시 망인의 동맥혈가스검사결과 를 살펴보면, 망인의 산소포화도는 90%, pH
							7.42, PCO2 36mmHg 로 산증 및 고이산화탄소증 소견은 전혀 존재하지 않았고 PO2 역시 58mmHg로 기관내 삽관을
							고려할 정도의 저산소증 소견 역시 존재하지 않았습니다."
						</span>
						<div className="flex items-center gap-1 rounded bg-[#f1f1f2] px-2 py-1">
							<FileIcon />
							<span className="text-label-neutral text-label-02">갑 제1호증: 매매계약서</span>
							<span className="text-caption-01 text-label-alternative">19페이지</span>
						</div>
					</div>

					<TextareaField
						label="요청 사항 입력"
						value={requestText}
						onChange={(e) => setRequestText(e.target.value)}
						placeholder="증거 제출 요청에 대한 설명을 입력해주세요."
						maxLength={2000}
						minHeight={136}
					/>
				</div>

				<div className="flex flex-col items-center justify-center gap-3 p-4">
					<span className="text-body-02-normal text-label-neutral">
						링크를 통해 의뢰인에게 관련 파일과 응답을 요청 할 수 있습니다.
					</span>

					<button
						onClick={onCreate}
						className="bg-primary-normal flex w-fit items-center gap-1.25 rounded-lg px-5 py-2.25 text-white"
					>
						<LinkIcon />
						<span className="text-body-02-normal font-semibold text-white">요청 링크 생성 및 복사</span>
					</button>
				</div>
			</div>
		</ModalWrapper>
	);
}
