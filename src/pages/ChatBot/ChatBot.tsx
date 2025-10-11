import { useEffect, useState } from 'react';
import ChatHeader from '@/components/ChatBot/ChatHeader';
import ChatSidebar from '@/components/ChatBot/ChatSidebar';
import ChatCategorySection from '@/components/ChatBot/ChatCategorySection';
import ChatMessage, { Message } from '@/components/ChatBot/ChatMessage';

const title = '매매대금 청구'; // TODO 연결
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

	const handleCategoryClick = (category: string) => {
		setSelectedCategory((prev) => (prev === category ? null : category));
	};

	const handleStartChat = () => setIsChatStarted(true);

	const handleSelectChat = async (chatId: number, chatCategory: string) => {
		setSelectedChatId(chatId);
		setSelectedCategory(chatCategory);
		setIsChatStarted(true);
		setIsThinking(true);

		// TODO: 실제 API 연동
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
			setIsThinking(false);
		}, 800);
	};

	const handleSendMessage = async (content: string) => {
		if (!content.trim()) return;

		const userMessage: Message = {
			id: Date.now(),
			content,
			isUser: true,
			createdAt: new Date().toISOString(),
		};
		setMessages((prev) => [...prev, userMessage]);
		setIsThinking(true);

		// TODO: 실제 API 교체
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

	useEffect(() => {
		// TODO: 실제 API 교체 (채팅 리스트 조회)
		setChatList([
			{ id: 1, category: '금융', title: '5월 10일 송금 사실 입증' },
			{ id: 2, category: '녹취록', title: '채무 변제 약속 발언' },
		]);
	}, []);

	return (
		<div className="flex h-screen flex-col">
			<ChatHeader title={title} caseNo={caseNo} />

			<div className="flex flex-1 pt-15">
				<ChatSidebar
					isFolded={isSidebarFolded}
					onToggleFold={() => setIsSidebarFolded((p) => !p)}
					chatList={chatList}
					onSelectChat={handleSelectChat}
				/>

				<main
					className={`relative flex flex-1 flex-col overflow-y-auto bg-white transition-[margin] duration-300 ease-in-out ${isSidebarFolded ? 'ml-[64px]' : 'ml-[280px]'} `}
				>
					{isChatStarted && (
						<div className="flex-1">
							<ChatMessage messages={messages} isThinking={isThinking} />
						</div>
					)}
					<div
						className={`left-1/2 w-full max-w-[900px] -translate-x-1/2 transform bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
							isChatStarted
								? `fixed bottom-0 translate-y-0 pb-2.5 opacity-100 ${isSidebarFolded ? 'ml-[32px]' : 'ml-[140px]'}`
								: 'absolute top-1/2 -translate-y-1/2 opacity-100'
						} `}
					>
						{!isChatStarted && (
							<div className="flex flex-col items-center justify-center">
								<h2 className="text-label-normal text-title-03 font-bold">안녕하세요, 어떤 질문이 있으신가요?</h2>
							</div>
						)}

						<ChatCategorySection
							selectedCategory={selectedCategory}
							onCategoryClick={handleCategoryClick}
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
