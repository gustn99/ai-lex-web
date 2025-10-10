import ConfirmModal from '@/components/common/Modal/ConfirmModal';

export default function Home() {
	return (
		<div className="">
			{/* <ConfirmModal title="나가시겠습니까?" content="내용은 복원됩니다." /> */}
			<ConfirmModal
				title="나가시겠습니까?"
				content="내용은 복원됩니다."
				confirmButton={{ content: '나가기', onClick: () => {} }}
			/>
			{/* <ConfirmModal
				title="나가시겠습니까?"
				content="내용은 복원됩니다."
				confirmButton={{ content: '나가기', onClick: () => {} }}
				isNegative
			/> */}
			{/* <ConfirmModal title="나가시겠습니까?" content={<div className="text-label-normal">내용은 복원됩니다.</div>} /> */}
		</div>
	);
}
