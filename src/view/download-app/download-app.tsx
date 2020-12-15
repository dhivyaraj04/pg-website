import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionMultiConsultant,
	FlexTag,
	Ptag,
	SpaceTag,
	MobileImageTag,
	ImageTag,
	CenterTag,
	MobileAppHeading
} from "../../components/small-component";
import * as MobileApp from "../../img/mobile-1.png";
import * as GooglePlay from "../../img/google-play.png";

export function DownloadApp() {
	return (
		<SectionMultiConsultant>
			<Container>
				<Row>
					<Column sm={12} md={6}>
						<SpaceTag marginTop="60">
							<CenterTag>
								<MobileImageTag
									src={MobileApp}
									width="201"
									height="426"
								/>
							</CenterTag>
						</SpaceTag>
					</Column>
					<Column sm={12} md={6}>
						<SpaceTag marginTop="100">
							<MobileAppHeading>
								Download the Protalk App
							</MobileAppHeading>
							<Ptag color="#4F5665" fontSize="16px">
								Access all domain consultations with verified
								experts on the Protalk app. Connect with experts
								online, available 24/7, from the comfort of your
								home.
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="30">
							<Ptag color="#4F5665" fontSize="16px">
								Get the link to download the app
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="30">
							<ImageTag src={GooglePlay} />
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionMultiConsultant>
	);
}
