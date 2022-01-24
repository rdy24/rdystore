interface StepItemProps {
	icon: "icon" | "icon-1" | "icon-2";
	title: string;
	desc: string;
}

export default function StepItem(props: StepItemProps) {
	const { icon, title, desc } = props;
	return (
		<div className="col-lg-3">
			<div className="card feature-card border-0">
				<img
					src={`/icon/${icon}.png`}
					width="80"
					height="80"
					className="mb-30"
					alt="icon"
				/>
				<p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
				<p className="text-lg color-palette-1 mb-0">{desc}</p>
			</div>
		</div>
	);
}
