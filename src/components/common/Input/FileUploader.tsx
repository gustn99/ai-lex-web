'use client';

import { useState, DragEvent, ChangeEvent } from 'react';

import clsx from 'clsx';

import UseInputId from '@/hooks/useInputId';

import FileList from './FileList';

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
		uploadFile(e.dataTransfer.files);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const fs = e.target.files;
		if (fs) uploadFile(fs);
	};

	const uploadFile = (fs: FileList) => {
		if (fs && validateFileType(fs)) {
			const filteredFiles = [...fs].filter(
				(f) => !files.some((existing) => existing.name === f.name && existing.size === f.size),
			);
			setFiles([...files, ...filteredFiles]);
		}
	};

	const validateFileType = (fs: FileList) => {
		const isValid = [...fs].every((f) => f.type === 'application/pdf');
		if (!isValid) alert('pdf 파일만 업로드할 수 있습니다.');

		return isValid;
	};

	return (
		<div className="flex flex-col gap-2 px-2">
			<label htmlFor={inputId} className="text-label-01-normal text-label-neutral font-semibold">
				파일 업로드 <span className="text-status-negative ml-1 font-medium">*</span>
			</label>
			<input id={inputId} type="file" accept="application/pdf" className="hidden" onChange={handleChange} />

			<button
				className={clsx(
					'flex w-full flex-col items-center gap-1 rounded-lg py-6',
					isDragging ? 'bg-primary-neutral/20' : 'bg-fill-alternative',
				)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={() => document.getElementById(inputId)?.click()}
			>
				<div className="bg-accent-background-cyan h-6 w-6"></div>
				{/* <UploadIcon /> */}
				<p className="text-body-01-normal font-regular">클릭 혹은 드래그하여 Pdf 파일 업로드</p>
			</button>

			<FileList files={files} setFiles={setFiles} />
		</div>
	);
}
