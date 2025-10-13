import { useEffect, useState } from 'react';

import clsx from 'clsx';

import ChatCategorySection from '@/components/ChatBot/ChatCategorySection';
import ChatHeader from '@/components/ChatBot/ChatHeader';
import ChatMessage, { Message } from '@/components/ChatBot/ChatMessage';
import ChatSidebar from '@/components/ChatBot/ChatSidebar';

const title = '매매대금 청구'; // TODO 챗봇 버튼에 정보 연결
const caseNo = '2025가단12345';

export interface ChatListItem {
	id: number;
	category: string;
	title: string;
}

export default function ChatBot() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [isChatStarted, setIsChatStarted] = useState(false);
	const [isSidebarFolded, setIsSidebarFolded] = useState(false);

	const [chatList, setChatList] = useState<ChatListItem[]>([]);
	const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

	const [messages, setMessages] = useState<Message[]>([]);
	const [isThinking, setIsThinking] = useState(false);

	// 카테고리 클릭
	const handleCategoryClick = (category: string) => {
		setSelectedCategory((prev) => (prev === category ? null : category));
	};

	// 새 채팅 시작
	const handleStartChat = () => setIsChatStarted(true);
	const handleNewChat = () => {
		setSelectedChatId(null);
		setSelectedCategory(null);
		setIsChatStarted(false);
		setMessages([]);
		setIsThinking(false);
	};

	// 채팅 선택
	const handleSelectChat = (chatId: number, chatCategory: string) => {
		setSelectedChatId(chatId);
		setSelectedCategory(chatCategory);
		setIsChatStarted(true);

		// TODO: 실제 API 연동 (해당 채팅 리스트의 채팅 내역 조회)
		setTimeout(() => {
			setMessages([
				{
					id: 1,
					content: '이 송금 사실은 증거로 사용될 수 있나요?',
					isUser: true,
					createdAt: new Date().toISOString(),
				},
				{
					id: 2,
					content: '✅ 네, 금융거래 내역은 증거자료로 활용 가능합니다.',
					isUser: false,
					createdAt: new Date().toISOString(),
				},
			]);
		}, 800);
	};

	// 메시지 전송
	const handleSendMessage = (content: string) => {
		if (!content.trim()) return;

		const userMessage: Message = {
			id: Date.now(),
			content,
			isUser: true,
			createdAt: new Date().toISOString(),
		};
		setMessages((prev) => [...prev, userMessage]);
		setIsThinking(true);

		// TODO: 실제 API 교체 (챗봇 요청 보내기)
		setTimeout(() => {
			const botReply: Message = {
				id: Date.now() + 1,
				content: '✅ 확인했습니다. 해당 거래 내역은 금융 증거로 활용 가능합니다.',
				isUser: false,
				createdAt: new Date().toISOString(),
			};
			setMessages((prev) => [...prev, botReply]);
			setIsThinking(false);
		}, 1000);
	};

	// 대화 삭제
	const handleDeleteChat = (chatId: number) => {
		setChatList((prev) => prev.filter((chat) => chat.id !== chatId));

		if (selectedChatId === chatId) {
			setSelectedChatId(null);
			setIsChatStarted(false);
			setMessages([]);
			setSelectedCategory(null);
		}
	};

	useEffect(() => {
		// TODO: 실제 API 교체 (채팅 리스트 조회)
		setChatList([
			{ id: 1, category: '금융', title: '5월 10일 송금 사실 입증 입증 입증 입증 입증 입증' },
			{ id: 2, category: '녹취록', title: '채무 변제 약속 발언' },
		]);
	}, []);

	return (
		<div className="flex h-dvh w-full flex-col overflow-hidden">
			<ChatHeader title={title} caseNo={caseNo} />

			<div className="flex flex-1 overflow-hidden pt-15">
				{/* 사이드바 */}
				<div className={`transition-[width] duration-300 ease-in-out ${isSidebarFolded ? 'w-[64px]' : 'w-[280px]'}`}>
					<ChatSidebar
						isFolded={isSidebarFolded}
						onToggleFold={() => setIsSidebarFolded((p) => !p)}
						chatList={chatList}
						onSelectChat={handleSelectChat}
						onNewChat={handleNewChat}
						onDeleteChat={handleDeleteChat}
						selectedChatId={selectedChatId}
					/>
				</div>

				{/* 메인 콘텐츠 */}
				<main className="relative flex flex-1 flex-col overflow-hidden bg-white">
					{isChatStarted && (
						<div className="flex-1 overflow-y-auto">
							<ChatMessage messages={messages} isThinking={isThinking} />
						</div>
					)}

					<div
						className={clsx(
							'absolute left-1/2 w-full max-w-[916px] -translate-x-1/2 px-2 transition-all duration-500 ease-in-out',
							isChatStarted ? 'bottom-0 translate-y-0 bg-white opacity-100' : 'top-1/2 -translate-y-1/2 opacity-100',
						)}
					>
						{!isChatStarted && (
							<div className="flex flex-col items-center justify-center">
								<h2 className="text-label-normal text-title-03 font-bold">안녕하세요, 어떤 질문이 있으신가요?</h2>
							</div>
						)}

						<ChatCategorySection
							selectedCategory={selectedCategory}
							onCategoryClick={!isChatStarted ? handleCategoryClick : undefined}
							onSubmit={handleStartChat}
							onSend={handleSendMessage}
							isFixed={isChatStarted}
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
