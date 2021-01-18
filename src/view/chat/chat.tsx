import React from "react";
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
	ChatHeader
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";
import * as Logo from "../../img/logo.png";

export function Chat() {
	const [open, setOpen] = React.useState(false);
	const [buttonName, setButtonName] = React.useState({});
	function onClickEvent() {
		setOpen(!open);
	}
	const chatData = [
		{
			text: "Hi there, what are you looking for today?",
			buttonData: [
				{
					name: "Take a Service"
				},
				{
					name: "Ask a Quary"
				},
				{
					name: "Looking for a Plan"
				}
			]
		},
		{
			text: "Select your area of expertise",
			buttonData: [
				{
					name: "Fitness"
				},
				{
					name: "Lawyer"
				},
				{
					name: "Ayurveda"
				},
				{
					name: "Mental Wellness"
				},
				{
					name: "Carrer Counselor"
				}
			]
		},
		{
			text: "Select your area of Sub expertise",
			buttonData: [
				{
					name: "Yoga"
				},
				{
					name: "Nutrition"
				},
				{
					name: "Weight Loss"
				},
				{
					name: "General Exercise"
				},
				{
					name: "Dietition"
				}
			]
		}
	];

	const messagesEndRef = React.useRef(null);

	function scrollToBottom() {
		messagesEndRef.current.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest"
		});
	}
	function nextQuestion(name, e) {
		setButtonName({ ...buttonName, [name]: e.target.name });
	}

	// React.useEffect(() => {
	// 	scrollToBottom();
	// });

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
							{chatData.map((item, i) => (
								<>
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
												<div>
													{item.buttonData.map(
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
																		e
																	)
																}
																style={{
																	margin:
																		"10px"
																}}
																name={item.name}
															>
																{item.name}
															</LoadMorebutton>
														)
													)}
												</div>
											</div>
										</FlexTag>
									</ListTag>
									<div ref={messagesEndRef} />
								</>
							))}
						</OrderTag>
					</ChatContent>
				</ChatBot>
			) : (
				<></>
			)}
		</>
	);
}
