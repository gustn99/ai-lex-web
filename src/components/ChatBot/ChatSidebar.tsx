import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@/assets/svgs/chatbot/close.svg?react';
import WriteIcon from '@/assets/svgs/chatbot/write.svg?react';
import ExpandIcon from '@/assets/svgs/chatbot/expand.svg?react';

interface ChatSidebarProps {
	isFolded: boolean;
	onToggleFold: () => void;
}

export default function ChatSidebar({ isFolded, onToggleFold }: ChatSidebarProps) {
	const [animateContent, setAnimateContent] = useState(true);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			setAnimateContent(true);
			return;
		}

		if (!isFolded) {
			const timer = setTimeout(() => setAnimateContent(true), 100);
			return () => clearTimeout(timer);
		}
		setAnimateContent(false);
	}, [isFolded]);

	return (
		<aside
			className={`border-line-normal-neutral fixed top-[60px] left-0 z-[50] flex h-[calc(100vh-60px)] flex-col border-r transition-[width] duration-300 ease-in-out ${
				isFolded ? 'w-[64px] overflow-hidden bg-white' : 'bg-cool-neutral-99 w-[280px]'
			}`}
		>
			{/* 접힌 상태 */}
			{isFolded && (
				<div className="flex shrink-0 items-center justify-center p-3">
					<button
						onClick={onToggleFold}
						className="border-line-normal-neutral rounded-full border p-[9px]"
						aria-label="사이드바 펼치기"
					>
						<ExpandIcon />
					</button>
				</div>
			)}

			{/* 펼쳐진 상태 */}
			{!isFolded && (
				<div
					className={`flex h-full flex-col transition-all duration-300 ease-out ${
						animateContent ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0'
					}`}
				>
					<div className="flex shrink-0 items-center justify-between p-3">
						<button className="flex min-w-0 flex-1 items-center gap-2">
							<WriteIcon />
							<span className="text-body-02-normal text-label-normal whitespace-nowrap">새 채팅</span>
						</button>

						<div className="group relative shrink-0">
							<button
								onClick={onToggleFold}
								className="border-line-normal-neutral rounded-full border p-[9px]"
								aria-label="사이드바 닫기"
							>
								<CloseIcon />
							</button>

							<div className="bg-inverse-background text-caption-02 text-inverse-label absolute top-[calc(100%+7px)] left-0 hidden -translate-x-[4px] rounded-sm border p-1 whitespace-nowrap group-hover:inline-flex">
								사이드바 닫기
							</div>
						</div>
					</div>

					<div className="text-label-02 text-label-alternative shrink-0 px-4 py-2">채팅</div>
				</div>
			)}
		</aside>
	);
}
