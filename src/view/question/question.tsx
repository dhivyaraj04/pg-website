import React from "react";
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
};

export function Question({
	QuestionItems,
	windowwidth,
	onClickEvent
}: QuestionProps) {
	const [open, setOpen] = React.useState({ id: "" });

	function ViewMore(queryId) {
		onClickEvent(queryId);
	}
	function getForumQuery(queryId) {
		setOpen({ id: queryId });
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
		const t = text.substring(0, 200);
		const t1 = text.substring(0, 70);
		const wordString = windowwidth > width ? t : t1;
		return wordString;
	}
	function getWordLength(text) {
		const stri = text.length;
		return stri;
	}
	const width = 770;
	const test = windowwidth > width ? 200 : 70;
	return (
		<>
			<SpaceTag marginTop="20" marginBottom="50">
				<CardBlock borderRadius="10px" border="1px solid #D0D7DC">
					<Row>
						<Column md={1} sm={2} xs={2}>
							<SpaceTag
								marginLeft="10"
								marginRight="10"
								marginTop="5"
								marginBottom="5"
							>
								<ImageTag
									src={QuestionItems.image}
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
									marginTop="5"
									marginBottom="5"
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
									marginTop="5"
									marginBottom="5"
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

							<SpaceTag marginTop="5" marginBottom="5">
								<Subtext
									fontSize="15px"
									color="#4F4F4F"
									letterSpacing="0.10px"
									lineHeight="1.5"
								>
									{getString(QuestionItems.queryText)}
									{getWordLength(QuestionItems.queryText) >
									test ? (
										<LoadMorebutton
											border="none"
											background="none"
											color="#029532"
											onClick={() =>
												ViewMore(QuestionItems._id)
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
								marginTop="5"
								marginBottom="5"
								marginRight="-15"
							>
								<HorizontalLine borderTop="1px solid #E0E0E0">
									<Row>
										<Column sm={12} md={6} xs={12}>
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
														{
															QuestionItems.subExpertise
														}
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
															QuestionItems.timestamp
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
											{QuestionItems.answers ? (
												<SpaceTag
													marginRight="10"
													marginTop="5"
												>
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
				</CardBlock>
			</SpaceTag>
		</>
	);
}
