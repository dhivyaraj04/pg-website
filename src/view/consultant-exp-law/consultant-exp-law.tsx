import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
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
import * as CivilLaw from "../../img/civil-law.png";
import * as DivorceLaw from "../../img/divorce-law.png";
import * as CyberLaw from "../../img/cyber-law.png";
import * as CustomsLaw from "../../img/customs-law.png";
import * as CrimalLaw from "../../img/crimal-law.png";
import * as FamilyLaw from "../../img/family-law.png";
import * as LandlordLaw from "../../img/landlord-law.png";
import * as ConsumerLaw from "../../img/consumer-law.png";
import * as CorporateLaw from "../../img/corporate-law.png";
import * as DocumentLaw from "../../img/document-law.png";
import * as TaxLaw from "../../img/tax-law.png";
import * as OtherLaw from "../../img/other-law.png";
import * as PropertyLaw from "../../img/property-law.png";
import * as StartupLaw from "../../img/startup-law.png";

export function ConsultantExpertLaw() {
	const data = [
		{
			name: "Civil Lawyer",
			img: CivilLaw
		},
		{ name: "Startup Lawyer", img: StartupLaw },
		{ name: "Property Lawyer", img: PropertyLaw },
		{ name: "Divorce Lawyer", img: DivorceLaw },
		{ name: "Criminal Laywer", img: CrimalLaw },
		{ name: "Consumer Court", img: ConsumerLaw },
		{ name: "Tax Lawyer", img: TaxLaw },
		{ name: "Corporate Lawyer", img: CorporateLaw },
		{ name: "Landlor & Tenant Laywer", img: LandlordLaw },
		{ name: "Family Laywer", img: FamilyLaw },
		{ name: "Customs Court", img: CustomsLaw },
		{ name: "Documentation Lawyer", img: DocumentLaw },
		{ name: "Cyber crime Lawyer", img: CyberLaw },
		{ name: "Trademark & Copyright Lawyer", img: OtherLaw },
		{ name: "Others", img: OtherLaw }
	];
	return (
		<SectionConsultant>
			<H3tagConsultant>
				Connect with our Certifield Lawyer Consultant Experts Today
			</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{data.map((item, i) => (
							<SpaceTag marginLeft="8" marginRight="10">
								<ImageContainer>
									<ImageBackgroundTag background={item.img}>
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
	);
}
