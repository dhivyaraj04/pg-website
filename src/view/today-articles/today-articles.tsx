import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	CardBlock
} from "../../components/small-component";

export type TodayArticlesItem = {
	id: string;
	image?: any;
	title?: string;
	content?: string;
	consultant?: {
		id?: string;
		image?: any;
		name?: string;
		expertise?: string;
	};
};
export type TodayArticlesItemProps = {
	TodayArticlesItems?: TodayArticlesItem[];
};
export function TodayArticles({ TodayArticlesItems }: TodayArticlesItemProps) {
	return (
		<Container>
			<SpaceTag marginTop="10" marginBottom="10">
				<>
					<SpaceTag
						marginTop="25"
						marginBottom="10"
						marginLeft="15"
						marginRight="15"
					>
						<Subtext fontSize="30px" color="#999" fontWeight="600">
							Top Articles for Today
						</Subtext>
					</SpaceTag>

					<Row>
						{TodayArticlesItems.map((list, i) => (
							<Column sm={6} md={3} xs={6}>
								<CardBlock>
									<ImageTag
										src={list.image}
										width="-webkit-fill-available"
									/>
									<SpaceTag
										marginLeft="6"
										marginTop="4"
										marginRight="6"
										marginBottom="4"
									>
										<Subtext
											fontSize="14px"
											color="#282828"
											letterSpacing="0.56px"
										>
											{list.title}
										</Subtext>

										<FlexTag>
											<SpaceTag
												marginLeft="5"
												marginTop="10"
											>
												<ImageTag
													src={list.consultant.image}
													width="25"
													height="25"
												/>
											</SpaceTag>
											<SpaceTag
												marginLeft="5"
												marginTop="10"
											>
												<Subtext
													fontSize="10px"
													color="#010101"
												>
													{list.consultant.name}
												</Subtext>
												<Subtext
													fontSize="10px"
													color="#979797"
												>
													{list.consultant.expertise}
												</Subtext>
											</SpaceTag>
										</FlexTag>
									</SpaceTag>
								</CardBlock>
							</Column>
						))}
					</Row>
				</>
			</SpaceTag>
		</Container>
	);
}
