export default function BackgroundImage() {
	return (
		<div className="fixed inset-0 -z-10 bg-[rgba(211,211,211,0.2)]">
			<div className="absolute inset-0 shadow-[inset_0_0_150px_30px_rgba(250,253,255,0.9)]"></div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1740 1324"
				fill="none"
				className="h-full w-full"
				preserveAspectRatio="xMidYMid slice"
			>
				<g clip-path="url(#clip0_282_17606)" filter="url(#filter0_fg_282_17606)">
					<ellipse
						opacity="0.3"
						cx="1234.15"
						cy="378.396"
						rx="721.277"
						ry="248.287"
						transform="rotate(1.40486 1234.15 378.396)"
						fill="#FF7BDE"
					/>
					<path
						opacity="0.8"
						d="M2178.89 1185.22C2081.48 1601.37 1398.11 1797.25 652.553 1622.73C-93.0059 1448.21 -618.433 969.376 -521.02 553.225C-699.691 130.86 195.729 -539.261 1086.05 353.733C1831.61 528.253 2276.3 769.066 2178.89 1185.22Z"
						fill="#B9DAFF"
					/>
					<path
						opacity="0.8"
						d="M1104 384.22C1104 519.132 959.454 628.5 781.148 628.5C602.842 628.5 458.297 519.132 458.297 384.22C395.37 267.26 562.826 -3.12144 812.088 207.286C990.394 207.286 1104 249.308 1104 384.22Z"
						fill="#87BFFF"
					/>
					<ellipse
						opacity="0.3"
						cx="933.408"
						cy="296.89"
						rx="412.253"
						ry="275.165"
						transform="rotate(-13.9425 933.408 296.89)"
						fill="#BBFCFF"
					/>
				</g>
				<defs>
					<filter
						id="filter0_fg_282_17606"
						x="0"
						y="0"
						width="1740"
						height="1324"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_282_17606" />
						<feTurbulence type="fractalNoise" baseFrequency="1 1" numOctaves="3" seed="5545" />
						<feDisplacementMap
							in="effect1_foregroundBlur_282_17606"
							scale="200"
							xChannelSelector="R"
							yChannelSelector="G"
							result="displacedImage"
							width="100%"
							height="100%"
						/>
						<feMerge result="effect2_texture_282_17606">
							<feMergeNode in="displacedImage" />
						</feMerge>
					</filter>
					<clipPath id="clip0_282_17606">
						<rect width="1740" height="1324" fill="white" transform="translate(0 0.5)" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
