import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Banner } from "./banner/banner";
import { QuestionBlock } from "./question-block/question-block";
import { TrendingArticlesData, DetailArticleData, homeBanner } from "./data";
import { BaseUrl } from "../url";

interface QueryIdProps {
	queryId: any;
}
export function ForumQuery({ queryId }: QueryIdProps) {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		getForumQuery(queryId);
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
	async function getForumQuery(queryId) {
		const res = await fetch(`${BaseUrl}/apiV2/getAnswersForum/${queryId}`, {
			method: "GET"
		});
		const data = await res.json();
		console.log(data);
	}
	return (
		<>
			<Banner BanerItems={homeBanner} />
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<QuestionBlock />
					</Column>
				</Row>
			</Container>
		</>
	);
}
