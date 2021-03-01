import React from "react";
import Link from "next/link";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine,
	CardBlock,
	CursorTag,
	ViewMoreTag
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
	QuestionItems?: QuestionItem;
	windowwidth?: number;
};

export function Question({ QuestionItems, windowwidth }: QuestionProps) {
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
		const len = length === 0 ? "" : length;
		return len + " " + "Answers";
	}
	function getString(text) {
		const width = 770;
		const t = text.substring(0, 110);
		const t1 = text.substring(0, 27);
		const wordString = windowwidth > width ? t : t1;
		return wordString;
	}
	function getWordLength(text) {
		const stri = text.length;
		return stri;
	}
	const width = 770;
	const test = windowwidth > width ? 110 : 27;
	const marginBottomfortext = windowwidth > width ? 20 : 10;
	const marginTopforButtom = windowwidth > width ? 15 : 5;
	const marginTopforSlash = windowwidth > width ? 10 : 0;
	const fontText = windowwidth > width ? "13px" : "11px";
	const fontTitle = windowwidth > width ? "17px" : "15px";
	const profilePic = windowwidth > width ? "40" : "30";
	function getWord(test) {
		const t = test.substring(0, 40);
		const tes = t.trim().replace(/[ -]+/g, "-");
		return tes;
	}

	return (
		<>
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<SpaceTag marginTop="5" marginBottom="5">
							<CardBlock
								borderRadius="10px"
								border="1px solid #D0D7DC"
							>
								<Row>
									<Column md={1} sm={2} xs={2}>
										<SpaceTag
											marginRight="10"
											marginTop="20"
											marginBottom="10"
										>
											<ImageTag
												src={QuestionItems.image}
												height={profilePic}
												width={profilePic}
												borderRadius="50%"
												border="1px solid #E3E3E3"
											/>
										</SpaceTag>
									</Column>
									<Column md={11} sm={10} xs={10}>
										<FlexTag>
											<SpaceTag
												marginRight="10"
												marginTop="20"
												marginBottom="10"
											>
												<Subtext
													fontSize={fontTitle}
													color="#232323"
													letterSpacing="0.10px"
													lineHeight="1"
												>
													{QuestionItems.expertise}
												</Subtext>
											</SpaceTag>
											<SpaceTag
												marginRight="10"
												marginTop="15"
												marginBottom="10"
											>
												<LoadMorebutton
													fontSize="13px"
													padding="5px"
													background="none"
													color={
														QuestionItems.queryType ===
														"PRIVATE"
															? "#FF3140"
															: "#029532"
													}
													width="125px"
													border={
														QuestionItems.queryType ===
														"PRIVATE"
															? "1px solid #FF3140"
															: "1px solid #029532"
													}
												>
													{QuestionItems.queryType}
												</LoadMorebutton>
											</SpaceTag>
										</FlexTag>

										<SpaceTag
											marginTop="10"
											marginBottom="20"
										>
											<Subtext
												fontSize="15px"
												color="#4F4F4F"
												letterSpacing="0.10px"
												lineHeight="1.5"
											>
												{getString(
													QuestionItems.queryText
												)}

												{getWordLength(
													QuestionItems.queryText
												) > test ? (
													<Link
														href={`/forum-query/${getWord(
															QuestionItems.queryText
														)}/${
															QuestionItems._id
														}`}
													>
														<ViewMoreTag
															border="none"
															background="none"
															color="#029532"
														>
															...view more
														</ViewMoreTag>
													</Link>
												) : (
													""
												)}
											</Subtext>
										</SpaceTag>
										<SpaceTag
											marginTop="10"
											marginBottom="10"
											marginRight="-15"
										>
											<HorizontalLine borderTop="1px solid #E0E0E0">
												<Row>
													<Column
														sm={12}
														md={6}
														xs={12}
													>
														<FlexTag>
															<SpaceTag
																marginRight="10"
																marginTop="15"
																marginLeft="-15"
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
																	lineHeight="1"
																>
																	{
																		QuestionItems.subExpertise
																	}
																</Subtext>
															</SpaceTag>
															<SpaceTag marginTop="10">
																<Subtext
																	fontSize="20px"
																	color="#4F4F4F"
																	lineHeight="1"
																>
																	|
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginLeft="10"
																marginRight="10"
																marginTop="15"
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
																	lineHeight="1"
																>
																	{getDate(
																		QuestionItems.timestamp
																	)}
																</Subtext>
															</SpaceTag>
															<SpaceTag marginTop="10">
																<Subtext
																	fontSize="20px"
																	color="#4F4F4F"
																	lineHeight="1"
																>
																	|
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginLeft="10"
																marginRight="10"
																marginTop="15"
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
																	lineHeight="1"
																>
																	{getHoursMinutes(
																		QuestionItems.timestamp
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
														<SpaceTag
															className={
																QuestionItems.answers
																	? "displayBlock"
																	: "displayHidden"
															}
															marginRight="10"
															marginTop="10"
															marginBottom="5"
														>
															<Link
																href={`/forum-query/${getWord(
																	QuestionItems.queryText
																)}/${
																	QuestionItems._id
																}`}
															>
																<ViewMoreTag
																	fontSize="13px"
																	padding="5px 15px 5px 15px;"
																	border="0.4px solid #029532"
																	background="none"
																	color="#029532"
																	width="150px"
																	height="27px"
																>
																	{QuestionItems.answers
																		? getArrayCount(
																				QuestionItems.answers
																		  )
																		: "test"}
																</ViewMoreTag>
															</Link>
														</SpaceTag>
													</Column>
												</Row>
											</HorizontalLine>
										</SpaceTag>
									</Column>
								</Row>
							</CardBlock>
						</SpaceTag>
					</Column>
				</Row>
				<SpaceTag marginTop="20" marginBottom="20" />
			</Container>
		</>
	);
}
