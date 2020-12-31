import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Footer } from "./footer/footer";
import { SubNavs } from "../components/navs/subnavs";
import { Subtext, BannerBar2, SpaceTag } from "../components/small-component";
import { RelatedArticles } from "./related-article/related-article";
import { RelatedArticlesMobile } from "./related-article/related-article-mobile";
import { ArticleDetail } from "./article-detail/article-detail";
import { ArticleDetailMobile } from "./article-detail/article-detail-mobile";
import { TrendingArticles } from "./trending-articles/trending-articles";
import {
	TrendingArticlesData,
	DetailArticleData,
	RelatedArticlesData
} from "./data";

export function DetailArticlesLayout() {
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
			<Container>
				<BannerBar2 />
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
						Learn Yoga techniques online to become proactive in your
						daily life
					</Subtext>
				</SpaceTag>
				{windowSize.width > width ? (
					<Row>
						<Column sm={8} md={8} xs={12}>
							<ArticleDetail
								ArticlesDetailsItems={DetailArticleData}
							/>

							<RelatedArticles
								RelatedArticlesItems={RelatedArticlesData}
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
							/>

							<RelatedArticlesMobile
								RelatedArticlesItems={RelatedArticlesData}
							/>
						</Column>
					</Row>
				)}
			</Container>
			<Footer />
		</>
	);
}
