import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";

import {
	Subtext,
	FlexTag,
	ImageTag,
	SpaceTag,
	CardBlock,
	LoadMorebutton,
	ImageWidth
} from "../../components/small-component";

export type RelatedArticlesItem = {
	_id: string;
	media: string;
	articleTitle: string;

	consultantImage: string;
	consultantName: string;
	expertise: string;
};
export type RelatedArticlesProps = {
	RelatedArticlesItems?: RelatedArticlesItem[];
};
export function RelatedArticles({
	RelatedArticlesItems
}: RelatedArticlesProps) {
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(2);
	const nextSlide = () => {
		setCurrentSlideIdx(currentSlideIdx + 2);
	};

	const test = RelatedArticlesItems.slice(0, currentSlideIdx);
	const imageSourcesToDisplay =
		RelatedArticlesItems.length !== currentSlideIdx
			? [...test]
			: RelatedArticlesItems;

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
				{imageSourcesToDisplay.map((list, i) => (
					<Column sm={12} md={6} xs={12}>
						<CardBlock border="1px solid rgb(232, 238, 243)">
							<ImageWidth src={list.media} />

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
									{list.articleTitle}
								</Subtext>

								<FlexTag>
									<SpaceTag marginLeft="5" marginTop="10">
										<ImageTag
											src={list.consultantImage}
											width="25"
											height="25"
										/>
									</SpaceTag>
									<SpaceTag marginLeft="5" marginTop="10">
										<Subtext
											fontSize="10px"
											color="#010101"
										>
											{list.consultantName}
										</Subtext>
										<Subtext
											fontSize="10px"
											color="#979797"
										>
											{list.expertise}
										</Subtext>
									</SpaceTag>
								</FlexTag>
							</SpaceTag>
						</CardBlock>
					</Column>
				))}

				<Column sm={12} md={12} xs={12}>
					<SpaceTag marginTop="20" marginBottom="80">
						<LoadMorebutton
							width="-webkit-fill-available"
							height="45px"
							background="none"
							border="1px solid #029532"
							color="#029532"
							onClick={nextSlide}
						>
							LOAD MORE
						</LoadMorebutton>
					</SpaceTag>
				</Column>
			</Row>
		</Container>
	);
}
