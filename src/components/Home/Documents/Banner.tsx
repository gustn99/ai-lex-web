import JusticeScalesIcon from '@/assets/svgs/home/justice-scales.svg?react';

export default function Banner() {
	return (
		<div className="relative flex w-full flex-col items-center gap-2 overflow-hidden rounded-2xl bg-[url('/Home/banner-background.png')] py-11">
			<p className="text-title-03 relative z-5 font-bold">복잡한 법원 서류, 1분 안에 분석</p>
			<p className="text-headline-01 relative z-5">AI와 함께 더 빠르고 정확하게 준비하세요.</p>
			<JusticeScalesIcon className="absolute top-3.5 left-2/3" />
		</div>
	);
}
