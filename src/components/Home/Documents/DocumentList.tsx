import DocumentItem from './DocumentItem';

const documents = [
	{
		href: '/',
		party: 'plaintiff',
		description: 'AI 분석 완료',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
		updatedAt: '2025.08.10',
	},
	{
		href: '/',
		party: 'plaintiff',
		description: 'AI 분석 완료',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
	},
	{
		href: '/',
		party: 'defendant',
		description: 'AI 분석 완료',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
	},
	{
		href: '/',
		party: 'defendant',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
	},
	{
		href: '/',
		party: 'plaintiff',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
	},
	{
		href: '/',
		party: 'plaintiff',
		title: '임대차 보증금 반환',
		caseNumber: '2025가단12345',
		createdAt: '2025.08.08',
	},
];

export default function DocumentList({ title }: { title: string }) {
	return (
		<section className="flex flex-col gap-3">
			<h3 className="text-body-01-normal font-semibold">{title}</h3>
			<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
				{documents.map((d) => (
					<DocumentItem key={d.caseNumber} {...d} />
				))}
			</div>
		</section>
	);
}
