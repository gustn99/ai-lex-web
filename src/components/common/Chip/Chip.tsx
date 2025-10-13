import { useState } from 'react';

import ChipButton from './ChipButton';
import ChipInput from './ChipInput';
import { Chip as ChipType } from './ChipList';
import ChipMenu from './ChipMenu';

export interface ChipProps {
	chip: ChipType;
	isActive: boolean;
	isAll: boolean;
	isEditable?: boolean;
	onSelect: (chip: string) => void;
	onDeselect: (e: React.MouseEvent, chip: string) => void;
	isSingleSelect?: boolean;
}

export default function Chip(props: ChipProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className="relative">
			{isEditing ? (
				<ChipInput value={props.chip.value} setIsEditing={setIsEditing} />
			) : (
				<ChipButton {...props} setIsMenuOpen={setIsMenuOpen} />
			)}

			{isMenuOpen && <ChipMenu setIsMenuOpen={setIsMenuOpen} setIsEditing={setIsEditing} />}
		</div>
	);
}
