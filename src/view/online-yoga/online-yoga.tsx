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

export type ConsultantItem = {
	title: string;
	usecode: string;
};
export type ConsultantProps = {
	ConsultantItems: ConsultantItem[];
};

export function OnlineYoga({ ConsultantItems }: ConsultantProps) {
	console.log(ConsultantItems);
	return (
		<SectionOnlineYoga>
			<Container>
				<Row>
					{ConsultantItems.map((item, i) => (
						<Column sm={12} md={12}>
							<SpaceTag marginTop="35">
								<Ptag color="#000000" fontSize="24px">
									{item.title}
								</Ptag>
							</SpaceTag>
							<SpaceTag marginTop="25">
								<Boldtag color="#000000">
									Use Code: {item.usecode}
								</Boldtag>
							</SpaceTag>
							<SpaceTag marginTop="40">
								<Atag fontSize="20" href="" color="#009846">
									Chat Now {">"}
								</Atag>
							</SpaceTag>
						</Column>
					))}
				</Row>
			</Container>
		</SectionOnlineYoga>
	);
}
