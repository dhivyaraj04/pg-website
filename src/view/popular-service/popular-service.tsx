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
	CenterTag,
	SpaceTag,
	Subtext
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
			<CenterTag>
				<Subtext
					color="#000000"
					fontSize="36px"
					lineHeight="20px"
					letterSpacing="0.26px"
				>
					Popular Services
				</Subtext>
			</CenterTag>

			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{PopularItems.map((item, i) => (
							<Column sm={12} md={6}>
								<ImageContainer>
									<ImgTag src={item.image} height="300" />

									<ImageText>
										<Subtext
											color="#000000"
											fontSize="30px"
											lineHeight="30px"
											letterSpacing="0px"
											fontWeight="600"
										>
											{item.title}
										</Subtext>
										<SpaceTag marginTop="20">
											<Subtext
												color="#000000"
												fontSize="16px"
												lineHeight="22px"
												letterSpacing="0px"
											>
												{item.description}
											</Subtext>
											{item.price === "" ? (
												<></>
											) : (
												<SpaceTag marginTop="45">
													<Subtext
														color="#000000"
														fontSize="24px"
														lineHeight="30px"
														letterSpacing="0px"
														fontWeight="600"
													>
														Starting from Rs
														{item.price}
													</Subtext>
												</SpaceTag>
											)}
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
