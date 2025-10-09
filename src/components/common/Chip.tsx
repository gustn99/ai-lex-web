import clsx from 'clsx';
import { Chip as ChipType } from './ChipList';
import { useEffect, useRef, useState } from 'react';
import ChipInput from './\bChipInput';

// TODO: 주석 원복
// import ChipIcon from '@/assets/chip/deselect.svg?react'

export interface ChipProps {
	chip: ChipType;
	isActive: boolean;
	isAll: boolean;
	isEditable?: boolean;
	onSelect: (chip: string) => void;
	onDeselect: (e: React.MouseEvent, chip: string) => void;
}

export default function Chip({ chip, isActive, isAll, isEditable = false, onSelect, onDeselect }: ChipProps) {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const handleContextMenu = (e: React.MouseEvent) => {
		// if (!isEditable || isAll) return;
		e.preventDefault();
		setIsMenuOpen(true);
	};

	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const { label, value, backgroundColor } = chip;

	return (
		<div className="relative">
			{isEditing ? (
				<ChipInput value={value} setIsEditing={setIsEditing} />
			) : (
				<button
					className={clsx(
						'flex items-center gap-1 rounded-lg border px-2.5 py-1.5',
						isActive
							? `bg-label-strong ${backgroundColor} text-inverse-label`
							: 'border-line-normal-neutral text-label-alternative',
					)}
					onClick={() => onSelect(label)}
					onContextMenu={handleContextMenu}
				>
					{value}

					{!isAll && isActive && (
						<div
							role="button"
							tabIndex={0}
							onClick={(e) => onDeselect(e, label)}
							className="bg-accent-background-cyan h-4 w-4"
						>
							{/* <ChipIcon /> */}
						</div>
					)}
				</button>
			)}

			{isMenuOpen && (
				<div
					ref={menuRef}
					className="text-body-01-normal border-line-solid-neutral absolute top-8 my-2 flex w-40 flex-col gap-1 rounded-lg border bg-white px-3 py-2 font-normal whitespace-nowrap shadow-md"
				>
					{[
						{
							label: 'edit',
							value: '폴더 이름 변경',
							contentColor: 'text-label-normal',
							onClick: () => {
								closeMenu();
								setIsEditing(true);
							},
						},
						{ label: 'delete', value: '폴더 삭제', contentColor: 'text-status-negative' },
					].map(({ label, value, contentColor, onClick }) => (
						<button
							onClick={onClick}
							key={label}
							className={clsx('border-line-normal-alternative flex gap-2 py-2 not-last:border-b', contentColor)}
						>
							<div className="bg-accent-background-cyan h-6 w-6" />
							{value}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
