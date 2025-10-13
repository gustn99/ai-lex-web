import { useRef } from 'react';

import ArrowIcon from '@/assets/svgs/common/arrow.svg?react';
import CheckIcon from '@/assets/svgs/common/check.svg?react';
import CloseIcon from '@/assets/svgs/common/close.svg?react';
import FileIcon from '@/assets/svgs/common/file.svg?react';
import FolderIcon from '@/assets/svgs/common/folder.svg?react';
import LinkIcon from '@/assets/svgs/common/link.svg?react';

import { ModalWrapper } from '@/components/common/Modal';

import useOutsideClick from '@/hooks/useOutsideClick';

import { formatKoreanDateTime } from '@/utils/dateUtils';

import { Button } from '../common/Button';

import ClippingInfo from './ClippingInfo';

interface EvidenceHistoryModalProps {
	onBack: () => void; // ← 화살표 (뒤로가기)
	onClose: () => void;
	requestId: number;
}

export default function EvidenceHistoryModal({ onBack, onClose, requestId }: EvidenceHistoryModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);
	useOutsideClick({ ref: modalRef, onClick: onClose });

	// 임시 mock 데이터
	const evidenceDetail = {
		arrivalDate: '2025-09-23',
		clientAnswer:
			'의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변의뢰인 답변',
		clientFile: '제1호증: 매매계약서',
		requestContent:
			'사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용사용자가 작성한 내용',
		requestFile: '갑 제1호증: 매매계약서 (19페이지)',
		folderName: '1차 서면 준비 작성',
		sentAt: '2020-07-17T16:00:00Z',
		requestFilePage: 19,
	};

	return (
		<ModalWrapper>
			<div
				ref={modalRef}
				className="flex h-full max-h-[678px] w-full max-w-200 flex-col gap-3 overflow-hidden rounded-xl bg-white shadow-xl"
			>
				<div className="flex items-center justify-between p-4">
					<div className="flex items-center gap-3">
						<button onClick={onBack} className="flex items-center justify-center" aria-label="뒤로가기">
							<ArrowIcon className="h-6 w-6 rotate-180" />
						</button>

						<h2 className="text-title-03 text-label-normal font-bold">제출 내역</h2>
						<div className="flex items-center gap-1">
							<span className="text-label-01-normal text-primary-normal font-semibold">
								증거 도착 ({evidenceDetail.arrivalDate})
							</span>
							<CheckIcon className="text-primary-normal" />
						</div>
					</div>

					<button
						onClick={onClose}
						className="text-label-alternative hover:text-label-normal transition-colors"
						aria-label="닫기"
					>
						<CloseIcon />
					</button>
				</div>

				<div className="scrollbar-hide flex flex-1 flex-col gap-3 overflow-y-auto px-4">
					{/* 의뢰인 답변 */}
					<section className="border-line-normal-normal rounded-lg border p-3">
						<h3 className="text-caption-01 text-label-normal mb-2 font-semibold">의뢰인 답변</h3>
						<div className="text-body-02-normal text-label-normal whitespace-pre-wrap">
							{evidenceDetail.clientAnswer}
						</div>

						{evidenceDetail.clientFile && (
							<div className="text-caption-01 text-label-alternative mt-2 flex flex-col gap-2">
								<h3 className="text-caption-01 text-label-normal mb-2 font-semibold">첨부 파일</h3>

								<div className="bg-fill-alternative flex items-center gap-1 rounded-lg p-2">
									<FileIcon />
									<span className="text-label-neutral text-label-02">{evidenceDetail.clientFile}</span>
								</div>
							</div>
						)}
					</section>

					{/* 내가 보낸 요청 사항*/}
					<section className="bg-fill-normal rounded-lg p-3">
						<h3 className="text-caption-01 text-label-normal mb-2 font-semibold">내가 보낸 요청 사항</h3>
						<div className="text-body-02-normal text-label-normal whitespace-pre-wrap">
							{evidenceDetail.requestContent}
						</div>
						<div className="text-caption-01 text-label-alternative mt-2 flex items-center justify-between">
							<ClippingInfo
								fileName={evidenceDetail.requestFile}
								content={evidenceDetail.requestContent}
								page={evidenceDetail.requestFilePage}
								variant="light"
							/>
						</div>

						<div className="mt-2 flex items-center justify-between">
							<div className="flex items-center gap-1">
								<FolderIcon />
								<div className="text-caption-01 text-label-alternative">{evidenceDetail.folderName}</div>
							</div>
							<span className="text-label-02 text-label-neutral">
								{formatKoreanDateTime(evidenceDetail.sentAt)} 발송
							</span>
						</div>
					</section>
				</div>

				<div className="flex shrink-0 items-center justify-center gap-3 p-4">
					<Button
						appearance="outlined"
						variant="assistive"
						size="medium"
						LeadingIcon={LinkIcon}
						onClick={() => console.log('링크복사')}
					>
						<span>링크 복사</span>
					</Button>
					<Button appearance="solid" variant="primary" size="medium" onClick={() => console.log('서증 제출')}>
						서증으로 제출하기
					</Button>
				</div>
			</div>
		</ModalWrapper>
	);
}
