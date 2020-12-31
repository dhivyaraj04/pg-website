import React from "react";
import Carousel from "react-elastic-carousel";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import {
	SectionConsultant,
	H3tagConsultant,
	SpaceTag,
	ImageContainer,
	ImageBackgroundTag,
	Subtext,
	Opacity,
	TextWidth,
	TextTitle
} from "../../components/small-component";

export type ConsultantExpertLawItem = {
	_id?: string;
	name?: string;
	image?: string;
};
export type ConsultantExpertLawProps = {
	ConsultantExpertLawItems: ConsultantExpertLawItem[];
};
export function ConsultantExpertMobileLaw({
	ConsultantExpertLawItems
}: ConsultantExpertLawProps) {
	const length = ConsultantExpertLawItems.length;
	const length1 = ConsultantExpertLawItems.length / 3;
	const length2 = length1 + 1;
	const length3 = length1 + length2 - 1;

	const d1 = ConsultantExpertLawItems.slice(0, length1);
	const d2 = ConsultantExpertLawItems.slice(length2, length3);
	const d3 = ConsultantExpertLawItems.slice(length3, length);

	var newArray = d2.map((item, index) => {
		return {
			id1: item._id,
			name1: item.name,
			image1: item.image,
			name2: d1[index] === undefined ? "" : d1[index].name,
			image2: d1[index] === undefined ? "" : d1[index].image,
			id2: d1[index] === undefined ? "" : d1[index]._id,
			name3: d1[index] === undefined ? "" : d3[index].name,
			image3: d1[index] === undefined ? "" : d3[index].image,
			id3: d1[index] === undefined ? "" : d3[index]._id
		};
	});
	return (
		<>
			<SectionConsultant>
				<H3tagConsultant>
					Connect with our Certifield Lawyer Consultant Experts Today
				</H3tagConsultant>
				<SpaceTag marginTop="40">
					<Container>
						<Row>
							<Carousel
								showArrows={false}
								itemsToScroll={2}
								itemsToShow={2}
								verticalMode={false}
							>
								{newArray.map((item, i) => (
									<>
										<Row>
											<Column md={6} sm={6} xs={6}>
												<SpaceTag
													marginLeft="8"
													marginRight="8"
												>
													<ImageContainer>
														<ImageBackgroundTag
															background={
																item.image1
															}
														>
															<Opacity>
																<TextWidth>
																	<TextTitle>
																		<Subtext
																			fontSize="14px"
																			color="#fff"
																		>
																			{
																				item.name1
																			}
																		</Subtext>
																	</TextTitle>
																</TextWidth>
															</Opacity>
														</ImageBackgroundTag>
													</ImageContainer>
												</SpaceTag>
											</Column>
										</Row>
										<Row>
											<Column md={6} sm={6} xs={6}>
												{item.image2 === "" ? (
													<></>
												) : (
													<SpaceTag
														marginLeft="8"
														marginRight="8"
													>
														<ImageContainer>
															<ImageBackgroundTag
																background={
																	item.image2
																}
															>
																<Opacity>
																	<TextWidth>
																		<TextTitle>
																			<Subtext
																				fontSize="14px"
																				color="#fff"
																			>
																				{
																					item.name2
																				}
																			</Subtext>
																		</TextTitle>
																	</TextWidth>
																</Opacity>
															</ImageBackgroundTag>
														</ImageContainer>
													</SpaceTag>
												)}
											</Column>
										</Row>
										<Row>
											<Column md={6} sm={6} xs={6}>
												{item.image3 === "" ? (
													<></>
												) : (
													<SpaceTag
														marginLeft="8"
														marginRight="8"
													>
														<ImageContainer>
															<ImageBackgroundTag
																background={
																	item.image3
																}
															>
																<Opacity>
																	<TextWidth>
																		<TextTitle>
																			<Subtext
																				fontSize="14px"
																				color="#fff"
																			>
																				{
																					item.name3
																				}
																			</Subtext>
																		</TextTitle>
																	</TextWidth>
																</Opacity>
															</ImageBackgroundTag>
														</ImageContainer>
													</SpaceTag>
												)}
											</Column>
										</Row>
									</>
								))}
							</Carousel>
						</Row>
					</Container>
				</SpaceTag>
			</SectionConsultant>
		</>
	);
}
