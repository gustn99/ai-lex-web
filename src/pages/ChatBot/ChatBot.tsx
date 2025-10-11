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

				<main className="relative flex flex-1 flex-col overflow-hidden bg-white">
					<div
						className={`absolute left-0 w-full bg-white transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${
							isChatStarted ? 'bottom-[10px] translate-y-0 opacity-100' : 'top-1/2 -translate-y-1/2 opacity-100'
						}`}
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
							isFixed={isChatStarted}
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
