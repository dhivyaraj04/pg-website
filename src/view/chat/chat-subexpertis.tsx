import React, { useEffect, useRef, useState } from "react";
import { ChatButton } from "../../components/button/button";
import {
	Subtext,
	CardBlock,
	SpaceTag,
	FlexTag,
	ImageTag,
	OrderTag,
	ListTag,
	LoadMorebutton,
	ChatContainer,
	ChatBot,
	ChatContent,
	ChatHeader,
	InputTag,
	HorizontalLine,
	ChatFooter
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import * as Logo from "../../img/logo.png";
import { BaseUrl } from "../../url";

export type expertisItem = {
	_id?: string;
	name?: string;
};
export type expertisProps = {
	expId?: string;
};

export function Chat({ expId }: expertisProps) {
	const [open, setOpen] = React.useState(false);
	const [buttonName, setButtonName] = React.useState({});
	const bottomRef = useRef(null);
	const [values, setValue] = useState("");
	const [typeBox, setTypeBox] = useState(false);
	const [messages, setMessages] = useState([]);
	const [subExpertise, setSubExpertise] = React.useState([]);
	const expertiseId = expId;
	const [subExpertiseId, setSubExpertiseId] = React.useState("");
	const [queryContent, setQueryContent] = React.useState("");
	const [queryTitle, setQueryTitle] = React.useState("");

	function onClickEvent() {
		setOpen(!open);
	}
	const scrollToBottom = () => bottomRef.current.scrollIntoView();

	function nextQuestion(name, id, e) {
		setButtonName({ ...buttonName, [name]: e.target.name });
		scrollToBottom();

		const dev = subExpertise.filter(eve => onSelectDevice(eve, name));
		setSubExpertiseId(dev[0]._id);
		dev.length === 0 ? "" : getQuery();
	}

	useEffect(() => {
		getSubExpertItem(expId);
	}, []);

	async function getSubExpertItem(expertiseId) {
		const res = await fetch(
			`${BaseUrl}/apiV2/expertise_subexpertise/${expertiseId}`,
			{
				method: "GET"
			}
		);
		const data = await res.json();
		const content = [
			{
				text: "Select your area of Sub expertise",
				button: data.subExpertise
			}
		];
		setSubExpertise(data.subExpertise);
		setMessages(messages.concat(content));
	}
	async function getQuery() {
		setTypeBox(true);
		const content = [
			{
				text: "Please provide your Query Title ?"
			}
		];
		setMessages(messages.concat(content));
	}
	const onSelectDevice = (deviceObj, sDevice) => {
		return deviceObj.name === sDevice;
	};

	function onChangeEvent(e: React.ChangeEvent): void {
		const { value } = e.target as HTMLInputElement;
		setValue(value);
	}
	function onSubmitEvent(event: React.FormEvent): void {
		event.preventDefault();
		setValue("");
	}
	function handleKeyDown(e) {
		const { value } = e.target as HTMLInputElement;

		if (e.key === "Enter") {
			var green = messages[messages.length - 1];
			green.text === "Please provide your Query Title ?"
				? getNextQuery(value)
				: "";
			green.text === "Please can you elaborate your Query ?"
				? getNextElaborateQuery(value)
				: "";
			green.text ===
			"Please provide your Mobile Number, so that we can forward you playstore link"
				? getPhone(value)
				: "";
		}
	}
	function getNextQuery(value) {
		setQueryTitle(value);
		const content = [
			{
				text1: value
			},
			{
				text: "Please can you elaborate your Query ?"
			}
		];
		setMessages(messages.concat(content));
		scrollToBottom();
	}
	function getNextElaborateQuery(value) {
		setQueryContent(value);
		const content = [
			{
				text1: value
			},
			{
				text:
					"Your query has been posted to our experts, you can find your query answer in your Protalk app"
			},
			{
				text:
					"Please provide your Mobile Number, so that we can forward you playstore link"
			}
		];
		setMessages(messages.concat(content));
		scrollToBottom();
	}
	function getPhone(value) {
		const content = [
			{
				text1: value
			},
			{
				text:
					"Thank you for you interest, We provide you 10% Discount coupon (“FIRSTPRO” Code) for your first service in protalk app"
			}
		];
		setMessages(messages.concat(content));
		postApi(value);
		setTypeBox(false);
		scrollToBottom();
	}
	function postApi(value) {
		const phon = value;
		fetch(`${BaseUrl}/apiV2/website_bot/create_request`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: expertiseId,
				subExpertiseId: subExpertiseId,
				queryTitle: queryTitle,
				queryContent: queryContent,
				phoneNumber: phon
			})
		}).then(response => {
			return response.json();
		});
	}
	return (
		<>
			<ChatContainer>
				<ChatButton onClickEvent={onClickEvent}>
					<Icon name={Icons.chat} />
				</ChatButton>
			</ChatContainer>
			{open === true ? (
				<ChatBot>
					<ChatHeader>
						<SpaceTag marginTop="10" marginBottom="10">
							<Subtext
								color="#fff"
								fontSize="20px"
								letterSpacing="0.56px"
								fontWeight="600"
							>
								Welcome to Protalk
							</Subtext>
						</SpaceTag>
						<SpaceTag marginTop="10" marginBottom="10">
							<Subtext
								color="#fff"
								fontSize="14px"
								letterSpacing="0.56px"
								fontWeight="400"
							>
								Budget Friendly Multi consultant application
							</Subtext>
						</SpaceTag>
					</ChatHeader>
					<ChatContent>
						<OrderTag>
							{messages.map((item, i) => (
								<div key={i}>
									{item.text ? (
										<ListTag>
											<FlexTag>
												<SpaceTag
													marginTop="10"
													marginBottom="10"
												>
													<ImageTag
														src={Logo}
														height="25"
														width="25"
														borderRadius="50%"
													/>
												</SpaceTag>
												<div>
													<CardBlock
														border="0.8px solid rgba(204, 206, 210, 0.5)"
														borderRadius=" 6px"
														padding="10px"
													>
														<Subtext
															color="#000"
															fontSize="12px"
															fontWeight="400"
															lineHeight="15px"
														>
															{item.text}
														</Subtext>
													</CardBlock>

													{item.button ? (
														<div>
															{item.button.map(
																(item, i) => (
																	<LoadMorebutton
																		fontSize="12px"
																		padding="10px"
																		border="0.4px solid #029532"
																		background={`${
																			buttonName[
																				item
																					.name
																			] ===
																			item.name
																				? "#029532"
																				: "none"
																		}`}
																		color={`${
																			buttonName[
																				item
																					.name
																			] ===
																			item.name
																				? "#fff"
																				: "#029532"
																		}`}
																		onClick={e =>
																			nextQuestion(
																				item.name,
																				item._id,
																				e
																			)
																		}
																		style={{
																			margin:
																				"5px"
																		}}
																		name={
																			item.name
																		}
																		id={
																			item._id
																		}
																	>
																		{
																			item.name
																		}
																	</LoadMorebutton>
																)
															)}
														</div>
													) : (
														<></>
													)}
												</div>
											</FlexTag>
										</ListTag>
									) : (
										""
									)}
									{item.text1 ? (
										<ListTag>
											<FlexTag justifyContent="flex-end">
												<CardBlock
													border="0.8px solid rgba(204, 206, 210, 0.5)"
													borderRadius=" 6px"
													padding="10px"
												>
													<Subtext
														color="#000"
														fontSize="12px"
														fontWeight="400"
														lineHeight="15px"
													>
														{item.text1}
													</Subtext>
												</CardBlock>
											</FlexTag>
										</ListTag>
									) : (
										<></>
									)}
								</div>
							))}
						</OrderTag>
						<div ref={bottomRef} id="data" />
					</ChatContent>
					<ChatFooter>
						{typeBox === false ? (
							<></>
						) : (
							<div>
								<HorizontalLine borderTop="1px solid #E3E3E3" />
								<form onSubmit={onSubmitEvent}>
									<FlexTag>
										<InputTag
											value={values}
											placeholder="Type your reply here"
											onChange={onChangeEvent}
											onKeyDown={handleKeyDown}
										/>
									</FlexTag>
								</form>
							</div>
						)}
					</ChatFooter>
				</ChatBot>
			) : (
				<></>
			)}
		</>
	);
}
