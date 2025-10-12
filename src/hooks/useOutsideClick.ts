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
			if (ref?.current && !ref?.current.contains(e.target as Node)) {
				onClick();
				console.log('outside click');
			}
		};

		// 다음 tick에 이벤트 등록
		const id = setTimeout(() => {
			document.addEventListener(eventType, handleOutsideClick);
		}, 0);

		return () => {
			clearTimeout(id);
			document.removeEventListener(eventType, handleOutsideClick);
		};
	}, [ref, eventType]);
}
