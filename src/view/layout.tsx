import React from "react";
import { Banner } from "./banner/banner";
import { HappyCustomer } from "./happy-customer/happy-customer";
import { OnlineYoga } from "./online-yoga/online-yoga";
import { PopularService } from "./popular-service/popular-service";
import { MultiConsultant } from "./multi-consultant/multi-consultant";
import { FitnessConsultant } from "./fitness-consultant/fitness-consultant";
import { DownloadApp } from "./download-app/download-app";
import { ConsultantExpert } from "./consultant-exp/consultant-exp";
import { PopularExpertisArticles } from "./popular-expertis-articles";
import { ConsultantExpertMobile } from "./consultant-exp/consultant-exp-mobile";
import { OnlineYogaMobile } from "./online-yoga/online-yoga-mobile";
import { PopularServiceMobile } from "./popular-service/popular-service-mobile";
import { FitnessConsultantMobile } from "./fitness-consultant/fitness-consultant-mobile";
import { HappyCustomerMoile } from "./happy-customer/happy-customer-mobile";
import { ExpertArticlesMobile } from "./expert-articles/expert-articles-mobile";
import { OnlineYogaData, homeBanner } from "./data";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
interface LayoutProps {
	articles?: any;
	expertises?: any;
}
export function Layout({ articles, expertises }: LayoutProps) {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	const [article, setArticle] = React.useState([]);
	const [trendingArticles, setTrendingArticle] = React.useState([]);
	const [expertise, setExpertise] = React.useState([]);
	const [services, setServices] = React.useState([]);
	React.useEffect(() => {
		getArticles(articles);
		getExpertis(expertises);
		getSerives();
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

	function getArticles(articles) {
		fetch(`${BaseUrl}/apiV2/website/${articles}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 2,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})

			.then(res => {
				console.log(res.articles, "test");
				setArticle(res.articles);
				setTrendingArticle(res.trendingArticles);
			});
	}

	function getSerives() {
		fetch(`${BaseUrl}/apiV2/website/services`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 2,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})

			.then(res => {
				setServices(res.services);
			});
	}
	async function getExpertis(expertises) {
		const res = await fetch(`${BaseUrl}/apiV2/${expertises}`, {
			method: "GET"
		});
		const data = await res.json();
		setExpertise(data.expertises);
	}

	const width = 770;

	return (
		<>
			<Banner BanerItems={homeBanner} />
			{windowSize.width > width ? (
				<ConsultantExpert ConsultantExpertItems={expertise} />
			) : (
				<ConsultantExpertMobile ConsultantExpertItems={expertise} />
			)}
			{windowSize.width > width ? (
				<OnlineYoga OnlineItems={OnlineYogaData} />
			) : (
				<OnlineYogaMobile />
			)}
			{windowSize.width > width ? (
				<PopularService PopularItems={services} />
			) : (
				<PopularServiceMobile PopularItems={services} />
			)}
			{windowSize.width > width ? (
				<FitnessConsultant />
			) : (
				<FitnessConsultantMobile />
			)}
			{windowSize.width > width ? (
				<PopularExpertisArticles
					ExpertArticlesItems={article}
					TrendingArticlesItems={trendingArticles}
				/>
			) : (
				<ExpertArticlesMobile ExpertArticlesItems={article} />
			)}
			<MultiConsultant />
			{windowSize.width > width ? (
				<HappyCustomer />
			) : (
				<HappyCustomerMoile />
			)}
			<DownloadApp />
			<Chat />
		</>
	);
}
