import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	BannerBar,
	Subtext,
	SpaceTag,
	CenterTag,
	CardBlock,
	FlexTag
} from "../../components/small-component";
import { Card } from "../../components/card/card";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";

export type WorkItem = {
	iconName?: Icons;
	iconText?: string;
	text?: string;
};
export type WorkProps = {
	WorkItems?: WorkItem[];
};
export function Work({ WorkItems }: WorkProps) {
	return (
		<Container>
			<CenterTag>
				<SpaceTag marginTop="40" marginBottom="40">
					<Subtext
						color="#000"
						fontSize="26px"
						letterSpacing="0px"
						lineHeight="20px"
					>
						HOW we WORK?
					</Subtext>
				</SpaceTag>
			</CenterTag>
			{WorkItems.map((item, i) => (
				<>
					<Container>
						<Row>
							<Column sm={4} md={3} xs={4}>
								<div
									style={{
										padding: "10px",
										background: "#a9cb7e",
										borderBottomLeftRadius: "10px",
										borderTopLeftRadius: "10px",
										marginRight: "-15px",
										height: "100px"
									}}
								>
									<CenterTag>
										<SpaceTag marginTop="15">
											<Icon name={item.iconName} />
											<Subtext
												color="#fff"
												fontSize="14px"
												letterSpacing="0.26px"
												lineHeight="20px"
											>
												{item.iconText}
											</Subtext>
										</SpaceTag>
									</CenterTag>
								</div>
							</Column>
							<Column sm={8} md={9} xs={8}>
								<div
									style={{
										background: "#009846",
										borderBottomRightRadius: "10px",
										borderTopRightRadius: "10px",
										padding: "10px",
										marginLeft: "-15px",
										height: "100px"
									}}
								>
									<CenterTag>
										<SpaceTag marginTop="35">
											<Subtext
												color="#fff"
												fontSize="16px"
												letterSpacing="0.26px"
												lineHeight="20px"
											>
												{item.text}
											</Subtext>
										</SpaceTag>
									</CenterTag>
								</div>
							</Column>
						</Row>
					</Container>
					<br />
				</>
			))}
		</Container>
	);
}
