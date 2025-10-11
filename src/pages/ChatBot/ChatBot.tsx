'use client';

import { useState } from 'react';
import ChatHeader from '@/components/ChatBot/ChatHeader';
import ChatSidebar from '@/components/ChatBot/ChatSidebar';
import ChatCategorySection from '@/components/ChatBot/ChatCategorySection';

const title = '매매대금 청구';
const caseNo = '2025가단12345';

export default function ChatBot() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [isChatStarted, setIsChatStarted] = useState(false);

	const handleCategoryClick = (category: string) => {
		setSelectedCategory((prev) => (prev === category ? null : category));
	};

	const handleStartChat = () => setIsChatStarted(true);

	return (
		<div className="flex h-screen flex-col">
			<ChatHeader title={title} caseNo={caseNo} />
			<div className="flex flex-1">
				<ChatSidebar />

				<main className="relative flex flex-1 flex-col bg-white">
					{!isChatStarted ? (
						<div className="flex flex-1 flex-col items-center justify-center transition-all duration-500">
							<h2 className="text-label-normal text-title-03 font-bold">안녕하세요, 어떤 질문이 있으신가요?</h2>
							<ChatCategorySection
								selectedCategory={selectedCategory}
								onCategoryClick={handleCategoryClick}
								onSubmit={handleStartChat}
								isFixed={false}
							/>
						</div>
					) : (
						<div className="absolute bottom-[10px] left-0 mt-[10px] w-full bg-white">
							<ChatCategorySection
								selectedCategory={selectedCategory}
								onCategoryClick={handleCategoryClick}
								onSubmit={handleStartChat}
								isFixed={true}
							/>
						</div>
					)}
				</main>
			</div>
		</div>
	);
}
