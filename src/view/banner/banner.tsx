import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { BannerBar, Subtext, SpaceTag } from "../../components/small-component";

export type BanerItem = {
	bannerTitle?: string;
	bannerImage?: string;
	bannerText?: string;
};
export type BannerProps = {
	BanerItems?: BanerItem[];
};
export function Banner({ BanerItems }: BannerProps) {
	return (
		<>
			{BanerItems === undefined ? (
				<></>
			) : (
				<>
					{BanerItems.map((item, i) => (
						<BannerBar banner={item.bannerImage}>
							<Container>
								<Row>
									<Column sm={6} mdOffset={3}>
										<SpaceTag marginTop="60">
											<Subtext
												color="#fff"
												fontSize="26px"
												letterSpacing="0px"
												lineHeight="20px"
											>
												{item.bannerTitle}
											</Subtext>
											<br />
											<Subtext
												color="#fff"
												fontSize="20px"
												letterSpacing="0.26px"
												lineHeight="20px"
											>
												{item.bannerText}
											</Subtext>
										</SpaceTag>
										<SpaceTag marginTop="50">
											<Subtext
												color="#fff"
												fontSize="20px"
												letterSpacing="0.26px"
												lineHeight="20px"
											>
												Explore More {">"}
											</Subtext>
										</SpaceTag>
									</Column>
								</Row>
							</Container>
						</BannerBar>
					))}
				</>
			)}
		</>
	);
}
