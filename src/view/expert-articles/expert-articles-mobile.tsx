import React from "react";
import Link from "next/link";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ViewMoreButton,
	ResposiveImag
} from "../../components/small-component";

export type ExpertArticlesItem = {
	_id?: string;
	expertise?: string;
	articles?: Array<{
		_id: string;
		media?: any;
		articleTitle?: string;
		expertise?: string;
		consultantName?: string;
		consultantImage?: string;
		description?: string;
	}>;
};
export type ExpertArticlesItemProps = {
	ExpertArticlesItems?: ExpertArticlesItem[];
};
export function ExpertArticlesMobile({
	ExpertArticlesItems
}: ExpertArticlesItemProps) {
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(2);
	const nextSlide = () => {
		setCurrentSlideIdx(currentSlideIdx + 2);
	};

	let data = [];
	ExpertArticlesItems.map((item, i) => {
		data = data.concat({
			title: item.expertise,
			article: getListView(item.articles)
		});
	});
	function getListView(art: any) {
		const test = art.slice(0, currentSlideIdx);
		const imageSourcesToDisplay =
			art.length !== currentSlideIdx ? [...test] : art;
		return imageSourcesToDisplay;
	}
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
				<SpaceTag marginTop="10" marginBottom="10">
					{data.map((item, i) => (
						<>
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginLeft="15"
								marginRight="15"
							>
								<Subtext
									fontSize="24px"
									color="#999"
									fontWeight="600"
								>
									{item.expertise}
								</Subtext>
							</SpaceTag>

							{item.article.map((list, i) => (
								<Link href={`/article-details/${list._id}`}>
									<Row>
										<Column sm={12} md={12} xs={12}>
											<FlexTag>
												<SpaceTag marginTop="5">
													<ResposiveImag
														src={list.media}
													/>
												</SpaceTag>
												<Card
													width="-webkit-fill-available"
													border="1"
													borderRadius="5"
												>
													<SpaceTag>
														<Subtext
															fontSize="12px"
															color="#282828"
															letterSpacing="0.56px"
														>
															{list.articleTitle}
														</Subtext>
														<SpaceTag
															marginBottom="5"
															marginTop="5"
														></SpaceTag>
														<FlexTag>
															<SpaceTag
																marginLeft="0"
																marginTop="10"
															>
																<Subtext
																	fontSize="12px"
																	color="#010101"
																	letterSpacing="0.56px"
																>
																	{
																		list.consultantName
																	}
																</Subtext>
																<Subtext
																	fontSize="10px"
																	color="#979797"
																>
																	{
																		list.expertise
																	}
																</Subtext>
															</SpaceTag>
														</FlexTag>
													</SpaceTag>
												</Card>
											</FlexTag>
										</Column>
									</Row>
								</Link>
							))}
							<FlexTag justifyContent="flex-end">
								<ViewMoreButton
									onClick={nextSlide}
									type="button"
								>
									View More
								</ViewMoreButton>
							</FlexTag>
						</>
					))}
				</SpaceTag>
			</Container>
		</>
	);
}
