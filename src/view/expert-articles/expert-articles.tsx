import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	ResposiveImag
} from "../../components/small-component";
import * as Profile from "../../img/profile-1.png";
import * as Nutrition from "../../img/nutrition-1.png";
import * as Nutrition2 from "../../img/nutrition-2.png";
import * as Fitness from "../../img/fitness-1.png";
import * as Fitness2 from "../../img/fitness-2.png";

export type ExpertArticlesItem = {
	name?: string;
	content?: Array<{
		id: string;
		image?: any;
		title?: string;
		content?: string;
		consultant?: {
			id?: string;
			image?: any;
			name?: string;
			expertise?: string;
		};
	}>;
};
export type ExpertArticlesItemProps = {
	ExpertArticlesItems?: ExpertArticlesItem[];
};
export function ExpertArticles({
	ExpertArticlesItems
}: ExpertArticlesItemProps) {
	return (
		<>
			<SpaceTag marginTop="10" marginBottom="10">
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
								{item.name}
							</Subtext>
						</SpaceTag>

						{item.content.map((list, i) => (
							<Row>
								<Column sm={12} md={12} xs={12}>
									<FlexTag>
										<SpaceTag marginTop="5">
											<ResposiveImag src={list.image} />
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
													fontSize="16px"
													color="#282828"
													letterSpacing="0.56px"
												>
													{list.title}
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
														{list.content}
													</Subtext>
												</SpaceTag>
												<FlexTag>
													<ImageTag
														src={
															list.consultant
																.image
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
																list.consultant
																	.name
															}
														</Subtext>
														<Subtext
															fontSize="10px"
															color="#979797"
														>
															{
																list.consultant
																	.expertise
															}
														</Subtext>
													</SpaceTag>
												</FlexTag>
											</SpaceTag>
										</Card>
									</FlexTag>
								</Column>
							</Row>
						))}
					</>
				))}
			</SpaceTag>
		</>
	);
}
