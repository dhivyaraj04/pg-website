import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { SpaceTag, Subtext } from "../components/small-component";
import { ExportArticles } from "./export-articles/export-articles";
import { TrendingArticles } from "./trending-articles/trending-articles";

export function PopularExpertisArticles() {
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
					<Column sm={12} md={8}>
						<ExportArticles />
					</Column>
					<Column sm={12} md={4}>
						<TrendingArticles />
					</Column>
				</Row>
			</Container>
		</>
	);
}
