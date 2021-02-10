import React from "react";
import Carousel from "react-elastic-carousel";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Subtext,
	ImgTag,
	ImageText,
	ImageContainer,
	Heading,
	Boldtag,
	SpaceTag,
	CenterTag
} from "../../components/small-component";

export type PopularItem = {
	title?: string;
	description?: string;
	image?: any;
	price?: string;
};
export type PopularServiceProps = {
	PopularItems: PopularItem[];
};
export function PopularServiceMobile({ PopularItems }: PopularServiceProps) {
	return (
		<SectionConsultant>
			<CenterTag>
				<Subtext
					color="#000000"
					fontSize="20px"
					lineHeight="20px"
					letterSpacing="0.26px"
				>
					Popular Services
				</Subtext>
			</CenterTag>
			<SpaceTag marginTop="40">
				<Container>
					<Carousel
						showArrows={false}
						itemsToScroll={2}
						itemsToShow={2}
						verticalMode={true}
					>
						{PopularItems.map((items, i) => (
							<Row>
								<Column sm={12} md={12} xs={12}>
									<ImageContainer>
										<ImgTag
											src={items.image}
											height="200"
										/>
										<ImageText>
											<Subtext
												color="#000000"
												fontSize="18px"
												lineHeight="30px"
												letterSpacing="0px"
												fontWeight="600"
											>
												{items.title}
											</Subtext>
											<SpaceTag marginTop="20">
												<Subtext
													color="#000000"
													fontSize="12px"
													lineHeight="22px"
													letterSpacing="0px"
												>
													{items.description}
												</Subtext>
												{items.price === "" ? (
													<></>
												) : (
													<SpaceTag marginTop="45">
														<Subtext
															color="#000000"
															fontSize="18px"
															lineHeight="30px"
															letterSpacing="0px"
															fontWeight="600"
														>
															Starting from Rs
															{items.price}
														</Subtext>
													</SpaceTag>
												)}
											</SpaceTag>
										</ImageText>
									</ImageContainer>
								</Column>
							</Row>
						))}
					</Carousel>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
