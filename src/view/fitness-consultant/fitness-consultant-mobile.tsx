import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionFitnessMobile,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag,
	Subtext
} from "../../components/small-component";

export function FitnessConsultantMobile() {
	return (
		<SectionFitnessMobile>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="25">
							<Subtext
								color="#000000"
								fontSize="14px"
								lineHeight="26px"
							>
								20 % on all Fitness Consultants
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="5">
							<Subtext
								color="#000000"
								fontSize="14px"
								lineHeight="26px"
								fontWeight="600"
							>
								Use Code: StayFitPro
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="15">
							<Atag fontSize="14" href="" color="#fff">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionFitnessMobile>
	);
}
