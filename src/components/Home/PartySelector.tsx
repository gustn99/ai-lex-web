import clsx from 'clsx';

import DefendantIcon from '@/assets/svgs/home/defendant.svg?react';
import PlaintiffIcon from '@/assets/svgs/home/plaintiff.svg?react';

import { Party } from '@/utils/types';

interface PartySelectorProps {
	selectedParty: Party | null;
	setSelectedParty: React.Dispatch<React.SetStateAction<Party | null>>;
}

export default function PartySelector({ selectedParty, setSelectedParty }: PartySelectorProps) {
	const party = [
		{
			label: 'plaintiff',
			value: '원고',
			icon: PlaintiffIcon,
		},
		{
			label: 'defendant',
			value: '피고',
			icon: DefendantIcon,
		},
	];

	return (
		<div className="flex w-full flex-col gap-2">
			<span className="text-label-01-normal text-label-neutral font-semibold">
				입장 선택 <span className="text-status-negative font-medium">*</span>
			</span>

			<div className="flex gap-3">
				{party.map(({ label, value, icon: Icon }) => {
					const isSelected = label === selectedParty;
					return (
						<button
							key={label}
							onClick={() => setSelectedParty(label as Party)}
							className={clsx(
								'text-body-01-normal flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border py-6',
								isSelected ? 'border-primary-normal' : 'border-line-normal-neutral',
							)}
						>
							<div
								className={clsx('flex h-10 w-[50px] items-center justify-center', label === 'plaintiff' && 'pl-2.5')}
							>
								<Icon />
							</div>
							{value}
						</button>
					);
				})}
			</div>
		</div>
	);
}
