import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	BannerBar,
	Subtext,
	SpaceTag,
	ImageTag,
	CenterTag,
	SectionChoose
} from "../../components/small-component";

export type ChoseItem = {
	media?: string;
	text?: string;
};
export type ChooseProps = {
	ChoseItems?: ChoseItem[];
};
export function Choose({ ChoseItems }: ChooseProps) {
	return (
		<SectionChoose>
			<Container>
				<CenterTag>
					<Subtext
						color="#000"
						fontSize="26px"
						letterSpacing="0px"
						lineHeight="20px"
					>
						WHY CHOOSE us?
					</Subtext>
				</CenterTag>
				<Container>
					<Row>
						{ChoseItems.map((item, i) => (
							<Column sm={6} md={3} xs={12}>
								<CenterTag>
									<SpaceTag marginTop="60">
										<ImageTag src={item.media} />
										<br />
										<SpaceTag marginTop="20">
											<Subtext
												color="#000"
												fontSize="18px"
												letterSpacing="0.26px"
												lineHeight="20px"
											>
												{item.text}
											</Subtext>
										</SpaceTag>
									</SpaceTag>
								</CenterTag>
							</Column>
						))}
					</Row>
				</Container>
			</Container>
		</SectionChoose>
	);
}
