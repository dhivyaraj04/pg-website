import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	BannerBar,
	H2tag,
	Spantag,
	SpaceTag,
	Atag
} from "../../components/small-component";

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
											<H2tag>{item.bannerTitle}</H2tag>
											<Spantag>{item.bannerText}</Spantag>
										</SpaceTag>
										<SpaceTag marginTop="50">
											<Atag color="#fff" fontSize="18">
												Explore More {">"}
											</Atag>
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
