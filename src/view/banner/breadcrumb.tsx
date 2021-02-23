import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	BreadCrumbBannerBar,
	Subtext,
	SpaceTag,
	CenterTag
} from "../../components/small-component";

export type BanerItem = {
	bannerTitle?: string;
	bannerImage?: string;
	bannerText?: string;
	explore?: string;
};
export type BannerProps = {
	BanerItems?: BanerItem[];
};
export function BreadCrumb({ BanerItems }: BannerProps) {
	return (
		<>
			{BanerItems === undefined ? (
				<></>
			) : (
				<>
					{BanerItems.map((item, i) => (
						<BreadCrumbBannerBar banner={item.bannerImage}>
							<Container>
								<Row>
									<Column sm={12} md={12} xs={12}>
										<SpaceTag marginTop="45">
											<CenterTag>
												<Subtext
													color="#fff"
													fontSize="26px"
													letterSpacing="0px"
													lineHeight="20px"
												>
													{item.bannerTitle}
												</Subtext>
											</CenterTag>
										</SpaceTag>
									</Column>
								</Row>
							</Container>
						</BreadCrumbBannerBar>
					))}
				</>
			)}
		</>
	);
}
