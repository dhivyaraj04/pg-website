import React from "react";

import { Banner } from "./banner/banner";
import { BookVisit } from "./book-visit/book-visit";
import { Description } from "./description/description";
import { Amenities } from "./amenities/amenities";
import { AmenitiesMobile } from "./amenities/amenities-mobile";
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
		document
			.getElementById("BookVisit")
			.scrollIntoView({ behavior: "smooth" });
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

			{windowSize.width > width ? <Amenities /> : <AmenitiesMobile />}
			{windowSize.width > width ? (
				<BookVisit id="BookVisit" />
			) : (
				<BookVisitMobile id="BookVisit" />
			)}
		</>
	);
}
