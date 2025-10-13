import { DetailSidebar } from '@/components/Documents/DetailSidebar';

export default function DocumentDetail() {
	return (
		<div className="flex h-dvh w-full overflow-hidden">
			<DetailSidebar />
			<div className="flex-1 overflow-scroll">
				{/* {[1, 2, 3, 4, 5].map((n) => (
					<div key={n} className="h-200 border"></div>
				))} */}
			</div>
		</div>
	);
}
