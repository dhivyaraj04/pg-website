import React from "react";
// import { ScrollingProvider, useScrollSection } from "react-scroll-section";
import { Banner } from "./banner/banner";
import { BookVisit } from "./book-visit/book-visit";
import { Description } from "./description/description";
import { Amenities } from "./amenities/amenities";
import { BannerMobile } from "./banner/banner-mobile";
import { BookVisitMobile } from "./book-visit/book-visit-mobile";
import { DescriptionMobile } from "./description/description-mobile";

export function Layout() {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	function homeSection() {
		// useScrollSection("BookVisit");
	}
	const width = 770;
	return (
		<>
			{windowSize.width > width ? (
				<Banner onClickEvent={homeSection} />
			) : (
				<BannerMobile onClickEvent={homeSection} />
			)}

			{windowSize.width > width ? <Description /> : <DescriptionMobile />}
			<Amenities />
			{windowSize.width > width ? (
				<BookVisit id="BookVisit" />
			) : (
				<BookVisitMobile id="BookVisit" />
			)}
		</>
	);
}
