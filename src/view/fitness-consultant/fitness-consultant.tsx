import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionFitness,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag
} from "../../components/small-component";

export function FitnessConsultant() {
	return (
		<SectionFitness>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="50">
							<Ptag color="#000000" fontSize="24px">
								Stay Healthy Stay Fit 20 % on all Fitness
								Consultants
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="25">
							<Boldtag color="#000000">
								Use Code: StayFitPro
							</Boldtag>
						</SpaceTag>
						<SpaceTag marginTop="30">
							<Atag fontSize="20" href="" color="#fff">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionFitness>
	);
}
