import FileIcon from '@/assets/svgs/common/file.svg?react';

interface ClippingInfoProps {
	fileName: string;
	content: string;
	page: string | number;
}

export default function ClippingInfo({ fileName, content, page }: ClippingInfoProps) {
	return (
		<div className="bg-fill-alternative flex flex-col gap-2 rounded p-2">
			{/* 본문 내용 */}
			<span className="text-body-02-normal text-label-neutral line-clamp-2">{content}</span>

			{/* 파일 정보 */}
			<div className="flex items-center gap-1 rounded bg-[#f1f1f2] px-2 py-1">
				<FileIcon />
				<span className="text-label-neutral text-label-02">{fileName}</span>
				<span className="text-caption-01 text-label-alternative">{page}페이지</span>
			</div>
		</div>
	);
}
