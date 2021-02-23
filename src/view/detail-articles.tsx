import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { SubNavs } from "../components/navs/subnavs";
import { Subtext, BannerBar2, SpaceTag } from "../components/small-component";
import { RelatedArticles } from "./related-article/related-article";
import { RelatedArticlesMobile } from "./related-article/related-article-mobile";
import { ArticleDetail } from "./article-detail/article-detail";
import { ArticleDetailMobile } from "./article-detail/article-detail-mobile";
import { TrendingArticles } from "./trending-articles/trending-articles";
import { TrendingArticlesData, DetailArticleData } from "./data";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
interface ArticlesDetailsProps {
	articlesId: any;
}
export function DetailArticlesLayout({ articlesId }: ArticlesDetailsProps) {
	const [banner, setBanner] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [subTitle, setSubTitle] = React.useState("");
	const [date, setDate] = React.useState("");
	const [relatedArticles, setRelatedArticles] = React.useState([]);
	const [consultantItem, setConsultantItem] = React.useState({});
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		getArticlesDetails(articlesId);
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
	async function getArticlesDetails(articlesId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/website/article/${articlesId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		setConsultantItem(data.consultant);
		setTitle(data.articleMarkdown);
		setBanner(data.banner.media);
		setSubTitle(data.heading);
		setDate(data.createdAt);
		setRelatedArticles(data.similarArticles);
	}
	return (
		<>
			<SubNavs />
			<Container>
				<BannerBar2 banner={banner} />
				<SpaceTag
					marginTop="30"
					marginBottom="30"
					marginLeft="10"
					marginRight="10"
				>
					<Subtext
						fontSize={windowSize.width > width ? "40px" : "26px"}
						color="#000"
						fontWeight="600"
					>
						{subTitle}
					</Subtext>
				</SpaceTag>
				{windowSize.width > width ? (
					<Row>
						<Column sm={8} md={8} xs={12}>
							<ArticleDetail
								ArticlesDetailsItems={DetailArticleData}
								consultantItem={consultantItem}
								title={title}
								date={date}
							/>

							<RelatedArticles
								RelatedArticlesItems={relatedArticles}
							/>
						</Column>
						<Column sm={4} md={4} xs={12}>
							<TrendingArticles
								TrendingArticlesItems={TrendingArticlesData}
							/>
						</Column>
					</Row>
				) : (
					<Row>
						<Column sm={12} md={12} xs={12}>
							<ArticleDetailMobile
								ArticlesDetailsItems={DetailArticleData}
								consultantItem={consultantItem}
								title={title}
								date={date}
							/>

							<RelatedArticlesMobile
								RelatedArticlesItems={relatedArticles}
							/>
						</Column>
					</Row>
				)}
			</Container>
			<br />
			<Chat />
		</>
	);
}
