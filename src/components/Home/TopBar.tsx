import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import PlusIcon from '@/assets/svgs/common/plus.svg?react';
import LogoIcon from '@/assets/svgs/home/logo.svg?react';

import { Button } from '../common/Button';

import FileUploaderModal from './FileUploaderModal';

export default function TopBar() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const location = useLocation();
	const isTrueHome = location.pathname === '/';

	return (
		<>
			<div className="border-line-normal-neutral sticky flex h-15 w-full items-center border bg-white/10">
				<div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6">
					<LogoIcon className="my-1.5" />
					<div className="flex items-center gap-4">
						<p>user1234</p>
						{!isTrueHome && (
							<Button onClick={() => setIsModalOpen(true)} appearance="solid" size="medium" LeadingIcon={PlusIcon}>
								서면 생성하기
							</Button>
						)}
					</div>
				</div>
			</div>

			{isModalOpen && <FileUploaderModal onClose={() => setIsModalOpen(false)} />}
		</>
	);
}
