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
	MobileAppHeading
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
							<Ptag color="#4F5665" fontSize="16px">
								<FlexTag>
									<Icon name={Icons.righttick} />
									<SpaceTag marginLeft="10" marginTop="5">
										24/7 Budget friendly Consultation
									</SpaceTag>
								</FlexTag>
							</Ptag>
							<Ptag color="#4F5665" fontSize="16px">
								<FlexTag>
									<Icon name={Icons.righttick} />
									<SpaceTag marginLeft="10" marginTop="5">
										Protalk Assistant Chat Bot
									</SpaceTag>
								</FlexTag>
							</Ptag>
							<Ptag color="#4F5665" fontSize="16px">
								<FlexTag>
									<Icon name={Icons.righttick} />
									<SpaceTag marginLeft="10" marginTop="5">
										Library of Articles related all Domains
									</SpaceTag>
								</FlexTag>
							</Ptag>
							<Ptag color="#4F5665" fontSize="16px">
								<FlexTag>
									<Icon name={Icons.righttick} />
									<SpaceTag marginLeft="10" marginTop="5">
										Expert Video and Chat
									</SpaceTag>
								</FlexTag>
							</Ptag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionMultiConsultant>
	);
}
