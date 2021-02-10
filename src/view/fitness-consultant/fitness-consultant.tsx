import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionFitness,
	Atag,
	Ptag,
	SpaceTag,
	Subtext
} from "../../components/small-component";

export function FitnessConsultant() {
	return (
		<SectionFitness>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="40">
							<Subtext
								color="#000000"
								fontSize="29px"
								lineHeight="54px"
							>
								Stay Healthy Stay Fit 20 % on all Fitness
								Consultants
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="15">
							<Subtext
								color="#000000"
								fontSize="29px"
								lineHeight="54px"
								fontWeight="600"
							>
								Use Code: StayFitPro
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="18">
							<Atag fontSize="28" href="" color="#fff">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionFitness>
	);
}
