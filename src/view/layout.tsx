import React from "react";
// import { ScrollingProvider, useScrollSection } from "react-scroll-section";
import { Banner } from "./banner/banner";
import { BookVisit } from "./book-visit/book-visit";
import { Description } from "./description/description";
import { Amenities } from "./amenities/amenities";
interface LayoutProps {
	articles?: any;
	expertises?: any;
}
export function Layout({ articles, expertises }: LayoutProps) {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});

	function homeSection() {
		// useScrollSection("BookVisit");
	}
	return (
		<>
			<Banner onClickEvent={homeSection} />
			<Description />
			<Amenities />
			<BookVisit id="BookVisit" />
		</>
	);
}
