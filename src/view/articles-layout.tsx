import React from "react";
import { SubNavs } from "../components/navs/subnavs";
import { TodayArticles } from "./today-articles/today-articles";
import { ExpertArticlesData, TodayArticlesData } from "./data";
import { ExpertArticlesList } from "./expert-articles/expert-articles-list";
import { ExpertArticlesMobile } from "./expert-articles/expert-articles-mobile";
import { TodayArticlesMobile } from "./today-articles/today-articles-mobile";

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
			{windowSize.width > width ? (
				<TodayArticles TodayArticlesItems={TodayArticlesData} />
			) : (
				<TodayArticlesMobile TodayArticlesItems={TodayArticlesData} />
			)}
			{windowSize.width > width ? (
				<ExpertArticlesList ExpertArticlesItems={ExpertArticlesData} />
			) : (
				<ExpertArticlesMobile
					ExpertArticlesItems={ExpertArticlesData}
				/>
			)}
		</>
	);
}
