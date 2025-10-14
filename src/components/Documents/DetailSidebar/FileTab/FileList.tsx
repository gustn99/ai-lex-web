import FileItem from './FileItem';

export default function FileList() {
	return (
		<div className="border-line-normal-alternative text-label-02 text-label-alternative flex h-fit max-h-full min-h-0 w-full flex-col rounded-lg border">
			<div className="bg-fill-alternative flex items-center justify-between rounded-t-lg px-4 py-3">
				<button className="flex w-16 gap-1">
					파일명<div className="bg-accent-background-cyan h-4.5 w-4.5"></div>
				</button>
				<button className="flex w-16 gap-1">
					날짜<div className="bg-accent-background-cyan h-4.5 w-4.5"></div>
				</button>
			</div>

			<div className="mt-1 flex-1 shrink space-y-2 overflow-scroll px-2">
				<ul>
					{[1, 2, 3, 4, 5, 6, 88, 99, 11, 22, 33, 44].map((i) => (
						<FileItem key={`plaintiff-${i}`} id={i} activeFileId={1} />
					))}
				</ul>
				<div className="bg-fill-alternative h-px w-full" />
				<ul>
					{[4, 5, 6, 7, 8].map((i) => (
						<FileItem key={`defendance-${i}`} id={i} activeFileId={1} />
					))}
				</ul>
			</div>
		</div>
	);
}
