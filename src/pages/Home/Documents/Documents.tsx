import { TopBar } from '@/components/Home';
import { Banner, DocumentList } from '@/components/Home/Documents';

export default function Documents() {
	return (
		<>
			<TopBar />
			<div className="mx-auto mt-6 flex max-w-[1132px] flex-col items-center gap-6 px-4 pb-40">
				<Banner />
				<div className="w-full space-y-10">
					<DocumentList title="추천 작업" />
					<DocumentList title="사건" />
				</div>
			</div>
		</>
	);
}
