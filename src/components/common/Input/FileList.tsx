import AttachFileIcon from '@/assets/svgs/common/attach-file.svg?react';
import DeleteIcon from '@/assets/svgs/common/close-circle-gray.svg?react';

interface FileListProps {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function FileList({ files, setFiles }: FileListProps) {
	const handleFileDeleteClick = (fileName: string) => {
		setFiles(files.filter((f) => f.name !== fileName));
	};

	if (files.length === 0) return null;

	return (
		<ul className="border-line-normal-neutral file-uploader-scrollbar flex max-h-64 w-full flex-col gap-2 overflow-y-scroll rounded-lg border p-2 pr-0">
			{files.map((f) => (
				<li key={f.name} className="text-label-02 grid grid-cols-[auto_1fr_auto] items-center gap-1 px-1">
					<AttachFileIcon />
					<div className="w-full truncate">{f.name}</div>
					<button onClick={() => handleFileDeleteClick(f.name)}>
						<DeleteIcon width={16} height={16} style={{ '--fill-opacity': 0.61 } as React.CSSProperties} />
					</button>
				</li>
			))}
		</ul>
	);
}
