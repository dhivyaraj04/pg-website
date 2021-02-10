import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionMultiConsultant,
	FlexTag,
	Subtext,
	SpaceTag,
	DownloadMobile,
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
								<DownloadMobile src={MobileApp} />
							</CenterTag>
						</SpaceTag>
					</Column>
					<Column sm={12} md={6}>
						<SpaceTag marginLeft="20">
							<SpaceTag marginTop="100">
								<Subtext
									color="#0B132A"
									fontSize="35px"
									letterSpacing="0px"
									lineHeight="50px"
								>
									Download the Protalk App
								</Subtext>
								<Subtext
									color="#4F5665"
									fontSize="16px"
									letterSpacing="0px"
									lineHeight="28px"
								>
									Access all domain consultations with
									verified experts on the Protalk app. Connect
									with experts online, available 24/7, from
									the comfort of your home.
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="30">
								<Subtext
									color="#4F5665"
									fontSize="16px"
									letterSpacing="0px"
									lineHeight="28px"
								>
									Get the link to download the app
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="30" marginBottom="20">
								<ImageTag src={GooglePlay} />
							</SpaceTag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionMultiConsultant>
	);
}
