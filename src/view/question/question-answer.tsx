import React from "react";
import Link from "next/link";
import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine
} from "../../components/small-component";
import { Dat, Year, Month, Minutes, Hour } from "../../components/date-time";
import * as ProfileImg from "../../img/dummy-profile.png";

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
	height?: string;
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

export function QuestionAnswer({ QuestionItems }: QuestionProps) {
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

	return (
		<>
			{QuestionItems.map((items, i) => (
				<>
					<Row>
						<Column md={12} sm={12} xs={12}>
							<FlexTag justifyContent="flex-end">
								<SpaceTag
									marginRight="10"
									marginTop="40"
									marginBottom="0"
								>
									<Link href="/forum">
										<LoadMorebutton
											fontSize="15px"
											padding="5px"
											border="0.4px solid #029532"
											background="#029532"
											color="#fff"
											width="100px"
											height="30px"
										>
											Back
										</LoadMorebutton>
									</Link>
								</SpaceTag>
							</FlexTag>
						</Column>
					</Row>
					<SpaceTag marginTop="0" marginBottom="10">
						<Row>
							<Column md={12} sm={12} xs={12}>
								<FlexTag justifyContent="space-between">
									<SpaceTag
										marginRight="10"
										marginTop="10"
										marginBottom="10"
									>
										<Subtext
											fontSize="17px"
											color="#232323"
											letterSpacing="0.10px"
										>
											{items.expertise}
										</Subtext>
									</SpaceTag>
								</FlexTag>

								<SpaceTag marginTop="5" marginBottom="5">
									<Subtext
										fontSize="16px"
										color="#4F4F4F"
										lineHeight="1.5"
										letterSpacing="0.10px"
									>
										{items.queryText}
									</Subtext>
								</SpaceTag>
								<SpaceTag
									marginTop="5"
									marginBottom="10"
									marginRight="-15"
								>
									<Row>
										<Column sm={12} md={12} xs={12}>
											<FlexTag>
												<SpaceTag
													marginRight="10"
													marginTop="5"
													marginLeft="-15"
												>
													<Subtext
														fontSize="13px"
														color="#4F4F4F"
													>
														{items.subExpertise}
													</Subtext>
												</SpaceTag>
												<SpaceTag marginTop="0">
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
													marginTop="5"
												>
													<Subtext
														fontSize="13px"
														color="#4F4F4F"
													>
														{getDate(
															items.timestamp
														)}
													</Subtext>
												</SpaceTag>
												<SpaceTag marginTop="0">
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
													marginTop="5"
												>
													<Subtext
														fontSize="13px"
														color="#4F4F4F"
													>
														{getHoursMinutes(
															items.timestamp
														)}
													</Subtext>
												</SpaceTag>
											</FlexTag>
										</Column>
									</Row>
								</SpaceTag>
							</Column>
						</Row>
						<div>
							{items.answers ? (
								<>
									{items.answers.map((item, i) => (
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
																? item
																		.consultant
																		.image
																: ProfileImg
														}
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
													>
														<Subtext
															fontSize="17px"
															color="#232323"
															letterSpacing="0.10px"
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
													marginRight="-15px"
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
																		items.expertise
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
																letterSpacing="0.10px"
																lineHeight="1.5"
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
								<div></div>
							)}
						</div>
					</SpaceTag>
				</>
			))}
		</>
	);
}
