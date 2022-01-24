import cx from "classnames";

interface ReachedProps {
	text1: string;
	text2: string;
	ms?: boolean;
}
export default function ReachedItem(props: Partial<ReachedProps>) {
	const { text1, text2, ms } = props;
	const classTitle = cx({
		"me-lg-35": true,
		"ms-lg-35": ms,
	});
	return (
		<div className={classTitle}>
			<p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
				{text1}
			</p>
			<p className="text-lg text-lg-start text-center color-palette-2 m-0">
				{text2}
			</p>
		</div>
	);
}
