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
	ImageTag,
	CursorTag
} from "../../components/small-component";

export type ExpertArticlesItem = {
	expertise?: string;
	expertiseId?: string;
	articles?: Array<{
		_id: string;
		media?: any;
		articleTitle?: string;
		expertise?: string;
		consultantName?: string;
		consultantImage?: string;
		consultantId?: string;
		description?: string;
	}>;
};
export type ExpertArticlesItemProps = {
	ExpertArticlesItems?: ExpertArticlesItem[];
};
export function ExpertArticlesDetailsMobile({
	ExpertArticlesItems
}: ExpertArticlesItemProps) {
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(5);
	const nextSlide = () => {
		setCurrentSlideIdx(currentSlideIdx + 2);
	};

	let data = [];
	ExpertArticlesItems.map((item, i) => {
		data = data.concat({
			expertiseId: item.expertiseId,
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
					<Subtext
						fontSize="20px"
						color="#000000"
						fontWeight="400"
						lineHeight="20px"
						letterSpacing="0.26px"
					>
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
									letterSpacing="0px"
									lineHeight="20px"
								>
									{item.title}
								</Subtext>
							</SpaceTag>

							{item.article.map((list, i) => (
								<Link href={`/article-details/${list._id}`}>
									<CursorTag>
										<Row>
											<Column sm={12} md={12} xs={12}>
												<FlexTag className="flex-container">
													<SpaceTag
														marginTop="5"
														marginLeft="5"
														marginRight="5"
														marginBottom="5"
													>
														<ImageTag
															src={list.media}
															height="100%"
															width="100px"
														/>
													</SpaceTag>
													<Card
														width="-webkit-fill-available"
														border="1"
														borderRadius="5"
													>
														<SpaceTag>
															<Subtext
																fontSize="14px"
																color="#282828"
																letterSpacing="0px"
																lineHeight="20px"
															>
																{
																	list.articleTitle
																}
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
																		letterSpacing="0px"
																		lineHeight="15px"
																	>
																		{
																			list.consultantName
																		}
																	</Subtext>
																	<Subtext
																		fontSize="10px"
																		color="#979797"
																		lineHeight="13px"
																		letterSpacing="0px"
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
									</CursorTag>
								</Link>
							))}
							<FlexTag justifyContent="flex-end">
								<SpaceTag marginLeft="15" marginRight="15">
									<ViewMoreButton
										onClick={nextSlide}
										type="button"
									>
										View More
									</ViewMoreButton>
								</SpaceTag>
							</FlexTag>
						</>
					))}
				</SpaceTag>
			</Container>
		</>
	);
}
