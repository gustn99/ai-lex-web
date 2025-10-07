import Button from '@/components/common/Button';

export default function Home() {
	return (
		<div className="text-accent-background-cyan text-2xl font-bold">
			Home
			<Button appearance="solid" leadingIcon="/favicon.svg" trailingIcon="/favicon.svg" iconOnly loading />
			<Button appearance="solid" loading>
				solid
			</Button>
			<Button appearance="solid" variant="secondary" disabled>
				solid secondary
			</Button>
			<Button appearance="solid" variant="secondary" loading>
				solid secondary
			</Button>
			<Button appearance="solid" variant="assistive" disabled>
				solid assistive
			</Button>
			<Button appearance="solid" fullWidth>
				solid fullwidth
			</Button>
			<Button appearance="outlined">outlined</Button>
			<Button appearance="outlined" variant="secondary">
				outlined secondary
			</Button>
			<Button appearance="outlined" variant="assistive">
				outlined assistive
			</Button>
			<Button appearance="outlined" variant="assistive" loading>
				outlined assistive
			</Button>
			<Button appearance="outlined" size="small" leadingIcon="/favicon.svg" trailingIcon="/favicon.svg">
				outlined fullwidth
			</Button>
			<Button appearance="outlined" size="small" loading>
				outlined fullwidth
			</Button>
		</div>
	);
}
