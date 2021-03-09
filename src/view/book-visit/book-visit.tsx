import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionBookVisit,
	InputTag,
	Text,
	FlexTag,
	SpaceTag,
	BookAVistitButton
} from "../../components/small-component";

export type BookVisitProps = {
	id?: string;
};
export function BookVisit({ id }: BookVisitProps) {
	return (
		<SectionBookVisit id={id}>
			<Container>
				<Row>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="20">
							<Text fontSize="26px" color="#000" fontWeight="900">
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
										fontSize="18px"
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
						<SpaceTag marginTop="18">
							<FlexTag>
								<SpaceTag marginTop="15">
									<Text
										fontSize="20px"
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
							<BookAVistitButton>Book a Visit</BookAVistitButton>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionBookVisit>
	);
}
