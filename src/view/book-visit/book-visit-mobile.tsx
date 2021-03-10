import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionBookVisit,
	InputTag,
	Text,
	FlexTag,
	SpaceTag
} from "../../components/small-component";

export type BookVisitProps = {
	id?: string;
};
export function BookVisitMobile({ id }: BookVisitProps) {
	return (
		<SectionBookVisit>
			<Container>
				<Row>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="20">
							<Text fontSize="22px" color="#000" fontWeight="900">
								Book a Visit
							</Text>
						</SpaceTag>
					</Column>
				</Row>
				<Row>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="20">
							<FlexTag>
								<SpaceTag marginTop="15">
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="500"
									>
										Phone No
									</Text>
								</SpaceTag>
								<InputTag
									value=""
									placeholder="enter your phone no"
								/>
							</FlexTag>
						</SpaceTag>
					</Column>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="20">
							<FlexTag>
								<SpaceTag marginTop="15">
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="500"
									>
										Location
									</Text>
								</SpaceTag>
								<InputTag
									value=""
									placeholder="enter your phone no"
								/>
							</FlexTag>
						</SpaceTag>
					</Column>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="30">
							<button>
								<Text
									fontSize="20px"
									color="#000"
									fontWeight="500"
								>
									Book a Visit
								</Text>
							</button>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionBookVisit>
	);
}
