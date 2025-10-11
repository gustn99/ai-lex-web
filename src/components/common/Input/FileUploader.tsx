'use client';

import { useState, DragEvent, ChangeEvent } from 'react';

import clsx from 'clsx';

import UseInputId from '@/hooks/useInputId';

// import UploadIcon from '@/assets/svgs/common/upload.svg';

export default function FileUploader() {
	const [files, setFiles] = useState<File[]>([]);
	const [isDragging, setIsDragging] = useState(false);

	const inputId = UseInputId('file-upload');

	const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleDrop = (e: DragEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsDragging(false);
		const droppedFiles = e.dataTransfer.files;

		if (droppedFiles && validateFileType(droppedFiles)) setFiles([...files, ...droppedFiles]);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files;
		if (selectedFiles && validateFileType(selectedFiles)) setFiles([...files, ...selectedFiles]);
	};

	const validateFileType = (files: FileList) => {
		const isValid = [...files].every((f) => f.type === 'application/pdf');
		if (!isValid) alert('pdf 파일만 업로드할 수 있습니다.');

		return isValid;
	};

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={inputId} className="text-label-01-normal text-label-neutral font-semibold">
				파일 업로드 <span className="text-status-negative ml-1 font-medium">*</span>
			</label>
			<input id={inputId} type="file" accept="application/pdf" className="hidden" onChange={handleChange} />

			<button
				className={clsx(
					'bg-fill-alternative flex w-full flex-col items-center gap-1 rounded-lg py-6',
					isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400',
				)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={() => document.getElementById('file-input')?.click()}
			>
				<div className="bg-accent-background-cyan h-6 w-6"></div>
				{/* <UploadIcon /> */}
				<p className="text-body-01-normal font-regular">클릭 혹은 드래그하여 Pdf 파일 업로드</p>
			</button>
		</div>
	);
}
