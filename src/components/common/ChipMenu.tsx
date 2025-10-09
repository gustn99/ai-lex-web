import clsx from 'clsx';
import { useEffect, useRef } from 'react';

export interface ChipMenuProps {
	setIsMenuOpen: (state: boolean) => void;
	setIsEditing: (state: boolean) => void;
}

export default function ChipMenu({ setIsMenuOpen, setIsEditing }: ChipMenuProps) {
	const menuRef = useRef<HTMLDivElement | null>(null);

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

	const menus = [
		{
			label: 'edit',
			value: '폴더 이름 변경',
			contentColor: 'text-label-normal',
			// icon: EditIcon,
			onClick: () => {
				closeMenu();
				setIsEditing(true);
			},
		},
		{
			label: 'delete',
			value: '폴더 삭제',
			// icon: DeleteIcon,
			contentColor: 'text-status-negative',
			onClick: () => closeMenu(),
		},
	];

	return (
		<div
			ref={menuRef}
			style={{
				boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.08);',
			}}
			className="text-body-01-normal border-line-solid-neutral absolute top-8 my-2 flex w-40 flex-col gap-1 rounded-lg border bg-white px-3 py-2 font-normal whitespace-nowrap shadow-md"
		>
			{menus.map(({ label, value, contentColor, onClick }) => (
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
	);
}
