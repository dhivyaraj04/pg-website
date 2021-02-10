import React from "react";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Subtext,
	SpaceTag,
	ImageTag,
	CursorTag,
	CenterTag
} from "../../components/small-component";

export type ConsultantExpertItem = {
	_id?: string;
	name?: string;
	image?: string;
};
export type ConsultantExpertProps = {
	ConsultantExpertItems?: ConsultantExpertItem[];
};
export function ConsultantExpertMobile({
	ConsultantExpertItems
}: ConsultantExpertProps) {
	const length = ConsultantExpertItems.length;
	const length1 = ConsultantExpertItems.length / 2 + 1;
	const length2 = Math.round(ConsultantExpertItems.length / 2);
	const d1 = ConsultantExpertItems.slice(length2, length);
	const d2 = ConsultantExpertItems.slice(0, length1);
	var newArray = d2.map((item, index) => {
		return {
			id1: item._id,
			name1: item.name,
			image1: item.image,
			name2: d1[index] === undefined ? "" : d1[index].name,
			image2: d1[index] === undefined ? "" : d1[index].image,
			id2: d1[index] === undefined ? "" : d1[index]._id
		};
	});

	return (
		<SectionConsultant>
			<CenterTag>
				<Subtext
					color="#000000"
					fontSize="20px"
					letterSpacing="0.26px"
					lineHeight="20px"
				>
					Connect with our Certifield Consultant Experts Today
				</Subtext>
			</CenterTag>

			<SpaceTag marginTop="40">
				<Container>
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
										<Card
											borderRadius="0"
											margin="auto"
											textAlign="center"
											width="130px"
											height="100px"
										>
											<Link
												href={`/expertis/${item.id1}`}
											>
												<CursorTag>
													<ImageTag
														src={item.image1}
													/>
													<Subtext
														color="#000000"
														fontSize="14px"
														letterSpacing="0px"
														lineHeight="20px"
													>
														{item.name1}
													</Subtext>
												</CursorTag>
											</Link>
										</Card>
									</Column>
								</Row>
								<br />
								{item.name2 === "" ? (
									<></>
								) : (
									<Row>
										<Column md={6} sm={6} xs={6}>
											<Card
												borderRadius="0"
												margin="auto"
												textAlign="center"
												width="130px"
												height="100px"
											>
												<Link
													href={`/expertis/${item.id2}`}
												>
													<CursorTag>
														<ImageTag
															src={item.image2}
														/>
														<Subtext
															color="#000000"
															fontSize="14px"
															letterSpacing="0px"
															lineHeight="20px"
														>
															{item.name2}
														</Subtext>
													</CursorTag>
												</Link>
											</Card>
										</Column>
									</Row>
								)}
							</>
						))}
					</Carousel>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
