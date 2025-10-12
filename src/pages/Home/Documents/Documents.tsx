import Banner from '@/components/Home/Documents/Banner';
import TopBar from '@/components/Home/TopBar';

export default function Documents() {
	return (
		<>
			<TopBar />
			<div className="mx-auto mt-6 flex max-w-[1100px] flex-col items-center gap-6 px-4">
				<Banner />
			</div>
		</>
	);
}
