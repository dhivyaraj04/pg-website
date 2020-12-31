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

export type PopularItem = {
	title?: string;
	description?: string;
	image?: any;
	price?: string;
};
export type PopularServiceProps = {
	PopularItems: PopularItem[];
};
export function PopularService({ PopularItems }: PopularServiceProps) {
	return (
		<SectionConsultant>
			<H3tagConsultant>Popular Services</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{PopularItems.map((item, i) => (
							<Column sm={12} md={6}>
								<ImageContainer>
									<ImgTag src={item.image} height="300" />

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
												{item.price === "" ? (
													<></>
												) : (
													<SpaceTag marginTop="40">
														<Boldtag>
															Starting from Rs
															{item.price}
														</Boldtag>
													</SpaceTag>
												)}
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
