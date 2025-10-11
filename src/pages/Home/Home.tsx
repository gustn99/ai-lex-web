import FileUploader from '@/components/common/Input/FileUploader';

export default function Home() {
	return (
		<div className="space-y-3">
			<FileUploader />
			<FileUploader singleOnly />
		</div>
	);
}
