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

export function Banner() {
	return (
		<BannerBar>
			<Container>
				<Row>
					<Column sm={6} mdOffset={3}>
						<SpaceTag marginTop="60">
							<H2tag>Judgement Day</H2tag>
							<Spantag>
								10% Discount on all <br />
								laywer Consultants
							</Spantag>
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
	);
}
