import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Banner } from "./banner/banner";
import { Question } from "./question/question";

import { TrendingArticlesData, DetailArticleData, homeBanner } from "./data";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";

interface QueryNameProps {
	queryName: any;
}
export function ForumLayout({ queryName }: QueryNameProps) {
	const [query, setQuery] = React.useState([]);
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		getForumQuery(queryName);
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
	function getForumQuery(queryName) {
		fetch(`${BaseUrl}/apiV2/forumQueries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 10,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})

			.then(res => {
				setQuery(res.queries);
			});
	}
	return (
		<>
			<Banner BanerItems={homeBanner} />
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<Question QuestionItems={query} />
					</Column>
				</Row>
			</Container>
			<Chat />
		</>
	);
}