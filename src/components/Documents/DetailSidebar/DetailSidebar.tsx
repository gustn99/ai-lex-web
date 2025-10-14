import { DetailSidebarTabs } from '.';

export default function DetailSidebar() {
	return (
		<div className="border-line-normal-normal grid h-dvh w-135 grid-rows-[auto_1fr] gap-3 border">
			<div className="flex flex-col gap-4 px-3.5 pt-5 pb-3">
				<button className="bg-accent-background-cyan h-6 w-6"></button>
				<div className="flex flex-col gap-2">
					{/* <ContentBadge appearance="solid" color={isPlaintiff ? 'red' : 'blue'} className="my-0.5">
						{partyContent}
					</ContentBadge> */}
					<div className="bg-accent-background-cyan my-0.5 h-5 w-16"></div>
					<div className="mb-4 flex items-center gap-1">
						<span className="text-body-01-normal truncate font-semibold">매매대금 청구</span>
						<div className="bg-line-normal-normal h-3 w-px" />
						<span className="text-label-01-normal text-label-neutral truncate">2025가단12345</span>
					</div>
				</div>
			</div>
			<DetailSidebarTabs />
		</div>
	);
}
