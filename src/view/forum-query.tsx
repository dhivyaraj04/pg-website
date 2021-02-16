import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { QuestionAnswer } from "./question/question-answer";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
import {
	HorizontalLine,
	ImageTag,
	CenterTag
} from "../components/small-component";
import * as Loader from "../img/loader.gif";

interface QueryNameProps {
	queryId: any;
}
export function ForumQuery({ queryId }: QueryNameProps) {
	const [array, setArray] = React.useState([]);

	React.useEffect(() => {
		setArray([]);
		getForumQuery(queryId);
	}, []);

	function getForumQuery(queryId) {
		fetch(`${BaseUrl}/apiV2/forumQueries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 500,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				let list = res.queries.filter(item => item._id === queryId);
				setArray(list);
			});
	}
	return (
		<>
			<HorizontalLine borderTop="1px solid #E0E0E0" />
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						{array.length === 0 ? (
							<CenterTag>
								<ImageTag src={Loader} />
							</CenterTag>
						) : (
							<QuestionAnswer QuestionItems={array} />
						)}
					</Column>
				</Row>
			</Container>
			<Chat />
		</>
	);
}
