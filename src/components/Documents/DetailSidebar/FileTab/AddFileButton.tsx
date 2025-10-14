import { Button } from '@/components/common/Button';

export default function AddFileButton() {
	const handleClick = () => {
		// api 연결 및 mutation -> file list 업데이트되도록
	};

	return (
		<div className="border-line-normal-normal fixed bottom-0 left-0 w-135 border-x bg-white px-3 pt-2.5 pb-5">
			<Button onClick={handleClick} appearance="solid" variant="assistive" isFullWidth>
				사건 서류 추가
			</Button>
		</div>
	);
}
