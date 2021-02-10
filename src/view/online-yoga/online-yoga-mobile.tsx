import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionOnlineYogaMobile,
	Atag,
	Ptag,
	SpaceTag,
	Subtext
} from "../../components/small-component";

export function OnlineYogaMobile() {
	return (
		<SectionOnlineYogaMobile>
			<Container>
				<Row>
					<Column sm={12} md={12}>
						<SpaceTag marginTop="25">
							<Subtext
								color="#282828"
								fontSize="14px"
								lineHeight="21px"
							>
								Get 15% Off on your Online Consultants
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="5">
							<Subtext
								color="#000000"
								fontSize="14px"
								lineHeight="21px"
							>
								Use Code: 15PRO
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="15">
							<Subtext
								fontSize="12px"
								color="#009846"
								lineHeight="20px"
							>
								Chat Now {">"}
							</Subtext>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionOnlineYogaMobile>
	);
}
