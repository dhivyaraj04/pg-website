import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionFitnessMobile,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag
} from "../../components/small-component";

export function FitnessConsultantMobile() {
	return (
		<SectionFitnessMobile>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="25">
							<Ptag color="#000000" fontSize="24px">
								20 % on all Fitness Consultants
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="5">
							<Boldtag color="#000000">
								Use Code: StayFitPro
							</Boldtag>
						</SpaceTag>
						<SpaceTag marginTop="15">
							<Atag fontSize="20" href="" color="#fff">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionFitnessMobile>
	);
}
