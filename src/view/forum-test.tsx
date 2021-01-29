import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Banner } from "./banner/banner";
import { Question } from "./question/question-test";

import { homeBanner } from "./data";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";

interface QueryNameProps {
	queryName: any;
}
export function ForumLayout({ queryName }: QueryNameProps) {
	const [query, setQuery] = React.useState([]);
	const [limt, setLimit] = React.useState(10);
	const [skip, setSkip] = React.useState(0);
	const myRef = React.useRef(null);
	const [scrollTop, setScrollTop] = React.useState(0);
	React.useEffect(() => {
		getForumQuery(queryName);
	}, []);
	function getForumQuery(queryName) {
		fetch(`${BaseUrl}/apiV2/forumQueries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 100,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})

			.then(res => {
				const t = query.concat(res.queries);
				setQuery(res.queries);
			});
	}
	// function onScroll() {
	// 	setSkip(skip + 1);
	// 	const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
	// 	const scrollTops = myRef.current.scrollTop;

	// 	setScrollTop(scrollTops);
	// 	getForumQuery(queryName);
	// }

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
