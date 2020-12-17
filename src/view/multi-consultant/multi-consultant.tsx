import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionMultiConsultant,
	FlexTag,
	Ptag,
	SpaceTag,
	MobileImageTag,
	CenterTag,
	MobileAppHeading,
	TextTag
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import * as MobileApp from "../../img/mobile-2.png";

export function MultiConsultant() {
	return (
		<SectionMultiConsultant>
			<Container>
				<Row>
					<Column sm={12} md={6}>
						<SpaceTag marginTop="60">
							<CenterTag>
								<MobileImageTag src={MobileApp} />
							</CenterTag>
						</SpaceTag>
					</Column>
					<Column sm={12} md={6}>
						<SpaceTag marginTop="100">
							<MobileAppHeading>
								Multi-Consultant App <br />
								with loads of features
							</MobileAppHeading>
							<Ptag color="#4F5665" fontSize="16px">
								You can explore the features that we provide
								with verified expert <br />
								consultants on our app
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="30">
							<SpaceTag marginTop="10">
								<FlexTag>
									<SpaceTag marginTop="2" marginRight="7">
										<Icon name={Icons.righttick} />
									</SpaceTag>

									<TextTag>
										24/7 Budget friendly Consultation
									</TextTag>
								</FlexTag>
							</SpaceTag>
							<SpaceTag marginTop="10">
								<FlexTag>
									<SpaceTag marginTop="2" marginRight="7">
										<Icon name={Icons.righttick} />
									</SpaceTag>

									<TextTag>
										Library of Articles related all Domains
									</TextTag>
								</FlexTag>
							</SpaceTag>
							<SpaceTag marginTop="10">
								<FlexTag>
									<SpaceTag marginTop="2" marginRight="7">
										<Icon name={Icons.righttick} />
									</SpaceTag>

									<TextTag>Expert Video and Chat</TextTag>
								</FlexTag>
							</SpaceTag>
							<SpaceTag marginTop="10">
								<FlexTag>
									<SpaceTag marginTop="2" marginRight="7">
										<Icon name={Icons.righttick} />
									</SpaceTag>

									<TextTag>
										Protalk Assistant Chat Bot
									</TextTag>
								</FlexTag>
							</SpaceTag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionMultiConsultant>
	);
}
