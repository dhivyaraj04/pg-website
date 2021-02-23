import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { ExpertArticlesDetails } from "./expert-articles/expert-articles-details";
import { ExpertArticlesDetailsMobile } from "./expert-articles/expert-articles-details-mobile";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
import {
	HorizontalLine,
	ImageTag,
	CenterTag
} from "../components/small-component";
import * as Loader from "../img/loader.gif";

interface ArticleViewMoreProps {
	articlesId: any;
}
export function ArticleViewMore({ articlesId }: ArticleViewMoreProps) {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	const [article, setArticle] = React.useState([]);

	React.useEffect(() => {
		setArticle([]);
		getArticles();
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

	function getArticles() {
		fetch(`${BaseUrl}/apiV2/website/articles`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: articlesId,
				limit: 100,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				console.log(res, "res");
				setArticle(res.articles);
			});
	}
	const width = 770;
	return (
		<>
			<HorizontalLine borderTop="1px solid #E0E0E0" />
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						{article.length === 0 ? (
							<CenterTag>
								<ImageTag src={Loader} />
							</CenterTag>
						) : (
							<>
								{windowSize.width > width ? (
									<ExpertArticlesDetails
										ExpertArticlesItems={article}
										expertiseId={articlesId}
									/>
								) : (
									<ExpertArticlesDetailsMobile
										ExpertArticlesItems={article}
									/>
								)}
							</>
						)}
					</Column>
				</Row>
			</Container>
			<br />
			<br />
			<br />
			<br />
			<Chat />
		</>
	);
}
