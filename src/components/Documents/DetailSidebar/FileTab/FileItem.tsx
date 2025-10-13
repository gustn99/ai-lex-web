import clsx from 'clsx';

export default function FileItem({ id, activeFileId }: { id: number; activeFileId: number }) {
	const isActive = id === activeFileId;

	return (
		<li>
			<button
				className={clsx(
					'grid w-full grid-cols-[1fr_auto] items-center justify-between gap-2 rounded-lg p-2',
					isActive && 'bg-fill-alternative',
				)}
			>
				<div className="text-tag-red flex min-w-0 items-center gap-1">
					<div className="bg-accent-background-cyan h-4.5 w-4.5 shrink-0"></div>
					<div className="text-label-01-normal truncate">서증 갑 3:의학회지))</div>
					<div className="bg-accent-background-cyan h-5 w-16 shrink-0"></div>

					<div className="ml-auto flex gap-1">
						{[1, 2].map((j) => (
							<div key={j} className="flex items-center px-0.5">
								<div className="bg-accent-background-cyan h-4 w-4"></div>
								{j}
							</div>
						))}
					</div>
				</div>

				<div className="w-16">2020.07.17</div>
			</button>
		</li>
	);
}
