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
	CenterTag
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
export function ExpertArticlesList({
	ExpertArticlesItems
}: ExpertArticlesItemProps) {
	return (
		<Container>
			<SpaceTag marginTop="30" marginBottom="10">
				{ExpertArticlesItems.map((item, i) => (
					<>
						<SpaceTag
							marginTop="10"
							marginBottom="10"
							marginLeft="15"
							marginRight="15"
						>
							<Subtext
								fontSize="30px"
								color="#999"
								fontWeight="600"
							>
								{item.expertise}
							</Subtext>
						</SpaceTag>

						<Row>
							{item.articles.map((list, i) => (
								<Link href={`/article-details/${list._id}`}>
									<Column sm={12} md={6} xs={12}>
										<FlexTag>
											<SpaceTag marginTop="5">
												<ImageTag
													src={list.media}
													width="-webkit-fill-available"
													height="170px"
												/>
											</SpaceTag>

											<Card
												width="-webkit-fill-available"
												border="1"
												borderRadius="0"
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
														{list.articleTitle}
													</Subtext>
													<SpaceTag
														marginBottom="5"
														marginTop="5"
													>
														<Subtext
															fontSize="12px"
															color="#979797"
															letterSpacing="0.56px"
														>
															{list.description}
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
																{list.expertise}
															</Subtext>
														</SpaceTag>
													</FlexTag>
												</SpaceTag>
											</Card>
										</FlexTag>
									</Column>
								</Link>
							))}
						</Row>
					</>
				))}
			</SpaceTag>

			<CenterTag>
				<SpaceTag marginTop="20" marginBottom="20">
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
		</Container>
	);
}
