import { useState } from 'react';

import { Button } from '@/components/common/Button';
import ConfirmModal from '@/components/common/Modal/ConfirmModal';

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModal1Open, setIsModal1Open] = useState(false);
	const [isModal2Open, setIsModal2Open] = useState(false);
	const [isModal3Open, setIsModal3Open] = useState(false);

	return (
		<div className="">
			<div className="flex gap-4">
				<Button appearance="solid" onClick={() => setIsModalOpen(true)}>
					모달 테스트
				</Button>
				<Button appearance="solid" onClick={() => setIsModal1Open(true)}>
					모달1 테스트
				</Button>
				<Button appearance="solid" onClick={() => setIsModal2Open(true)}>
					모달2 테스트
				</Button>
				<Button appearance="solid" onClick={() => setIsModal3Open(true)}>
					모달3 테스트
				</Button>
			</div>

			{isModalOpen && (
				<ConfirmModal title="나가시겠습니까?" content="내용은 복원됩니다." onCancel={() => setIsModalOpen(false)} />
			)}
			{isModal1Open && (
				<ConfirmModal
					title="나가시겠습니까?"
					content="내용은 복원됩니다."
					onCancel={() => setIsModal1Open(false)}
					confirmButton={{
						content: '나가기',
						onClick: () => {
							alert('나가기');
							setIsModal1Open(false);
						},
					}}
				/>
			)}
			{isModal2Open && (
				<ConfirmModal
					title="나가시겠습니까?"
					content="내용은 복원됩니다."
					onCancel={() => setIsModal2Open(false)}
					confirmButton={{
						content: '나가기',
						onClick: () => {
							alert('나가기');
							setIsModal2Open(false);
						},
					}}
					isNegative
				/>
			)}
			{isModal3Open && (
				<ConfirmModal
					title="나가시겠습니까?"
					content={<div className="bg-accent-background-cyan py-10">컨텐츠가 들어갑니다.</div>}
					onCancel={() => setIsModal3Open(false)}
				/>
			)}
		</div>
	);
}
