import ContentBadge from '@/components/common/ContentBadge';

interface DocumentItemProps {
	href: string;
	party: string;
	description?: string;
	title: string;
	caseNumber: string;
	createdAt?: string;
	updatedAt?: string;
}

export default function DocumentItem({
	href,
	party,
	description,
	title,
	caseNumber,
	createdAt,
	updatedAt,
}: DocumentItemProps) {
	const isPlaintiff = party === 'plaintiff';
	const partyContent = isPlaintiff ? '원고측 입장' : '피고측 입장';
	const dateContent = updatedAt ? `${updatedAt} 업데이트` : `${createdAt} 생성`;

	return (
		<a href={href} className="border-line-normal-neutral flex flex-col rounded-xl border p-3">
			<div className="mb-2 flex justify-between">
				<ContentBadge appearance="solid" color={isPlaintiff ? 'red' : 'blue'} className="my-0.5">
					{partyContent}
				</ContentBadge>
				{description && <p className="text-label-02 text-primary-normal font-semibold">{description}</p>}
			</div>

			<div className="mb-4 flex items-center gap-1">
				<span className="text-body-01-normal truncate font-semibold">{title}</span>
				<div className="bg-line-normal-normal h-3 w-px" />
				<span className="text-label-01-normal text-label-neutral truncate">{caseNumber}</span>
			</div>

			<div className="text-label-02 text-label-alternative">{dateContent}</div>
		</a>
	);
}
