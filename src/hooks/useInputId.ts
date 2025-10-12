import { useId } from 'react';

export default function useInputId(label: string) {
	const reactId = useId();
	const inputId = label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}-${reactId}` : `input-${reactId}`;

	return inputId;
}
