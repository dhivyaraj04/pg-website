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
import * as SmallBanner1 from "../../img/small-banner-1.png";
import * as SmallBanner2 from "../../img/small-banner-2.png";
import * as SmallBanner3 from "../../img/small-banner-3.png";
import * as SmallBanner4 from "../../img/small-banner-4.png";

export function PopularServiceMobile() {
	const data = [
		{
			title: "21 Days Weight Loss ",
			imgtag: SmallBanner1,
			description:
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only ",
			offertext: ""
		},
		{
			title: "2 Month Fitness Training",
			imgtag: SmallBanner2,
			description:
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only",
			offertext: "Starting from Rs 599*"
		},
		{
			title: "Aryuvedu Remedies",
			imgtag: SmallBanner3,
			description:
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only ",
			offertext: "Starting from Rs 599*"
		},
		{
			title: "Daily Diet ",
			imgtag: SmallBanner4,
			description:
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only ",
			offertext: ""
		}
	];
	return (
		<SectionConsultant>
			<H3tagConsultant>Popular Services</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Carousel
						showArrows={false}
						itemsToScroll={2}
						itemsToShow={2}
						pagination={true}
						verticalMode={true}
					>
						{data.map((items, i) => (
							<Row>
								<Column sm={12} md={12} xs={12}>
									<ImageContainer>
										<ImgTag
											src={items.imgtag}
											height="200"
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
													<SpaceTag marginTop="50">
														<Boldtag>
															{items.offertext}
														</Boldtag>
													</SpaceTag>
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
