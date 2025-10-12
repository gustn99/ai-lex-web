import { CHATBOT_CATEGORIES } from '@/constants/chatbot/categoryOptions';
import ChatInput from './ChatInput';

interface ChatCategorySectionProps {
	selectedCategory: string | null;
	onCategoryClick?: (category: string) => void;
	onSubmit: () => void;
	onSend?: (content: string) => void;
	isFixed: boolean;
}

export default function ChatCategorySection({
	selectedCategory,
	onCategoryClick,
	onSubmit,
	onSend,
	isFixed,
}: ChatCategorySectionProps) {
	return (
		<div
			className={`flex w-full flex-col items-center justify-center ${
				isFixed ? 'mx-auto mt-2.5 max-w-[900px] gap-3' : selectedCategory ? 'mt-4' : 'mt-6'
			}`}
		>
			<div className={`flex flex-wrap gap-1 ${isFixed ? 'w-full px-3' : 'justify-center'}`}>
				{CHATBOT_CATEGORIES.map((category) => {
					const isActive = category === selectedCategory;
					return (
						<button
							key={category}
							onClick={() => onCategoryClick?.(category)}
							className={`text-label-01-normal rounded-lg border px-2.5 py-1.5 font-medium transition-colors ${
								isActive
									? 'bg-cool-neutral-20 text-inverse-label border-transparent'
									: 'border-line-normal-neutral text-label-alternative'
							}`}
						>
							{category}
						</button>
					);
				})}
			</div>

			{selectedCategory && (
				<div className={`${isFixed ? 'w-full' : 'animate-fadeIn mt-6 w-[600px]'}`}>
					<ChatInput
						category={selectedCategory}
						onSubmit={(content) => {
							onSend?.(content);
							onSubmit();
						}}
						isFixed={isFixed}
					/>
				</div>
			)}
		</div>
	);
}
