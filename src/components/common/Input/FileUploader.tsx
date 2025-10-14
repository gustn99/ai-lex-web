'use client';

import { useState, DragEvent, ChangeEvent } from 'react';

import clsx from 'clsx';

import UploadIcon from '@/assets/svgs/common/upload.svg?react';

import UseInputId from '@/hooks/useInputId';

import LoadingIcon from '../LoadingIcon';

import FileList from './FileList';

type FileUploadType = 'document' | 'evidence';

interface FileUploaderProps {
	files: File[];
	setFiles: React.Dispatch<React.SetStateAction<File[]>>;
	type: FileUploadType;
	singleOnly?: boolean;
}

export default function FileUploader({ files, setFiles, type, singleOnly = false }: FileUploaderProps) {
	const [isDragging, setIsDragging] = useState(false);
	const isLoading = false;

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
		if (singleOnly && (files.length === 1 || fs.length > 1)) {
			alert('파일은 하나만 업로드할 수 있습니다.');
			return;
		}

		if (fs && validateFileType(fs)) {
			const filteredFiles = [...fs].filter((f) =>
				files.every((existing) => existing.name !== f.name || existing.size !== f.size),
			);
			if (filteredFiles.length < fs.length) {
				if (filteredFiles.length === 0) alert('이미 업로드한 파일입니다.');
				alert('중복 파일을 제외하고 업로드합니다.');
			}

			setFiles([...files, ...filteredFiles]);
		}
	};

	const validateFileType = (fs: FileList) => {
		const isValid = [...fs].every((f) => f.type === 'application/pdf');
		if (!isValid) alert('pdf 파일만 업로드할 수 있습니다.');

		return isValid;
	};

	return (
		<div className={clsx('flex flex-col', type === 'document' ? 'gap-3' : 'gap-2')}>
			<label htmlFor={inputId} className="text-label-01-normal text-label-neutral font-semibold">
				파일 업로드 <span className="text-status-negative ml-1 font-medium">*</span>
			</label>
			<input id={inputId} type="file" accept="application/pdf" className="hidden" onChange={handleChange} />

			<button
				className={clsx(
					'text-body-01-normal flex w-full flex-col items-center gap-1 rounded-lg py-6',
					isDragging ? 'bg-primary-neutral/20' : 'bg-fill-alternative',
				)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={() => document.getElementById(inputId)?.click()}
			>
				{isLoading ? (
					<>
						<div className="h-6 w-6">
							<LoadingIcon className="stroke-line-solid-normal" />
						</div>
						<p className="text-label-neutral font-medium">파일 업로드 중.. (10/100)</p>
					</>
				) : (
					<>
						<UploadIcon />
						<p>클릭 혹은 드래그하여 Pdf 파일 업로드</p>
					</>
				)}
			</button>

			<FileList files={files} setFiles={setFiles} />
			{singleOnly && <p className="text-caption-01 text-label-alternative">하나의 파일만 업로드 해주세요.</p>}
		</div>
	);
}
