import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";

import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine,
	CardBlock,
	Overflow
} from "../../components/small-component";
import { Dat, Year, Month, Minutes, Hour } from "../../components/date-time";
export type QuestionItem = {
	expertise?: string;
	expertiseId?: string;
	image?: string;
	queryText?: string;
	queryTitle?: string;
	queryType?: string;
	subExpertise?: string;
	timestamp?: string;
	userId?: string;
	_id?: string;
	answers?: [
		{
			answer?: string;
			createdAt?: string;
			consultant?: {
				_id?: string;
				name?: string;
				expertise?: string;
				image?: string;
			};
		}
	];
};
export type QuestionProps = {
	QuestionItems?: QuestionItem[];
};

export function Question({ QuestionItems }: QuestionProps) {
	const [open, setOpen] = React.useState({ id: "" });
	const [heights, setHeight] = React.useState(0);
	function getForumQuery(queryId) {
		setOpen({ id: queryId });
		// setHeight(parseInt(e.target.id));
		// getItemSize(e.target.id);
		// console.log(e.target.parentNode.id);
		// document.getElementById(e.target.parentNode.id).style.height = "auto";
	}
	function getDate(timestamp) {
		const DateMonthYear =
			Dat(timestamp) + " " + Month(timestamp) + " " + Year(timestamp);
		return DateMonthYear;
	}
	function getHoursMinutes(timestamp) {
		const suffix = Hour(timestamp) >= 12 ? "PM" : "AM";
		const HoursMinutes =
			Hour(timestamp) + ":" + Minutes(timestamp) + " " + suffix;
		return HoursMinutes;
	}
	function getArrayCount(array) {
		const length = array.length;
		return length + " " + "Answers";
	}

	return (
		<SpaceTag marginTop="20" marginBottom="50">
			{QuestionItems.map((list, i) => (
				<>
					<CardBlock borderRadius="10px" border="1px solid #D0D7DC">
						<Row>
							<Column md={1} sm={2} xs={2}>
								<SpaceTag
									marginLeft="10"
									marginRight="10"
									marginTop="10"
									marginBottom="10"
								>
									<ImageTag
										src={list.image}
										height="40"
										width="40"
										borderRadius="50%"
									/>
								</SpaceTag>
							</Column>
							<Column md={11} sm={10} xs={10}>
								<FlexTag>
									<SpaceTag
										marginRight="10"
										marginTop="10"
										marginBottom="10"
									>
										<Subtext
											fontSize="18px"
											color="#232323"
										>
											{list.expertise}
										</Subtext>
									</SpaceTag>
									<SpaceTag
										marginRight="10"
										marginTop="10"
										marginBottom="10"
									>
										<LoadMorebutton
											fontSize="13px"
											padding="5px"
											background="none"
											color={
												list.queryType === "PRIVATE"
													? "#FF3140"
													: "#029532"
											}
											width="125px"
											border={
												list.queryType === "PRIVATE"
													? "1px solid #FF3140"
													: "1px solid #029532"
											}
										>
											{list.queryType}
										</LoadMorebutton>
									</SpaceTag>
								</FlexTag>

								<SpaceTag marginTop="5" marginBottom="10">
									<Subtext fontSize="16px" color="#4F4F4F">
										{list.queryText}
									</Subtext>
								</SpaceTag>
								<SpaceTag
									marginTop="20"
									marginBottom="20"
									marginRight="-15"
								>
									<HorizontalLine borderTop="1px solid #E0E0E0">
										<Row>
											<Column sm={12} md={6} xs={12}>
												<FlexTag>
													<SpaceTag
														marginRight="10"
														marginTop="10"
													>
														<Subtext
															fontSize="14px"
															color="#4F4F4F"
														>
															{list.subExpertise}
														</Subtext>
													</SpaceTag>
													<SpaceTag marginTop="6">
														<Subtext
															fontSize="20px"
															color="#4F4F4F"
														>
															|
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
															{getDate(
																list.timestamp
															)}
														</Subtext>
													</SpaceTag>
													<SpaceTag marginTop="6">
														<Subtext
															fontSize="20px"
															color="#4F4F4F"
														>
															|
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
															{getHoursMinutes(
																list.timestamp
															)}
														</Subtext>
													</SpaceTag>
												</FlexTag>
											</Column>
											<Column
												xs={12}
												md={6}
												sm={12}
												className="padding"
											>
												{list.answers ? (
													<SpaceTag
														marginRight="10"
														marginTop="5"
													>
														<LoadMorebutton
															fontSize="14px"
															padding="5px"
															border="0.4px solid #029532"
															background={`${
																open.id ===
																list._id
																	? "#029532"
																	: "none"
															}`}
															color={`${
																open.id ===
																list._id
																	? "#fff"
																	: "#029532"
															}`}
															onClick={() =>
																getForumQuery(
																	list._id
																)
															}
															width="150px"
															height="30px"
														>
															{getArrayCount(
																list.answers
															)}
														</LoadMorebutton>
													</SpaceTag>
												) : (
													<></>
												)}
											</Column>
										</Row>
									</HorizontalLine>
								</SpaceTag>
							</Column>
						</Row>
						<div
							className={`${
								open.id === list._id
									? "accordionactive"
									: "accordion"
							}`}
						>
							{list.answers ? (
								<>
									{list.answers.map((item, i) => (
										<Row>
											<Column md={1} sm={2} xs={2}>
												<SpaceTag
													marginLeft="10"
													marginRight="10"
													marginTop="10"
													marginBottom="10"
												>
													<ImageTag
														src={
															item.consultant
																.image
														}
														height="40"
														width="40"
														borderRadius="50%"
													/>
												</SpaceTag>
											</Column>
											<Column
												md={11}
												sm={10}
												xs={10}
												className="padding"
											>
												<FlexTag>
													<SpaceTag
														marginRight="10"
														marginTop="10"
													>
														<Subtext
															fontSize="22px"
															color="#232323"
														>
															{
																item.consultant
																	.name
															}
														</Subtext>
													</SpaceTag>
												</FlexTag>

												<SpaceTag
													marginBottom="10"
													marginRight="-15"
												>
													<HorizontalLine borderBottom="1px solid #E0E0E0">
														<FlexTag>
															<SpaceTag
																marginRight="10"
																marginTop="10"
															>
																<Subtext
																	fontSize="14px"
																	color="#AFAFAF"
																>
																	{
																		list.expertise
																	}
																</Subtext>
															</SpaceTag>
															<SpaceTag marginTop="6">
																<Subtext
																	fontSize="20px"
																	color="#AFAFAF"
																>
																	|
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginLeft="10"
																marginRight="10"
																marginTop="10"
															>
																<Subtext
																	fontSize="14px"
																	color="#AFAFAF"
																>
																	{getDate(
																		item.createdAt
																	)}
																</Subtext>
															</SpaceTag>
															<SpaceTag marginTop="6">
																<Subtext
																	fontSize="20px"
																	color="#AFAFAF"
																>
																	|
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginLeft="10"
																marginRight="10"
																marginTop="10"
															>
																<Subtext
																	fontSize="14px"
																	color="#AFAFAF"
																>
																	{getHoursMinutes(
																		item.createdAt
																	)}
																</Subtext>
															</SpaceTag>
														</FlexTag>
														<SpaceTag
															marginTop="10"
															marginBottom="10"
														>
															<Subtext
																fontSize="16px"
																color="AFAFAF"
															>
																{item.answer}
															</Subtext>
														</SpaceTag>
													</HorizontalLine>
												</SpaceTag>
											</Column>
										</Row>
									))}
								</>
							) : (
								<div>loading</div>
							)}
						</div>
					</CardBlock>
					<br />
				</>
			))}
		</SpaceTag>
	);
}
