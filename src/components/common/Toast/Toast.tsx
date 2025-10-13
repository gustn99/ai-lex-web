interface ToastProps {
	message: string;
}

export default function Toast({ message }: ToastProps) {
	return (
		<div className="bg-label-neutral text-label-01-normal fixed bottom-10 left-1/2 z-[100] flex w-[335px] -translate-x-1/2 transform items-center gap-1 rounded-lg px-3 py-2 font-semibold text-white">
			<div className="px-0.5 py-1.25">{message}</div>
		</div>
	);
}
