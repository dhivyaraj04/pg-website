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
	SpaceTag
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
export function PopularServiceExpertisTemplate({
	PopularItems
}: PopularServiceProps) {
	return (
		<SectionConsultant>
			<H3tagConsultant>Popular Services</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Carousel
						showArrows={false}
						itemsToScroll={2}
						itemsToShow={2}
						verticalMode={false}
					>
						{PopularItems.map((items, i) => (
							<Row>
								<Column sm={12} md={12} xs={12}>
									<ImageContainer>
										<ImgTag
											src={items.image}
											height="300"
										/>

										<ImageText>
											<Heading>{items.title}</Heading>
											<SpaceTag marginTop="20">
												<Atag
													fontSize="13"
													href=""
													color="#000"
												>
													<Subtext
														color="#000000"
														fontSize="13px"
														letter-spacing="0.56px"
													>
														{items.description}
													</Subtext>
													{items.price === "" ? (
														<></>
													) : (
														<SpaceTag marginTop="50">
															<Boldtag>
																Starting from Rs
																{items.price}
															</Boldtag>
														</SpaceTag>
													)}
												</Atag>
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
