import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Ptag,
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

export function PopularService() {
	const data = [
		{
			title: "21 Days Weight Loss ",
			imgtag: SmallBanner1,
			description:
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only "
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
				"Get in shape or Stay in shape with our personalised 2 months fitness training through our experts, Prices starting from 599* Only "
		}
	];
	return (
		<SectionConsultant>
			<H3tagConsultant>Popular Services</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{data.map((item, i) => (
							<Column sm={12} md={6}>
								<ImageContainer>
									<ImgTag src={item.imgtag} height="300" />

									<ImageText>
										<Heading>{item.title} </Heading>
										<SpaceTag marginTop="20">
											<Atag
												fontSize="15"
												href=""
												color="#000"
											>
												<Ptag
													color="#000000"
													fontSize="15"
												>
													{item.description}
												</Ptag>
												<SpaceTag marginTop="50">
													<Boldtag>
														{item.offertext}
													</Boldtag>
												</SpaceTag>
											</Atag>
										</SpaceTag>
									</ImageText>
								</ImageContainer>
							</Column>
						))}
					</Row>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
