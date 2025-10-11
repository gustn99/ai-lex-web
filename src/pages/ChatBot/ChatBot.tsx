import ChatHeader from '@/components/ChatBot/ChatHeader';

const title = '매매대금 청구';
const caseNo = '2025가단12345';

export default function ChatBot() {
	return (
		<>
			<ChatHeader title={title} caseNo={caseNo} />
		</>
	);
}
