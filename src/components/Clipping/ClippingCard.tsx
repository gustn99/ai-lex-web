import { useState } from 'react';

import clsx from 'clsx';

import ArrowDownIcon from '@/assets/svgs/common/arrow-drop-down.svg?react';
import ArrowIcon from '@/assets/svgs/common/arrow.svg?react';
import FolderIcon from '@/assets/svgs/common/folder.svg?react';
import LinkIcon from '@/assets/svgs/common/link.svg?react';

import Toast from '@/components/common/Toast/Toast';

import { CLIPPING_TYPE_CONFIGS } from '@/constants/clipping/clippingModalOptions';
import { formatKoreanDate, formatKoreanDateTime } from '@/utils/dateUtils';

import ClippingInfo from './ClippingInfo';

export interface ClippingCardProps {
	id: number;
	type: 'rebuttal' | 'evidence' | 'enhance' | 'evidence-request';
	requestText?: string;
	fileName: string;
	content: string;
	page: number;
	folderName?: string;
	savedAt?: string;
	sentAt?: string;
	link?: string;
	onViewDetail?: (id: number) => void;
	isSubmittedEvidence?: boolean;
}

export default function ClippingCard({
	id,
	type,
	requestText,
	content,
	fileName,
	page,
	folderName,
	savedAt,
	sentAt,
	link,
	onViewDetail,
	isSubmittedEvidence,
}: ClippingCardProps) {
	const [isExpanded, setIsExpanded] = useState(true);
	const [showLinkToast, setShowLinkToast] = useState(false);

	const { label, icon, typeColor } = CLIPPING_TYPE_CONFIGS[type];
	const isEvidenceRequest = type === 'evidence-request';
	const shouldShowDivider = isEvidenceRequest || (!isEvidenceRequest && isExpanded);

	const handleCopyLink = async (e: React.MouseEvent) => {
		e.stopPropagation();
		try {
			if (!link) throw new Error('복사할 링크가 없습니다.');
			await navigator.clipboard.writeText(link);
			setShowLinkToast(true);
		} catch {
			console.error('링크 복사 실패');
		}
	};

	return (
		<div
			className={clsx(
				'border-line-normal-normal flex flex-col rounded-lg border bg-white p-3 transition-all duration-300',
				!isExpanded && type !== 'evidence-request' && 'pb-3',
			)}
		>
			{/* 헤더 */}
			<div
				className={clsx(
					'flex cursor-pointer items-center justify-between select-none',
					type !== 'evidence-request' && '-mx-1 rounded-md px-1',
				)}
				onClick={() => {
					if (type !== 'evidence-request') setIsExpanded((prev) => !prev);
				}}
			>
				<div className="flex items-center gap-1">
					<div className={clsx('text-body-02-normal flex items-center gap-0.5 font-semibold', typeColor)}>
						{icon}
						{label}
					</div>

					{type !== 'evidence-request' && savedAt && (
						<span className="text-caption-01 text-label-alternative">{formatKoreanDate(savedAt)} 저장</span>
					)}
				</div>

				{/* 우측 버튼 영역 */}
				{type === 'evidence-request' ? (
					<div className="flex items-center gap-3">
						{isSubmittedEvidence ? (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onViewDetail?.(id);
								}}
								className="text-label-01-normal text-primary-normal flex items-center gap-1 font-semibold"
							>
								<span>제출 내역</span>
								<ArrowIcon className="h-4.5 w-4.5" />
							</button>
						) : (
							<button
								onClick={(e) => {
									void handleCopyLink(e);
								}}
								className="text-label-01-normal text-label-alternative flex items-center gap-1 font-semibold"
							>
								<LinkIcon />
								<span>링크 복사</span>
							</button>
						)}
					</div>
				) : (
					<ArrowDownIcon className={clsx(isExpanded && 'rotate-180')} />
				)}
			</div>

			{/* 구분선 */}
			{shouldShowDivider && <div className="bg-line-normal-neutral my-2 h-px w-full" />}

			{/* 증거 제출 요청일 경우만 본문 표시 */}
			{type === 'evidence-request' && (
				<div className="flex flex-col gap-2">
					<span className="text-caption-01 text-label-normal font-semibold">요청 내용</span>
					<div className="text-body-02-normal text-label-normal whitespace-pre-line">{requestText}</div>

					{/* 증거제출용 인포 */}
					<ClippingInfo fileName={fileName} content={content} page={page} />

					{/* 하단 - 발송 시각 */}
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center gap-1">
							<FolderIcon />
							<div className="text-caption-01 text-label-alternative">{folderName}</div>
						</div>
						<span className="text-caption-01 text-label-alternative">
							{sentAt ? `${formatKoreanDateTime(sentAt)} 발송` : '발송일 미상'}
						</span>
					</div>
				</div>
			)}

			{type !== 'evidence-request' && isExpanded && (
				<div className="mt-1 flex flex-col gap-2">
					<ClippingInfo fileName={fileName} content={content} page={page} />
					<div className="flex w-full items-center justify-between">
						<div className="flex items-center gap-1">
							<FolderIcon />
							<div className="text-caption-01 text-label-alternative">{folderName}</div>
						</div>
						<button
							type="button"
							onClick={() => console.log('삭제 버튼 클릭')}
							className="text-label-01-normal text-label-alternative py-1 font-semibold"
						>
							삭제
						</button>
					</div>
				</div>
			)}

			{showLinkToast && <Toast message="링크 복사 완료" type="check" onClose={() => setShowLinkToast(false)} />}
		</div>
	);
}
