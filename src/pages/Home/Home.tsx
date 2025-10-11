import FileFilter from '@/components/Clipping/FileFilter';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => navigate('/chatbot')}>챗봇 테스트</button>
		</div>
	);
}
