import ChatHeader from '@/components/ChatBot/ChatHeader';
import ChatSidebar from '@/components/ChatBot/ChatSidebar';

const title = '매매대금 청구';
const caseNo = '2025가단12345';

export default function ChatBot() {
	return (
		<div className="flex h-screen flex-col">
			{/* sticky 헤더 */}
			<ChatHeader title={title} caseNo={caseNo} />

			<div className="flex flex-1">
				<ChatSidebar />
				<main className="flex-1 overflow-auto bg-white">{/* Chat content (대화창 등) */}</main>
			</div>
		</div>
	);
}
