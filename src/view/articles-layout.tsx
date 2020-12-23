import React from "react";

import { SubNavs } from "../components/navs/subnavs";
import { Footer } from "./footer/footer";
import { TodayArticles } from "./today-articles/today-articles";
import { ExpertArticlesData, TodayArticlesData } from "./data";
import { ExpertArticlesList } from "./expert-articles/expert-articles-list";

export function ArticlesLayout() {
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
	const width = 770;
	return (
		<>
			<SubNavs />
			<TodayArticles TodayArticlesItems={TodayArticlesData} />
			<ExpertArticlesList ExpertArticlesItems={ExpertArticlesData} />
			<Footer />
		</>
	);
}
