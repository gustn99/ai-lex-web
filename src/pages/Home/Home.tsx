import Button from '@/components/common/Button';
import Icon from '@/assets/favicon.svg?react';

export default function Home() {
	return (
		<div className="space-y-4">
			<div className="flex flex-col">
				solid
				<Button appearance="solid" size="small" LeadingIcon={Icon} iconOnly />
				<Button appearance="solid" LeadingIcon={Icon}>
					solid
				</Button>
				<Button appearance="solid" variant="secondary">
					solid secondary
				</Button>
				<Button appearance="solid" variant="secondary" loading>
					solid secondary
				</Button>
				<Button appearance="solid" variant="assistive">
					solid assistive
				</Button>
				<Button appearance="solid" fullWidth>
					solid fullwidth
				</Button>
			</div>

			<div className="flex flex-col">
				outlined
				<Button appearance="outlined" TrailingIcon={Icon}>
					outlined
				</Button>
				<Button appearance="outlined" variant="secondary">
					outlined secondary
				</Button>
				<Button appearance="outlined" variant="assistive">
					outlined assistive
				</Button>
				<Button appearance="outlined" variant="assistive" disabled>
					outlined assistive
				</Button>
				<Button
					appearance="outlined"
					variant="assistive"
					contentColor="text-primary-normal"
					backgroundColor="bg-fill-normal"
					disabled
				>
					outlined custom
				</Button>
				<Button appearance="outlined" fullWidth>
					outlined fullwidth
				</Button>
			</div>
		</div>
	);
}
