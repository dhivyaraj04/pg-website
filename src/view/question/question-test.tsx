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
	function getForumQuery(queryId, e) {
		setOpen({ id: queryId });
		setHeight(parseInt(e.target.id));
		getItemSize(e.target.id);
		console.log(e.target.parentNode.id);
		document.getElementById(e.target.parentNode.id).style.height = "auto";
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
	React.useEffect(() => {}, [heights]);

	const Rows = ({ index, isScrolling, style }) => (
		<div style={style} className="overFlow" id={index}>
			{isScrolling ? (
				"Loading ..."
			) : (
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
										src={QuestionItems[index].image}
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
											{QuestionItems[index].expertise}
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
												QuestionItems[index]
													.queryType === "PRIVATE"
													? "#FF3140"
													: "#029532"
											}
											width="125px"
											border={
												QuestionItems[index]
													.queryType === "PRIVATE"
													? "1px solid #FF3140"
													: "1px solid #029532"
											}
										>
											{QuestionItems[index].queryType}
										</LoadMorebutton>
									</SpaceTag>
								</FlexTag>

								<SpaceTag marginTop="5" marginBottom="10">
									<Subtext fontSize="16px" color="#4F4F4F">
										{QuestionItems[index].queryText}
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
															{
																QuestionItems[
																	index
																].subExpertise
															}
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
																QuestionItems[
																	index
																].timestamp
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
																QuestionItems[
																	index
																].timestamp
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
												{QuestionItems[index]
													.answers ? (
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
																QuestionItems[
																	index
																]._id
																	? "#029532"
																	: "none"
															}`}
															color={`${
																open.id ===
																QuestionItems[
																	index
																]._id
																	? "#fff"
																	: "#029532"
															}`}
															onClick={e =>
																getForumQuery(
																	QuestionItems[
																		index
																	]._id,
																	e
																)
															}
															width="150px"
															height="30px"
														>
															{getArrayCount(
																QuestionItems[
																	index
																].answers
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
								open.id === QuestionItems[index]._id
									? "accordionactive"
									: "accordion"
							}`}
						>
							{QuestionItems[index].answers ? (
								<>
									{QuestionItems[index].answers.map(
										(item, i) => (
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
																	item
																		.consultant
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
																			QuestionItems[
																				index
																			]
																				.expertise
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
																	{
																		item.answer
																	}
																</Subtext>
															</SpaceTag>
														</HorizontalLine>
													</SpaceTag>
												</Column>
											</Row>
										)
									)}
								</>
							) : (
								<></>
							)}
						</div>
					</CardBlock>
					<br />
				</>
			)}
		</div>
	);

	function getItemSize(index) {
		const row2 = 300;
		return row2;
	}

	return (
		<SpaceTag marginTop="20" marginBottom="50">
			<div style={{ width: "100%", height: "100vh" }}>
				<AutoSizer>
					{({ height, width }) => (
						<List
							height={height}
							itemCount={QuestionItems.length}
							itemSize={getItemSize}
							width={width}
							useIsScrolling
						>
							{Rows}
						</List>
					)}
				</AutoSizer>
			</div>
		</SpaceTag>
	);
}
