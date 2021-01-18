import React from "react";
import { Container } from "styled-container-component";
import { Row } from "styled-grid-system-component";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Ptag,
	SpaceTag,
	ImageContainer,
	ImageBackgroundTag,
	ImageText,
	Subtext,
	Opacity,
	TextWidth,
	TextTitle,
	Boldtag
} from "../../components/small-component";

export type ConsultantExpertLawItem = {
	_id?: string;
	name?: string;
	image?: string;
};
export type ConsultantExpertLawProps = {
	ConsultantExpertLawItems: ConsultantExpertLawItem[];
};
export function ConsultantExpertLaw({
	ConsultantExpertLawItems
}: ConsultantExpertLawProps) {
	return (
		<>
			<SectionConsultant>
				<H3tagConsultant>
					Connect with our Certifield Lawyer Consultant Experts Today
				</H3tagConsultant>
				<SpaceTag marginTop="40">
					<Container>
						<Row>
							{ConsultantExpertLawItems.map((item, i) => (
								<SpaceTag marginLeft="8" marginRight="8">
									<ImageContainer>
										<ImageBackgroundTag
											background={item.image}
										>
											<Opacity>
												<TextWidth>
													<TextTitle>
														<Subtext
															fontSize="14px"
															color="#fff"
														>
															{item.name}
														</Subtext>
													</TextTitle>
												</TextWidth>
											</Opacity>
										</ImageBackgroundTag>
									</ImageContainer>
								</SpaceTag>
							))}
						</Row>
					</Container>
				</SpaceTag>
			</SectionConsultant>
		</>
	);
}
