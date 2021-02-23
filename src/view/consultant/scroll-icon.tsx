import React from "react";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	BannerBar,
	Subtext,
	SpaceTag,
	CenterTag,
	CardBlock,
	FlexTag,
	CursorTag,
	ImageTag
} from "../../components/small-component";
import { Card } from "../../components/card/card";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";

export type WorkItem = {
	_id?: string;
	name?: string;
	image?: string;
};
export type WorkProps = {
	WorkItems?: WorkItem[];
};
export function ScrollIcon({ WorkItems }: WorkProps) {
	return (
		<>
			<Container>
				<SpaceTag marginTop="40">
					<Container>
						<Row>
							<Carousel
								showArrows={false}
								itemsToScroll={1}
								itemsToShow={5}
							>
								{WorkItems.map((item, i) => (
									<Card
										borderRadius="0"
										margin="auto"
										textAlign="center"
										height="100px"
										width="-webkit-fill-available"
									>
										<Link href={`/expertis/${item._id}`}>
											<CursorTag>
												<ImageTag src={item.image} />
												<Subtext
													color="#000000"
													fontSize="14px"
													letterSpacing="0px"
													lineHeight="20px"
												>
													{item.name}
												</Subtext>
											</CursorTag>
										</Link>
									</Card>
								))}
							</Carousel>
						</Row>
					</Container>
				</SpaceTag>
			</Container>
			<br />
		</>
	);
}
