import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionOnlineYoga,
	Atag,
	Ptag,
	SpaceTag,
	Boldtag,
	Subtext
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
										<SpaceTag marginTop="25">
											<Subtext
												color="#282828"
												fontSize="29px"
												letterSpacing="0px"
												lineHeight="50px"
											>
												{item.text}
											</Subtext>
										</SpaceTag>
										<SpaceTag marginTop="15">
											<Subtext
												fontSize="29px"
												color="#000000"
												letterSpacing="0px"
												lineHeight="50px"
												fontWeight="600"
											>
												Use Code: {item.promoCode}
											</Subtext>
										</SpaceTag>
										<SpaceTag marginTop="30">
											<Subtext
												fontSize="28px"
												color="#009846"
												lineHeight="20px"
												letterSpacing="0px"
											>
												Chat Now {">"}
											</Subtext>
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
