import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import Modal from "react-modal";
import { Column, Row } from "styled-grid-system-component";
import {
	SpaceTag,
	FlexTag,
	Subtext,
	ImageTag,
	LoadMorebutton,
	HorizontalLine,
	CardBlock,
	Overflow,
	Horizontaltag
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
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [array, setArray] = React.useState([]);
	function getForumQuery(queryId) {
		setOpen({ id: queryId });
		setIsOpen(true);
		let bigCities = QuestionItems.filter(city => city._id === queryId);
		setArray(bigCities);
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

	function closeModal() {
		setIsOpen(false);
	}

	const customStyles = {
		overlay: {
			backgroundColor: "#2125293b"
		},
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "80%"
		}
	};
	const Rows = ({ index, isScrolling, style }) => (
		<div className="overFlow" id={index} style={style}>
			<>
				<CardBlock
					id={index}
					borderRadius="10px"
					border="1px solid #D0D7DC"
				>
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
										fontSize="17px"
										color="#232323"
										letterSpacing="0.10px"
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
											QuestionItems[index].queryType ===
											"PRIVATE"
												? "#FF3140"
												: "#029532"
										}
										width="125px"
										border={
											QuestionItems[index].queryType ===
											"PRIVATE"
												? "1px solid #FF3140"
												: "1px solid #029532"
										}
									>
										{QuestionItems[index].queryType}
									</LoadMorebutton>
								</SpaceTag>
							</FlexTag>

							<SpaceTag marginTop="5" marginBottom="5">
								<Horizontaltag height="70px">
									<Subtext
										fontSize="16px"
										color="#4F4F4F"
										letterSpacing="0.10px"
										lineHeight="1.2"
									>
										{QuestionItems[index].queryText}
									</Subtext>
								</Horizontaltag>
							</SpaceTag>
							<SpaceTag
								marginTop="5"
								marginBottom="10"
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
															QuestionItems[index]
																.subExpertise
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
															QuestionItems[index]
																.timestamp
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
															QuestionItems[index]
																.timestamp
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
											{QuestionItems[index].answers ? (
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
															QuestionItems[index]
																._id
																? "#029532"
																: "none"
														}`}
														color={`${
															open.id ===
															QuestionItems[index]
																._id
																? "#fff"
																: "#029532"
														}`}
														onClick={e =>
															getForumQuery(
																QuestionItems[
																	index
																]._id
															)
														}
														width="150px"
														height="27px"
													>
														{getArrayCount(
															QuestionItems[index]
																.answers
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
				<br />
			</>
		</div>
	);
	return (
		<>
			<SpaceTag marginTop="20" marginBottom="50">
				<div style={{ width: "100%", height: "100vh" }}>
					<AutoSizer>
						{({ height, width }) => (
							<List
								height={height}
								itemCount={QuestionItems.length}
								itemSize={220}
								width={width}
								useIsScrolling
							>
								{QuestionItems ? Rows : "loadding"}
							</List>
						)}
					</AutoSizer>
				</div>
			</SpaceTag>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<SpaceTag marginTop="20" marginBottom="50">
					{array.map((list, i) => (
						<>
							<CardBlock
								borderRadius="10px"
								border="1px solid #D0D7DC"
							>
								<Row>
									<Column md={1} sm={2} xs={2}>
										<SpaceTag
											marginLeft="5"
											marginRight="5"
											marginTop="5"
											marginBottom="5"
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
												marginRight="5"
												marginTop="5"
												marginBottom="5"
											>
												<Subtext
													fontSize="18px"
													color="#232323"
												>
													{list.expertise}
												</Subtext>
											</SpaceTag>
											<SpaceTag
												marginRight="5"
												marginTop="5"
												marginBottom="5"
											>
												<LoadMorebutton
													fontSize="13px"
													padding="5px"
													background="none"
													color={
														list.queryType ===
														"PRIVATE"
															? "#FF3140"
															: "#029532"
													}
													width="125px"
													border={
														list.queryType ===
														"PRIVATE"
															? "1px solid #FF3140"
															: "1px solid #029532"
													}
												>
													{list.queryType}
												</LoadMorebutton>
											</SpaceTag>
										</FlexTag>

										<SpaceTag
											marginTop="5"
											marginBottom="5"
										>
											<Subtext
												fontSize="16px"
												color="#4F4F4F"
												letterSpacing="0.10px"
												lineHeight="1.2"
											>
												{list.queryText}
											</Subtext>
										</SpaceTag>
										<SpaceTag
											marginTop="5"
											marginBottom="5"
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
																marginTop="5"
																marginLeft="-15"
															>
																<Subtext
																	fontSize="13px"
																	color="#4F4F4F"
																>
																	{
																		list.subExpertise
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
																		list.timestamp
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
																	padding="3px"
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
																	width="150px"
																	height="28px"
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
								<div>
									{list.answers ? (
										<>
											{list.answers.map((item, i) => (
												<Row>
													<Column
														md={1}
														sm={2}
														xs={2}
													>
														<SpaceTag
															marginLeft="10"
															marginRight="10"
															marginTop="10"
															marginBottom="10"
														>
															<ImageTag
																src={
																	item
																		.consultant
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
																		{
																			item.answer
																		}
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
			</Modal>
		</>
	);
}
