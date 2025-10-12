import { useEffect, useRef, useState } from 'react';

import CloseIcon from '@/assets/svgs/chatbot/close.svg?react';
import ExpandIcon from '@/assets/svgs/chatbot/expand.svg?react';
import TrashIcon from '@/assets/svgs/chatbot/trash.svg?react';
import WriteIcon from '@/assets/svgs/chatbot/write.svg?react';

import useOutsideClick from '@/hooks/useOutsideClick';

import { ChatListItem } from '@/pages/ChatBot/ChatBot';

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
	const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);

	const menuRef = useRef<HTMLDivElement>(null);

	const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

	// 메뉴 외부 클릭 시 닫기
	useOutsideClick({
		ref: menuRef,
		onClick: () => setMenuPosition(null),
		eventType: 'click',
	});

	// 삭제 메뉴 오픈
	const openDeleteMenu = (id: number, target: HTMLElement) => {
		const rect = target.getBoundingClientRect();
		setMenuPosition({
			x: rect.left + 12,
			y: rect.bottom,
		});
	};

	// 길게 누르기 감지
	const handleMouseDown = (chatId: number, e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const target = e.currentTarget;
		longPressTimer.current = setTimeout(() => {
			openDeleteMenu(chatId, target);
		}, 600);
	};

	const handleMouseUp = () => {
		if (longPressTimer.current) clearTimeout(longPressTimer.current);
	};

	// 우클릭 메뉴
	const handleContextMenu = (chatId: number, e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		openDeleteMenu(chatId, e.currentTarget);
	};

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
						return (
							<div
								key={chat.id}
								role="button"
								tabIndex={0}
								onClick={() => onSelectChat(chat.id, chat.category)}
								onKeyDown={(e) => e.key === 'Enter' && onSelectChat(chat.id, chat.category)}
								onContextMenu={(e) => handleContextMenu(chat.id, e)}
								onMouseDown={(e) => handleMouseDown(chat.id, e)}
								onMouseUp={handleMouseUp}
								className={`cursor-pointer px-4 py-3 transition-colors ${
									isActive ? 'bg-cool-neutral-97' : 'hover:bg-cool-neutral-97'
								}`}
							>
								<span className="text-body-02-normal text-label-normal">[{chat.category}]</span>{' '}
								<span className="text-body-02-normal text-label-normal">{chat.title}</span>
							</div>
						);
					})}
				</div>
			)}

			{/* 삭제 메뉴 */}
			{menuPosition && selectedChatId && (
				<div ref={menuRef}>
					<button
						onClick={() => {
							onDeleteChat(selectedChatId);
							setMenuPosition(null);
						}}
						style={{
							top: menuPosition.y,
							left: menuPosition.x,
							boxShadow:
								'0 2px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.08)',
						}}
						className="border-line-solid-neutral fixed z-[100] my-2 flex w-40 items-center gap-2 rounded-lg border bg-white px-3 py-4"
					>
						<TrashIcon />
						<span className="text-body-01-normal text-status-negative">대화 삭제</span>
					</button>
				</div>
			)}
		</aside>
	);
}
