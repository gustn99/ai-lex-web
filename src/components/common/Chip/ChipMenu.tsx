import ContextMenu from '@/components/common/ContextMenu';
import DeleteIcon from '@/assets/svgs/common/delete.svg?react';
import EditIcon from '@/assets/svgs/chip/edit.svg?react';

interface ChipMenuProps {
	setIsMenuOpen: (state: boolean) => void;
	setIsEditing: (state: boolean) => void;
}

export default function ChipMenu({ setIsMenuOpen, setIsEditing }: ChipMenuProps) {
	const handleClose = () => setIsMenuOpen(false);

	const items = [
		{
			key: 'edit',
			label: '폴더 이름 변경',
			icon: EditIcon,
			color: 'text-label-normal',
			hasDivider: true,
			onClick: () => setIsEditing(true),
		},
		{
			key: 'delete',
			label: '폴더 삭제',
			icon: DeleteIcon,
			color: 'text-status-negative',
			onClick: () => console.log('폴더 삭제'),
		},
	];

	return <ContextMenu items={items} onClose={handleClose} isAbsolute />;
}
