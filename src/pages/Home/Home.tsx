import BackgroundImage from '@/components/Home/BackgroundImage';
import FileUploaderContent from '@/components/Home/FileUploaderContent';
import TopBar from '@/components/Home/TopBar';

export default function Home() {
	// 등록된 서류가 있으면 documents로 이동, 우선은 a 태그로 대체
	return (
		<>
			<TopBar />
			<div className="mt-11 flex flex-col items-center gap-11">
				<div className="space-y-3 text-center">
					<p className="text-title-01 font-bold">사건 서류를 등록해 주세요.</p>
					<p className="text-heading-01">Pdf 형식의 파일을 업로드 해주세요.</p>
				</div>
				<FileUploaderContent />
				<BackgroundImage />
			</div>
			<a href="/documents">documents로 가기</a>
		</>
	);
}
