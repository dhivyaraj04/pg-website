import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { SpaceTag, Subtext } from "../components/small-component";
import { ExpertArticles } from "./expert-articles/expert-articles";
import { TrendingArticles } from "./trending-articles/trending-articles";
import { Chat } from "./chat/chat";
export type PopularExpertisArticlesProps = {
	ExpertArticlesItems: Array<{}>;
	TrendingArticlesItems: Array<{}>;
};
export function PopularExpertisArticles({
	ExpertArticlesItems,
	TrendingArticlesItems
}: PopularExpertisArticlesProps) {
	console.log(ExpertArticlesItems, "ExpertArticlesItems");
	return (
		<>
			<Container>
				<SpaceTag
					marginLeft="10"
					marginRight="10"
					marginTop="10"
					marginBottom="30"
				>
					<Subtext fontSize="32px" color="#000000" fontWeight="400">
						Popular Expertize Articles
					</Subtext>
				</SpaceTag>
				<Row>
					<Column sm={12} md={8} xs={12}>
						<ExpertArticles
							ExpertArticlesItems={ExpertArticlesItems}
						/>
					</Column>
					<Column sm={12} md={4} xs={12}>
						<TrendingArticles
							TrendingArticlesItems={TrendingArticlesItems}
						/>
					</Column>
				</Row>
			</Container>
			<Chat />
		</>
	);
}
