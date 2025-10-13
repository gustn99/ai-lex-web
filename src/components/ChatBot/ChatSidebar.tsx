import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import CloseIcon from '@/assets/svgs/chatbot/close.svg?react';
import ExpandIcon from '@/assets/svgs/chatbot/expand.svg?react';
import DeleteIcon from '@/assets/svgs/common/delete.svg?react';
import WriteIcon from '@/assets/svgs/chatbot/write.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';
import { ChatListItem } from '@/pages/ChatBot/ChatBot';
import ContextMenu from '../common/ContextMenu';

interface ChatSidebarProps {
	isFolded: boolean;
	onToggleFold: () => void;
	chatList: ChatListItem[];
	onSelectChat: (id: number, category: string) => void;
	onNewChat: () => void;
	onDeleteChat: (id: number) => void;
	selectedChatId: number | null;
}

export default function ChatSidebar({
	isFolded,
	onToggleFold,
	chatList,
	onSelectChat,
	onNewChat,
	onDeleteChat,
	selectedChatId,
}: ChatSidebarProps) {
	const [animateContent, setAnimateContent] = useState(true);
	const [isLongPress, setIsLongPress] = useState(false);
	const [menuTargetId, setMenuTargetId] = useState<number | null>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isFirstRender = useRef(true);

	// 첫 렌더 시 애니메이션 제어
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

	// 외부 클릭 시 메뉴 닫기
	useOutsideClick({
		ref: menuRef,
		onClick: () => setMenuTargetId(null),
		eventType: 'mousedown',
	});

	// 길게 누르기 → 메뉴 열기
	const handleMouseDown = (chatId: number, e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLongPress(false);

		longPressTimer.current = setTimeout(() => {
			setMenuTargetId(chatId);
			setIsLongPress(true);
		}, 600);
	};

	const handleMouseUp = () => {
		if (longPressTimer.current) clearTimeout(longPressTimer.current);
	};

	const handleClick = (chatId: number, category: string) => {
		if (!isLongPress) {
			onSelectChat(chatId, category);
		}
	};

	return (
		<aside
			className={clsx(
				'border-line-normal-neutral fixed top-15 left-0 z-[50] flex h-[calc(100vh-60px)] flex-col border-r transition-[width] duration-300 ease-in-out',
				isFolded ? 'w-[64px] overflow-hidden bg-white' : 'bg-cool-neutral-99 w-[280px]',
			)}
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
					className={clsx(
						'flex h-full flex-col transition-all duration-300 ease-out',
						animateContent ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0',
					)}
				>
					{/* 헤더 */}
					<div className="flex shrink-0 items-center justify-between p-3">
						<button onClick={onNewChat} className="flex min-w-0 flex-1 items-center gap-2">
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

					{chatList.map((chat) => {
						const isActive = chat.id === selectedChatId;
						const isMenuOpen = menuTargetId === chat.id;

						return (
							<div key={chat.id} className="relative" ref={menuRef}>
								<button
									tabIndex={0}
									onClick={() => handleClick(chat.id, chat.category)}
									onKeyDown={(e) => e.key === 'Enter' && onSelectChat(chat.id, chat.category)}
									onContextMenu={(e) => {
										e.preventDefault();
										setMenuTargetId(chat.id);
									}}
									onMouseDown={(e) => handleMouseDown(chat.id, e)}
									onMouseUp={handleMouseUp}
									className={clsx(
										'flex w-full px-4 py-3 transition-colors',
										isActive ? 'bg-cool-neutral-97' : 'hover:bg-cool-neutral-97',
									)}
								>
									<span className="text-body-02-normal text-label-normal shrink-0">[{chat.category}]&nbsp;</span>
									<span className="text-body-02-normal text-label-normal truncate">{chat.title}</span>
								</button>

								{isMenuOpen && (
									<div onMouseDown={(e) => e.stopPropagation()} className="absolute top-2 left-3 z-[100] mt-1">
										<ContextMenu
											onClose={() => setMenuTargetId(null)}
											isAbsolute
											items={[
												{
													key: 'delete',
													label: '대화 삭제',
													icon: DeleteIcon,
													color: 'text-status-negative',
													onClick: () => onDeleteChat(chat.id),
												},
											]}
										/>
									</div>
								)}
							</div>
						);
					})}
				</div>
			)}
		</aside>
	);
}
