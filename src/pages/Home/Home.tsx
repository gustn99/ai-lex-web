import { BackgroundImage, FileUploaderModalContent, TopBar } from '@/components/Home';

export default function Home() {
	return (
		<>
			<TopBar />
			<div className="mt-11 flex flex-col items-center gap-11">
				<div className="space-y-3 text-center">
					<p className="text-title-01 font-bold">사건 서류를 등록해 주세요.</p>
					<p className="text-heading-01">Pdf 형식의 파일을 업로드 해주세요.</p>
				</div>
				<FileUploaderModalContent />
				<BackgroundImage />
			</div>
		</>
	);
}
