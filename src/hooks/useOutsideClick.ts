import { useEffect } from 'react';

interface UseOutsideClickParams<T extends HTMLElement> {
	ref: React.RefObject<T | null>;
	onClick: () => void;
	eventType?: 'mousedown' | 'click';
}

export default function useOutsideClick<T extends HTMLElement>({
	ref,
	onClick,
	eventType = 'click',
}: UseOutsideClickParams<T>) {
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				onClick();
			}
		};

		document.addEventListener(eventType, handleOutsideClick);
		return () => {
			document.removeEventListener(eventType, handleOutsideClick);
		};
	}, [ref, eventType]);
}
