import React from "react";
import { Banner } from "./banner/banner";
import { Footer } from "./footer/footer";
import { OnlineYoga } from "./online-yoga/online-yoga";
import { PopularService } from "./popular-service/popular-service";
import { DownloadApp } from "./download-app/download-app";
import { ConsultantExpertLaw } from "./consultant-exp-law/consultant-exp-law";
import { PopularExpertisArticles } from "./popular-expertis-articles";
import { OnlineYogaMobile } from "./online-yoga/online-yoga-mobile";
import { PopularServiceMobile } from "./popular-service/popular-service-mobile";
import { ExpertArticlesMobile } from "./expert-articles/expert-articles-mobile";
import { LawyerIconText } from "./lawyer-icon-text/lawyer-icon-text";
import {
	PopularLawyerServiceData,
	exportArticlesLawyerData,
	TrendingArticlesLawyerData
} from "./data";
const data = [
	{
		title: "Get 20% Off on your Online Lawyer Consultants",
		usecode: "PROJUSTICE"
	}
];
export function Expertis() {
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
			<Banner />
			<ConsultantExpertLaw />
			<LawyerIconText />
			{windowSize.width > width ? (
				<PopularService PopularItems={PopularLawyerServiceData} />
			) : (
				<PopularServiceMobile />
			)}
			{windowSize.width > width ? (
				<OnlineYoga ConsultantItems={data} />
			) : (
				<OnlineYogaMobile />
			)}

			{windowSize.width > width ? (
				<PopularExpertisArticles
					ExpertArticlesItems={exportArticlesLawyerData}
					TrendingArticlesItems={TrendingArticlesLawyerData}
				/>
			) : (
				<ExpertArticlesMobile />
			)}

			<DownloadApp />
			<Footer />
		</>
	);
}
