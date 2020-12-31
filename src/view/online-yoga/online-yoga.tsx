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

export type OnlineItem = {
	bannerImage?: string;
	text?: string;
	promoCode?: string;
};
export type OnlineProps = {
	OnlineItems?: OnlineItem[];
};

export function OnlineYoga({ OnlineItems }: OnlineProps) {
	return (
		<>
			{OnlineItems === undefined ? (
				<></>
			) : (
				<>
					{OnlineItems.map((item, i) => (
						<SectionOnlineYoga banner={item.bannerImage}>
							<Container>
								<Row>
									<Column sm={12} md={12}>
										<SpaceTag marginTop="35">
											<Ptag
												color="#000000"
												fontSize="24px"
											>
												{item.text}
											</Ptag>
										</SpaceTag>
										<SpaceTag marginTop="25">
											<Boldtag color="#000000">
												Use Code: {item.promoCode}
											</Boldtag>
										</SpaceTag>
										<SpaceTag marginTop="40">
											<Atag
												fontSize="20"
												href=""
												color="#009846"
											>
												Chat Now {">"}
											</Atag>
										</SpaceTag>
									</Column>
								</Row>
							</Container>
						</SectionOnlineYoga>
					))}
				</>
			)}
		</>
	);
}
