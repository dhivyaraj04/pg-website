import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import {
	BannerBar,
	Subtext,
	SpaceTag,
	ImageTag,
	CenterTag,
	SectionChoose
} from "../../components/small-component";

export type ChoseItem = {
	media?: Icons;
	text?: string;
};
export type ChooseProps = {
	ChoseItems?: ChoseItem[];
};
export function Choose({ ChoseItems }: ChooseProps) {
	return (
		<>
			<Container>
				<CenterTag>
					<SpaceTag marginTop="70" marginBottom="20">
						<Subtext
							color="#000"
							fontSize="26px"
							letterSpacing="0px"
							lineHeight="20px"
						>
							WHY CHOOSE us?
						</Subtext>
					</SpaceTag>
				</CenterTag>
			</Container>
			<SectionChoose>
				<Container>
					<Row>
						{ChoseItems.map((item, i) => (
							<Column sm={6} md={3} xs={12}>
								<CenterTag>
									<SpaceTag marginTop="20">
										{/* <ImageTag src={item.media} /> */}
										<Icon name={item.media} />
										<br />
										<SpaceTag marginTop="20">
											<Subtext
												color="#000"
												fontSize="16px"
												letterSpacing="0.10px"
												lineHeight="22px"
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
			</SectionChoose>
		</>
	);
}
