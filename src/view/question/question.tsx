import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine,
	CardBlock
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
	onClickEvent?: (id: string) => void;
	windowwidth?: number;
	open?: { id: string };
};

export function Question({
	QuestionItems,
	windowwidth,
	onClickEvent,
	open
}: QuestionProps) {
	function ViewMore(queryId) {
		onClickEvent(queryId);
	}
	function getForumQuery(queryId) {
		onClickEvent(queryId);
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
	function getString(text) {
		const width = 770;
		const t = text.substring(0, 70);
		const t1 = text.substring(0, 15);
		const wordString = windowwidth > width ? t : t1;
		return wordString;
	}
	function getWordLength(text) {
		const stri = text.length;
		return stri;
	}
	const width = 770;
	const test = windowwidth > width ? 70 : 15;
	const marginBottomfortext = windowwidth > width ? 20 : 10;
	const marginTopforButtom = windowwidth > width ? 15 : 5;
	const marginTopforSlash = windowwidth > width ? 10 : 0;
	const fontText = windowwidth > width ? "13px" : "11px";
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
											marginLeft="-5"
											marginRight="10"
											marginTop="20"
											marginBottom="10"
										>
											<ImageTag
												src={QuestionItems.image}
												height="40"
												width="40"
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
													fontSize="17px"
													color="#232323"
													letterSpacing="0.10px"
												>
													{QuestionItems.expertise}
												</Subtext>
											</SpaceTag>
											<SpaceTag
												marginRight="10"
												marginTop="20"
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
											marginBottom={marginBottomfortext}
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
													<LoadMorebutton
														border="none"
														background="none"
														color="#029532"
														onClick={() =>
															ViewMore(
																QuestionItems._id
															)
														}
													>
														...view more
													</LoadMorebutton>
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
																marginTop={
																	marginTopforButtom
																}
																marginLeft="-15"
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
																>
																	{
																		QuestionItems.subExpertise
																	}
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginTop={
																	marginTopforSlash
																}
															>
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
																marginTop={
																	marginTopforButtom
																}
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
																>
																	{getDate(
																		QuestionItems.timestamp
																	)}
																</Subtext>
															</SpaceTag>
															<SpaceTag
																marginTop={
																	marginTopforSlash
																}
															>
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
																marginTop={
																	marginTopforButtom
																}
																marginBottom="5"
															>
																<Subtext
																	fontSize={
																		fontText
																	}
																	color="#4F4F4F"
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
															marginRight="10"
															marginTop={
																marginTopforButtom
															}
															marginBottom="5"
														>
															{QuestionItems.answers ? (
																<LoadMorebutton
																	fontSize="13px"
																	padding="3px"
																	border="0.4px solid #029532"
																	background={`${
																		open.id ===
																		QuestionItems._id
																			? "#029532"
																			: "none"
																	}`}
																	color={`${
																		open.id ===
																		QuestionItems._id
																			? "#fff"
																			: "#029532"
																	}`}
																	onClick={e =>
																		getForumQuery(
																			QuestionItems._id
																		)
																	}
																	width="150px"
																	height="27px"
																>
																	{getArrayCount(
																		QuestionItems.answers
																	)}
																</LoadMorebutton>
															) : (
																<></>
															)}
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
