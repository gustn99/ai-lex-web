import BackArrow from '@/assets/svgs/common/back-arrow.svg?react';
import ChatBotIcon from '@/assets/svgs/chatbot/chatbot.svg?react';
import { useNavigate } from 'react-router-dom';

interface ChatHeaderProps {
	title: string;
	caseNo: string;
}

export default function ChatHeader({ title, caseNo }: ChatHeaderProps) {
	const navigate = useNavigate();

	return (
		<header className="border-line-normal-neutral sticky top-0 left-0 flex w-full items-center gap-4 border-b bg-white px-3 pt-4 pb-[15px]">
			<button onClick={() => navigate(-1)} aria-label="뒤로가기">
				<BackArrow className="text-cool-neutral-50/61" />
			</button>

			<div className="flex items-center gap-2">
				<div className="flex items-center gap-1">
					<span className="text-body-01-normal text-label-normal font-semibold">{title}</span>
					<div className="bg-line-normal-normal h-3 w-px" />
					<span className="text-label-01-normal text-label-neutral">{caseNo}</span>
				</div>

				<div className="border-label-neutral flex items-center gap-1 rounded-[22px] border px-[5px] py-[1px]">
					<ChatBotIcon />
					<span className="text-label-neutral text-body-01-normal font-medium">챗봇</span>
				</div>
			</div>
		</header>
	);
}
