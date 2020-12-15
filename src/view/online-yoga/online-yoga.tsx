import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionOnlineYoga,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag
} from "../../components/small-component";

export function OnlineYoga() {
	return (
		<SectionOnlineYoga>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="35">
							<Ptag color="#000000" fontSize="24px">
								Get 15% Off on your Online YOGA Consultants
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="25">
							<Boldtag color="#000000">Use Code: PROYOGA</Boldtag>
						</SpaceTag>
						<SpaceTag marginTop="40">
							<Atag fontSize="20" href="" color="#009846">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionOnlineYoga>
	);
}
