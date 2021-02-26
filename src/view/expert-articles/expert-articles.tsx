import React from "react";
import Link from "next/link";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	ResposiveImag,
	ViewMoreButton,
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
		consultantId?: string;
		consultantImage?: string;
		description?: string;
	}>;
};
export type ExpertArticlesItemProps = {
	ExpertArticlesItems?: ExpertArticlesItem[];
	expertiseId?: string;
};
export function ExpertArticles({
	ExpertArticlesItems,
	expertiseId
}: ExpertArticlesItemProps) {
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(2);
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
	function getWord(test) {
		const t = test.substring(0, 40);
		const tes = t.trim().replace(/[ -]+/g, "-");
		return tes;
	}
	return (
		<>
			<SpaceTag marginTop="20" marginBottom="10">
				{data.map((item, i) => (
					<>
						<SpaceTag
							marginTop="20"
							marginBottom="10"
							marginLeft="15"
							marginRight="15"
						>
							<Subtext
								fontSize="30px"
								color="rgba(0, 0, 0, 0.25)"
								fontWeight="600"
								lineHeight="20px"
								letterSpacing="0px"
							>
								{item.title}
							</Subtext>
						</SpaceTag>

						{item.article.map((list, i) => (
							<Link
								href={`/article-details/${getWord(
									list.articleTitle
								)}/${list._id}`}
							>
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
														width="130px"
														height="100%"
													/>
												</SpaceTag>

												<Card
													width="-webkit-fill-available"
													border="1"
													borderRadius="2"
												>
													<SpaceTag
														marginLeft="6"
														marginTop="4"
														marginRight="6"
														marginBottom="4"
													>
														<Subtext
															fontSize="16px"
															color="#282828"
															letterSpacing="0px"
															lineHeight="20px"
														>
															{list.articleTitle}
														</Subtext>
														<SpaceTag
															marginBottom="5"
															marginTop="5"
														>
															<Subtext
																fontSize="12px"
																color="#979797"
																letterSpacing="0px"
																lineHeight="20px"
															>
																{
																	list.description
																}
															</Subtext>
														</SpaceTag>
														<FlexTag>
															<ImageTag
																src={
																	list.consultantImage
																}
																width="25"
																height="25"
															/>
															<SpaceTag
																marginLeft="5"
																marginTop="0"
															>
																<Subtext
																	fontSize="12px"
																	color="#010101"
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
								</CursorTag>
							</Link>
						))}
						<FlexTag justifyContent="flex-end">
							<SpaceTag marginLeft="15" marginRight="15">
								<Link href={`/article/${item.expertiseId}`}>
									<ViewMoreButton type="button">
										View More
									</ViewMoreButton>
								</Link>
							</SpaceTag>
						</FlexTag>
					</>
				))}
			</SpaceTag>
		</>
	);
}
