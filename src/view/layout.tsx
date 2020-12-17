import React from "react";
import { Banner } from "./banner/banner";
import { Footer } from "./footer/footer";
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
import { ExportArticlesMobile } from "./export-articles/export-articles-mobile";
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
	const width = 770;
	console.log(windowSize.width);
	console.log(width);
	console.log(windowSize.width > width);
	console.log(windowSize.width < width);
	return (
		<>
			<Banner />
			{windowSize.width > width ? (
				<ConsultantExpert />
			) : (
				<ConsultantExpertMobile />
			)}
			{windowSize.width > width ? <OnlineYoga /> : <OnlineYogaMobile />}
			{windowSize.width > width ? (
				<PopularService />
			) : (
				<PopularServiceMobile />
			)}
			{windowSize.width > width ? (
				<FitnessConsultant />
			) : (
				<FitnessConsultantMobile />
			)}
			{windowSize.width > width ? (
				<PopularExpertisArticles />
			) : (
				<ExportArticlesMobile />
			)}
			<MultiConsultant />
			{windowSize.width > width ? (
				<HappyCustomer />
			) : (
				<HappyCustomerMoile />
			)}
			<DownloadApp />
			<Footer />
		</>
	);
}
