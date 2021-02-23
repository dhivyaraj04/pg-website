import React from "react";
import { SubNavs } from "../components/navs/subnavs";
import { TodayArticles } from "./today-articles/today-articles";
import { ExpertArticlesData, TodayArticlesData } from "./data";
import { ExpertArticlesList } from "./expert-articles/expert-articles-list";
import { ExpertArticlesListMobile } from "./expert-articles/expert-articles-list-mobile";
import { TodayArticlesMobile } from "./today-articles/today-articles-mobile";
import { Chat } from "./chat/chat";
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
				<ExpertArticlesListMobile
					ExpertArticlesItems={ExpertArticlesData}
				/>
			)}
			<br />
			<Chat />
		</>
	);
}
