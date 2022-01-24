import HorizontalLine from "../../atoms/HorizontalLine";
import VerticalLine from "../../atoms/VerticalLine";
import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
	return (
		<section className="reached pt-50 pb-50">
			<div className="container-fluid">
				<div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
					<ReachedItem text1="12M+" text2="Games Available" />
					<VerticalLine />
					<HorizontalLine />
					<ReachedItem text1="12.500" text2="Games Available" ms />
					<HorizontalLine />
					<VerticalLine />
					<ReachedItem text1="99,9%" text2="Happy Players" ms />
					<HorizontalLine />
					<VerticalLine />
					<ReachedItem text1="4.7" text2="Rating Worldwide" ms />
				</div>
			</div>
		</section>
	);
}
