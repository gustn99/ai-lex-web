'use client';

import { useEffect, useRef } from 'react';

export interface Message {
	id: number;
	content: string;
	isUser: boolean;
	createdAt: string;
}

interface ChatMessageProps {
	messages: Message[];
	isThinking: boolean;
}

export default function ChatMessage({ messages, isThinking }: ChatMessageProps) {
	const bottomRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isThinking]);

	return (
		<div className="mx-auto mt-2.5 flex w-full max-w-[900px] flex-1 flex-col space-y-6 overflow-y-auto px-2 pb-[134px]">
			{messages.map((msg) => (
				<div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} w-full`}>
					<div
						className={`text-label-normal rounded-3xl break-words whitespace-pre-line ${
							msg.isUser
								? 'bg-cool-neutral-99 border-line-normal-alternative max-w-[70%] py-[14px] pr-[10px] pl-[14px]'
								: 'bg-transparent p-2.5'
						}`}
					>
						{msg.content}
					</div>
				</div>
			))}

			{isThinking && (
				<div className="flex flex-col gap-2.5">
					<span className="text-body-01-normal text-label-normal">생각 중..</span>
					<div className="flex flex-col gap-1">
						<div className="bg-fill-normal my-0.5 h-4.5 w-30 animate-pulse rounded-[3px]" />
						<div className="bg-fill-normal my-0.5 h-4.5 w-[158px] animate-pulse rounded-[3px]" />
					</div>
				</div>
			)}

			<div ref={bottomRef} />
		</div>
	);
}
