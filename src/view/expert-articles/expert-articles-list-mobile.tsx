import React from "react";
import Link from "next/link";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	CenterTag,
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
};
export function ExpertArticlesListMobile({
	ExpertArticlesItems
}: ExpertArticlesItemProps) {
	return (
		<>
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<SpaceTag marginTop="30" marginBottom="10">
							<Subtext
								fontSize="30px"
								color="rgba(0, 0, 0, 0.25)"
								letterSpacing="0.10px"
								lineHeight="20px"
								fontWeight="600"
							>
								Trending Articles
							</Subtext>
						</SpaceTag>
					</Column>
				</Row>

				<SpaceTag marginTop="30" marginBottom="10">
					{ExpertArticlesItems.map((item, i) => (
						<>
							<Row>
								{item.articles.map((list, i) => (
									<Column sm={12} md={12} xs={12}>
										<Link
											href={`/article-details/${list._id}`}
										>
											<CursorTag>
												<FlexTag className="flex-container">
													<SpaceTag
														marginTop="5"
														marginLeft="5"
														marginRight="5"
														marginBottom="5"
													>
														<ImageTag
															src={list.media}
															width="-webkit-fill-available"
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
																fontSize="14px"
																color="#282828"
																letterSpacing="0.56px"
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
											</CursorTag>
										</Link>
									</Column>
								))}
							</Row>
						</>
					))}
				</SpaceTag>
				<Row>
					<Column sm={12} md={12} xs={12}>
						<CenterTag>
							<SpaceTag
								marginTop="20"
								marginBottom="20"
								marginLeft="40"
								marginRight="40"
							>
								<LoadMorebutton
									width="-webkit-fill-available"
									height="45px"
									background="none"
									border="1px solid #029532"
									color="#029532"
								>
									LOAD MORE
								</LoadMorebutton>
							</SpaceTag>
						</CenterTag>
					</Column>
				</Row>
			</Container>
			<br />
			<br />
		</>
	);
}
