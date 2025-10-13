import { useRef } from 'react';

import clsx from 'clsx';

import useOutsideClick from '@/hooks/useOutsideClick';

export interface ContextMenuItem {
	key: string;
	label: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	onClick: () => void;
	color?: string;
	hasDivider?: boolean;
}

interface ContextMenuProps {
	items: ContextMenuItem[];
	onClose: () => void;
	isAbsolute?: boolean;
	className?: string;
}

export default function ContextMenu({ items, onClose, isAbsolute = false, className }: ContextMenuProps) {
	const menuRef = useRef<HTMLDivElement | null>(null);
	useOutsideClick({ ref: menuRef, onClick: onClose, eventType: 'mousedown' });

	return (
		<div
			ref={menuRef}
			onClick={(e) => e.stopPropagation()}
			style={{
				boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.08)',
			}}
			className={clsx(
				'border-line-solid-neutral text-body-01-normal z-[100] my-2 flex w-40 flex-col gap-1 rounded-lg border bg-white px-3 py-2 font-normal',
				isAbsolute && 'absolute top-8',
				className,
			)}
		>
			{items.map(({ key, label, icon: Icon, color, hasDivider, onClick }) => (
				<button
					key={key}
					onClick={() => {
						onClick();
						onClose();
					}}
					className={clsx(
						'flex items-center gap-2 py-2 text-left transition-colors',
						color ?? 'text-label-normal',
						hasDivider && 'border-line-normal-alternative border-b',
					)}
				>
					{Icon && <Icon />}
					<span>{label}</span>
				</button>
			))}
		</div>
	);
}
