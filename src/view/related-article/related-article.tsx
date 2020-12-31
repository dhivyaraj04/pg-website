import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";

import {
	Subtext,
	FlexTag,
	ImageTag,
	SpaceTag,
	CardBlock,
	LoadMorebutton
} from "../../components/small-component";

export type RelatedArticlesItem = {
	id: string;
	image: string;
	title: string;
	consultant: {
		id: string;
		consultantImage: string;
		consultantName: string;
		expertise: string;
	};
};
export type RelatedArticlesProps = {
	RelatedArticlesItems?: RelatedArticlesItem[];
};
export function RelatedArticles({
	RelatedArticlesItems
}: RelatedArticlesProps) {
	return (
		<Container>
			<SpaceTag marginTop="40" marginBottom="20">
				<Subtext
					fontSize="30px"
					color="rgba(0, 0, 0, 0.25);"
					fontWeight="600"
				>
					Related Articles
				</Subtext>
			</SpaceTag>
			<Row>
				{RelatedArticlesItems.map((list, i) => (
					<Column sm={12} md={6} xs={12}>
						<CardBlock>
							<ImageTag
								src={list.image}
								width="-webkit-fill-available"
							/>
							<SpaceTag
								marginLeft="6"
								marginTop="4"
								marginRight="6"
								marginBottom="4"
							>
								<Subtext
									fontSize="14px"
									color="#282828"
									letterSpacing="0.56px"
								>
									{list.title}
								</Subtext>

								<FlexTag>
									<SpaceTag marginLeft="5" marginTop="10">
										<ImageTag
											src={
												list.consultant.consultantImage
											}
											width="25"
											height="25"
										/>
									</SpaceTag>
									<SpaceTag marginLeft="5" marginTop="10">
										<Subtext
											fontSize="10px"
											color="#010101"
										>
											{list.consultant.consultantName}
										</Subtext>
										<Subtext
											fontSize="10px"
											color="#979797"
										>
											{list.consultant.expertise}
										</Subtext>
									</SpaceTag>
								</FlexTag>
							</SpaceTag>
						</CardBlock>
					</Column>
				))}
				<Column sm={12} md={12} xs={12}>
					<SpaceTag marginTop="20" marginBottom="20">
						<LoadMorebutton>LOAD MORE</LoadMorebutton>
					</SpaceTag>
				</Column>
			</Row>
		</Container>
	);
}
