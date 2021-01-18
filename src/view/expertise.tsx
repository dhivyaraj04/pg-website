import React from "react";
import { Banner } from "./banner/banner";
import { OnlineYoga } from "./online-yoga/online-yoga";
import { PopularServiceExpertisTemplate } from "./popular-service/popular-service-expertis-template";
import { DownloadApp } from "./download-app/download-app";
import { ConsultantExpertLaw } from "./consultant-exp-law/consultant-exp-law";
import { ConsultantExpertMobileLaw } from "./consultant-exp-law/consultant-exp-law-mobile";
import { PopularExpertisArticles } from "./popular-expertis-articles";
import { OnlineYogaMobile } from "./online-yoga/online-yoga-mobile";
import { PopularServiceMobile } from "./popular-service/popular-service-mobile";
import { ExpertArticlesMobile } from "./expert-articles/expert-articles-mobile";
import { LawyerIconText } from "./lawyer-icon-text/lawyer-icon-text";
import { BaseUrl } from "../url";

interface ExpertisProps {
	expertiseId: any;
}
export function Expertis({ expertiseId }: ExpertisProps) {
	const [consultantExpertLaw, setConsultantExpertLaw] = React.useState([]);
	const [bannerItem, setBannerItem] = React.useState([]);
	const [onlineLawyer, setOnlineLawyer] = React.useState([]);
	const [articles, setArticles] = React.useState([]);
	const [trendingarticles, setTrendingArticles] = React.useState([]);
	const [popularService, setPopularService] = React.useState([]);
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		getExpertisBanner(expertiseId);
		getConsultantExpertItem(expertiseId);
		getExpertisPopularService(expertiseId);
		getExpertisConsultant(expertiseId);
		getExpertisArticles(expertiseId);
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
	async function getExpertisBanner(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_banner/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setBannerItem([data.expertiseBanner]);
	}
	async function getConsultantExpertItem(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_subexpertise/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setConsultantExpertLaw(data.subExpertise);
	}
	async function getExpertisPopularService(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_services/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setPopularService(data.services);
	}
	async function getExpertisConsultant(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_promocode/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setOnlineLawyer([data.promoCode]);
	}
	async function getExpertisArticles(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_articles/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setArticles([data.articles]);
		setTrendingArticles(data.trendingArticles);
	}
	const width = 770;
	return (
		<>
			<Banner BanerItems={bannerItem} />
			{windowSize.width > width ? (
				<ConsultantExpertLaw
					ConsultantExpertLawItems={consultantExpertLaw}
				/>
			) : (
				<ConsultantExpertMobileLaw
					ConsultantExpertLawItems={consultantExpertLaw}
				/>
			)}

			<LawyerIconText />
			{windowSize.width > width ? (
				<PopularServiceExpertisTemplate PopularItems={popularService} />
			) : (
				<PopularServiceMobile PopularItems={popularService} />
			)}
			{windowSize.width > width ? (
				<OnlineYoga OnlineItems={onlineLawyer} />
			) : (
				<OnlineYogaMobile />
			)}

			{windowSize.width > width ? (
				<PopularExpertisArticles
					ExpertArticlesItems={articles}
					TrendingArticlesItems={trendingarticles}
				/>
			) : (
				<ExpertArticlesMobile ExpertArticlesItems={articles} />
			)}

			<DownloadApp />
		</>
	);
}
