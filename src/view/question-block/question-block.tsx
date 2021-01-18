import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import { SearchBox } from "../../components/search-box/search-box";
import {
	Paratag,
	SpaceTag,
	BoxContainer,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine,
	CardBlock,
	SearchBlock
} from "../../components/small-component";
import * as Profile from "../../img/profile-1.png";

export type AnswersItem = {
	answer?: string;
	createdAt?: string;
	consultant?: {
		expertise?: string;
		image?: string;
		name?: string;
		_id?: string;
	};
};
export type AnswersProps = {
	AnswersItems?: AnswersItem[];
};
export function QuestionBlock({ AnswersItems }: AnswersProps) {
	return (
		<>
			<CardBlock
				borderRadius="10px"
				border="2px solid #E8EEF3"
				padding="5px"
			>
				<Row>
					<Column md={10} sm={10} xs={10}>
						<SpaceTag
							marginLeft="10"
							marginRight="10"
							marginTop="10"
							marginBottom="10"
						>
							<SearchBox />
						</SpaceTag>
					</Column>
					<Column md={2} sm={2} xs={2}>
						<SpaceTag
							marginLeft="-10"
							marginRight="10"
							marginTop="10"
							marginBottom="10"
						>
							<LoadMorebutton
								fontSize="16px"
								padding="12px"
								background="#009846"
								color="#fff"
								width="150px"
								height="45px"
							>
								Ask a Query
							</LoadMorebutton>
						</SpaceTag>
					</Column>
				</Row>
			</CardBlock>
			<br />
			<CardBlock borderRadius="10px" border="1px solid #D0D7DC">
				<Row>
					<Column md={1} sm={1} xs={1}>
						<SpaceTag
							marginLeft="10"
							marginRight="10"
							marginTop="10"
							marginBottom="10"
						>
							<ImageTag
								src={Profile}
								height="40"
								width="40"
								borderRadius="50%"
							/>
						</SpaceTag>
					</Column>
					<Column md={11} sm={11} xs={11}>
						<FlexTag>
							<SpaceTag
								marginRight="10"
								marginTop="10"
								marginBottom="10"
							>
								<Subtext fontSize="22px" color="#232323">
									Weight Loss
								</Subtext>
							</SpaceTag>
							<SpaceTag
								marginRight="10"
								marginTop="10"
								marginBottom="10"
							>
								<LoadMorebutton
									fontSize="16px"
									padding="5px"
									background="none"
									color="#029532"
									width="125px"
								>
									Public
								</LoadMorebutton>
							</SpaceTag>
						</FlexTag>

						<SpaceTag marginTop="10" marginBottom="10">
							<Subtext fontSize="16px" color="#4F4F4F">
								What exercise should we follow to maintain
								balance weight?
							</Subtext>
						</SpaceTag>
						<SpaceTag marginBottom="10" marginRight="-15">
							<HorizontalLine
								borderTop="1px solid #E0E0E0"
								borderBottom="1px solid #E0E0E0"
							>
								<FlexTag>
									<SpaceTag
										marginRight="5"
										marginTop="10"
										marginBottom="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											Fitness |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="5"
										marginRight="10"
										marginTop="10"
										marginBottom="5"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											25 Oct 2020 |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="5"
										marginRight="5"
										marginTop="10"
										marginBottom="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											12:30 PM
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginRight="5"
										marginTop="5"
										marginBottom="10"
									>
										<LoadMorebutton
											fontSize="14px"
											padding="5px"
											backgroun="none"
											color="#029532"
										>
											2 Answers
										</LoadMorebutton>
									</SpaceTag>
								</FlexTag>
							</HorizontalLine>
						</SpaceTag>
					</Column>
				</Row>
				<Row>
					<Column md={1} sm={1} xs={1}>
						<SpaceTag
							marginLeft="10"
							marginRight="10"
							marginTop="10"
							marginBottom="10"
						>
							<ImageTag
								src={Profile}
								height="40"
								width="40"
								borderRadius="50%"
							/>
						</SpaceTag>
					</Column>
					<Column md={11} sm={11} xs={11}>
						<FlexTag>
							<SpaceTag marginRight="10" marginTop="10">
								<Subtext fontSize="22px" color="#232323">
									Weight Loss
								</Subtext>
							</SpaceTag>
						</FlexTag>

						<SpaceTag marginBottom="10" marginRight="-15">
							<HorizontalLine borderBottom="1px solid #E0E0E0">
								<FlexTag>
									<SpaceTag marginRight="5" marginTop="10">
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											Fitness |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="5"
										marginRight="5"
										marginTop="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											25 Oct 2020 |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="5"
										marginRight="5"
										marginTop="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											12:30 PM
										</Subtext>
									</SpaceTag>
								</FlexTag>
								<SpaceTag marginTop="10" marginBottom="10">
									<Subtext fontSize="16px" color="#4F4F4F">
										Health diet plays an important role in
										maintaining the balanced weight and few
										basic execise steps can make you
										proactive, select me as your fitness
										expert in protalk app to learn more and
										detailed step by step process.
									</Subtext>
								</SpaceTag>
							</HorizontalLine>
						</SpaceTag>
					</Column>
				</Row>
				<Row>
					<Column md={1} sm={1} xs={1}>
						<SpaceTag
							marginLeft="10"
							marginRight="10"
							marginTop="10"
							marginBottom="10"
						>
							<ImageTag
								src={Profile}
								height="40"
								width="40"
								borderRadius="50%"
							/>
						</SpaceTag>
					</Column>
					<Column md={11} sm={11} xs={11}>
						<FlexTag>
							<SpaceTag marginRight="10" marginTop="10">
								<Subtext fontSize="22px" color="#232323">
									Weight Loss
								</Subtext>
							</SpaceTag>
						</FlexTag>

						<SpaceTag marginBottom="10" marginRight="-15">
							<HorizontalLine borderBottom="1px solid #E0E0E0">
								<FlexTag>
									<SpaceTag marginRight="10" marginTop="10">
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											Fitness |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="10"
										marginRight="10"
										marginTop="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											25 Oct 2020 |
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginLeft="10"
										marginRight="10"
										marginTop="10"
									>
										<Subtext
											fontSize="14px"
											color="#4F4F4F"
										>
											12:30 PM
										</Subtext>
									</SpaceTag>
								</FlexTag>
								<SpaceTag marginTop="10" marginBottom="20">
									<Subtext fontSize="16px" color="#4F4F4F">
										Health diet plays an important role in
										maintaining the balanced weight and few
										basic execise steps can make you
										proactive, select me as your fitness
										expert in protalk app to learn more and
										detailed step by step process.
									</Subtext>
								</SpaceTag>
							</HorizontalLine>
						</SpaceTag>
					</Column>
				</Row>
			</CardBlock>
		</>
	);
}
