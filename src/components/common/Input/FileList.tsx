export default function FileList({
	files,
	setFiles,
}: {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}) {
	const handleFileDeleteClick = (fileName: string) => {
		setFiles(files.filter((f) => f.name !== fileName));
	};

	if (files.length === 0) return null;

	return (
		<ul className="border-line-normal-neutral file-uploader-scrollbar flex max-h-64 w-full flex-col gap-2 overflow-y-scroll rounded-lg border p-2 pr-0">
			{files.map((f) => (
				<li key={f.name} className="text-label-02 grid grid-cols-[auto_1fr_auto] items-center gap-1 px-1">
					<div className="bg-accent-background-cyan h-[18px] w-[18px]"></div>
					<div className="w-full truncate">{f.name}</div>
					<button
						onClick={() => handleFileDeleteClick(f.name)}
						className="bg-accent-background-cyan h-[18px] w-[18px]"
					></button>
				</li>
			))}
		</ul>
	);
}
