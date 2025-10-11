import { useEffect } from 'react';

export default function ModalWrapper({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const originalStyle = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, []);

	return <div className="fixed inset-0 flex items-center justify-center bg-black/30">{children}</div>;
}
