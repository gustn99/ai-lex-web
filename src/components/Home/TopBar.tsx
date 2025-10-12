import { useLocation } from 'react-router-dom';

import PlusIcon from '@/assets/svgs/common/plus.svg?react';
import LogoIcon from '@/assets/svgs/home/logo.svg?react';

import { Button } from '../common/Button';

export default function TopBar() {
	const location = useLocation();
	const isTrueHome = location.pathname === '/';

	return (
		<div className="border-line-normal-neutral sticky flex h-15 w-full items-center border bg-white/10 px-6">
			<div className="mx-auto flex w-full max-w-[1100px] items-center justify-between">
				<LogoIcon className="my-1.5" />
				<div className="flex items-center gap-4">
					<p>user1234</p>
					{!isTrueHome && (
						<Button appearance="solid" size="medium" LeadingIcon={PlusIcon}>
							서면 생성하기
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
