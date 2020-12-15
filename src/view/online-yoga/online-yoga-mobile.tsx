import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionOnlineYogaMobile,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag
} from "../../components/small-component";

export function OnlineYogaMobile() {
	return (
		<SectionOnlineYogaMobile>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="25">
							<Ptag color="#000000" fontSize="24px">
								Get 15% Off on your Online Consultants
							</Ptag>
						</SpaceTag>
						<SpaceTag marginTop="5">
							<Boldtag color="#000000">Use Code: 15PRO</Boldtag>
						</SpaceTag>
						<SpaceTag marginTop="15">
							<Atag fontSize="20" href="" color="#009846">
								Chat Now {">"}
							</Atag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionOnlineYogaMobile>
	);
}
