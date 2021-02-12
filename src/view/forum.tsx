import React from "react";
import Modal from "react-modal";
import { AutoSizer, WindowScroller, List } from "react-virtualized";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Banner } from "./banner/banner";
import { Question } from "./question/question";
import { QuestionAnswer } from "./question/question-answer";
import { homeBanner } from "./data";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
import {
	FlexTag,
	LoadMorebutton,
	Subtext,
	SpaceTag,
	CardBlock
} from "../components/small-component";

interface QueryNameProps {
	queryName: any;
}
export function ForumLayout({ queryName }: QueryNameProps) {
	const [open, setOpen] = React.useState({ id: "" });
	const [query, setQuery] = React.useState([]);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [array, setArray] = React.useState([]);
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	const [selected1, setSelected1] = React.useState([]);
	const [selected2, setSelected2] = React.useState([]);
	const [option1, setOption1] = React.useState([]);
	const [option2, setOption2] = React.useState([]);

	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	React.useEffect(() => {
		getForumQuery(queryName);
	}, []);
	React.useEffect(() => {
		setSelected2([...option2]);
		setSelected1([...option1]);
	}, []);
	function getForumQuery(queryName) {
		fetch(`${BaseUrl}/apiV2/forumQueries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				expertiseId: "",
				limit: 500,
				skip: 0
			})
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				const t = query.concat(res.queries);
				setQuery(t);
				let arr1 = [];
				let arr2 = [];
				// eslint-disable-next-line
				res.queries.map(res => {
					arr1 = arr1.concat({
						label: res.expertise,
						value: res.expertise
					});
					arr2 = arr2.concat({
						label: res.subExpertise,
						value: res.subExpertise
					});
				});
				setOption1(uniquebyKeep(arr1));
				setOption2(uniquebyKeep(arr2));
			});
	}

	function test(value) {
		let result = [];
		let arr2 = [];
		value.map(a1 => {
			var out = query.filter(item => item.expertise === a1.value);
			result.push(...out);
		});
		result.map(res => {
			arr2 = arr2.concat({
				label: res.subExpertise,
				value: res.subExpertise
			});
		});
		setOption2(uniquebyKeep(arr2));
		// setSelected2(uniquebyKeep(arr2));
	}

	function searchData() {
		let result = [];
		if (selected2.length !== 0) {
			selected2.map(a1 => {
				if (a1.value !== "*") {
					console.log("check1");
					var out = query.filter(
						item => item.subExpertise === a1.value
					);
					result.push(...out);
				} else {
					console.log("check2");
					var out = query.filter(
						item => item.subExpertise !== a1.value
					);
					result.push(...out);
				}
			});
		} else if (selected1.length !== 0) {
			selected1.map(a1 => {
				if (a1.value !== "*") {
					var out = query.filter(item => item.expertise === a1.value);
					result.push(...out);
				} else {
					var out = query.filter(item => item.expertise !== a1.value);
					result.push(...out);
				}
			});
		} else {
			result.concat(query);
		}
		console.log(result, "result");
		setQuery(result);
	}
	function uniquebyKeep(data) {
		var isDuplicate = data.filter(
			(ele, ind) =>
				ind ===
				data.findIndex(
					elem => elem.label === ele.label && elem.value === ele.value
				)
		);
		return isDuplicate;
	}
	function openModal(test) {
		setOpen({ id: test });
		let bigCities = query.filter(city => city._id === test);

		setArray(bigCities);
		setIsOpen(true);
	}
	function closeModal() {
		setOpen({ id: "" });
		setIsOpen(false);
	}
	function Rows({ index, key, isScrolling, style }) {
		if (isScrolling) {
			return (
				<div style={style} key={key}>
					<Question
						QuestionItems={query[index]}
						windowwidth={windowSize.width}
						onClickEvent={openModal}
						open={open}
					/>
				</div>
			);
		} else {
			return (
				<div style={style} key={key}>
					<Question
						QuestionItems={query[index]}
						windowwidth={windowSize.width}
						onClickEvent={openModal}
						open={open}
					/>
				</div>
			);
		}
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
			width: "80%",
			overflow: "initial",
			height:
				array.length !== 0
					? array[0].answers
						? array[0].answers.length > 1
							? "400px"
							: "375px"
						: "375px"
					: "375px"
		}
	};
	function getDropdownButtonLabelExpertise({
		placeholderButtonLabel,
		value
	}) {
		if (value.length === 0) {
			return `${placeholderButtonLabel}: select...`;
		} else if (value.length === 1) {
			return `${placeholderButtonLabel}: 
			${value[0].value} `;
		} else {
			return `${placeholderButtonLabel}: 
		  ${JSON.stringify(value.length)} selected`;
		}
	}

	function onChangeExpertise(value, event) {
		test(value);
		if (event.action === "select-option" && event.option.value === "*") {
			console.log(this.options);
			this.setState(this.options);
			test(this.options);
		} else if (
			event.action === "deselect-option" &&
			event.option.value === "*"
		) {
			this.setState([]);
		} else if (event.action === "deselect-option") {
			this.setState(value.filter(o => o.value !== "*"));
		} else if (value.length === this.options.length - 1) {
			this.setState(this.options);
		} else {
			this.setState(value);
		}
	}
	function getDropdownButtonLabelSubExpertise({
		placeholderButtonLabel,
		value
	}) {
		if (value.length === 0) {
			return `${placeholderButtonLabel}: select...`;
		} else if (value.length === 1) {
			return `${placeholderButtonLabel}: 
			${value[0].value} `;
		} else {
			return `${placeholderButtonLabel}: 
		  ${JSON.stringify(value.length)} selected`;
		}
	}

	function onChangeSubExpertise(value, event) {
		if (event.action === "select-option" && event.option.value === "*") {
			this.setState(this.options);
		} else if (
			event.action === "deselect-option" &&
			event.option.value === "*"
		) {
			this.setState([]);
		} else if (event.action === "deselect-option") {
			this.setState(value.filter(o => o.value !== "*"));
		} else if (value.length === this.options.length - 1) {
			this.setState(this.options);
		} else {
			this.setState(value);
		}
	}
	const height = windowSize.width > 770 ? "120px " : "200px";
	const height1 = windowSize.width > 770 ? 175 : 190;
	return (
		<>
			<Banner BanerItems={homeBanner} />
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<SpaceTag marginTop="10" marginBottom="5">
							<div
								style={{
									paddingTop: "20px",
									paddingBottom: "20px",
									borderRadius: "10px",
									border: "1px solid #D0D7DC"
								}}
							>
								<Row>
									<Column md={4} sm={4} xs={12}>
										<SpaceTag
											marginTop="5"
											marginBottom="5"
										>
											<ReactMultiSelectCheckboxes
												options={[...option1]}
												placeholderButtonLabel="Expertise"
												getDropdownButtonLabel={
													getDropdownButtonLabelExpertise
												}
												value={selected1}
												onChange={onChangeExpertise}
												setState={setSelected1}
											/>
										</SpaceTag>
									</Column>
									<Column md={5} sm={4} xs={12}>
										<SpaceTag
											marginTop="5"
											marginBottom="5"
										>
											<ReactMultiSelectCheckboxes
												options={[...option2]}
												placeholderButtonLabel="SubExpertise"
												getDropdownButtonLabel={
													getDropdownButtonLabelSubExpertise
												}
												value={selected2}
												onChange={onChangeSubExpertise}
												setState={setSelected2}
											/>
										</SpaceTag>
									</Column>
									<Column md={2} sm={4} xs={4}>
										<SpaceTag
											marginTop="5"
											marginBottom="5"
										>
											<LoadMorebutton
												onClick={searchData}
												fontSize="18px"
												padding="8px"
												background="#009846"
												color="#fff"
												width={height}
												border="none"
											>
												Ask a Query
											</LoadMorebutton>
										</SpaceTag>
									</Column>
								</Row>
							</div>
						</SpaceTag>
					</Column>
				</Row>

				<br />
			</Container>
			<WindowScroller>
				{({
					height,
					isScrolling,
					onChildScroll,
					registerChild,
					scrollTop
				}) => (
					<AutoSizer disableHeight>
						{({ width }) => (
							<div ref={registerChild}>
								<List
									autoHeight
									height={height}
									rowCount={query.length}
									rowHeight={height1}
									width={width}
									rowRenderer={Rows}
									onScroll={onChildScroll}
									scrollTop={scrollTop}
									isScrolling={isScrolling}
								/>
							</div>
						)}
					</AutoSizer>
				)}
			</WindowScroller>
			<Chat />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<SpaceTag>
					<FlexTag justifyContent="space-between">
						<SpaceTag marginLeft="30">
							<Subtext
								fontSize="28px"
								lineHeight="42px"
								color="#000"
							>
								Query
							</Subtext>
						</SpaceTag>
						<LoadMorebutton
							onClick={closeModal}
							fontSize="18px"
							padding="5px"
							background="none"
							color="#000"
							width="125px"
							border="none"
						>
							X
						</LoadMorebutton>
					</FlexTag>
					<div style={{ height: "300px", overflow: "auto" }}>
						{array.map((list, i) => (
							<QuestionAnswer QuestionItems={list} />
						))}
					</div>
					<FlexTag justifyContent="flex-end">
						<LoadMorebutton
							onClick={closeModal}
							fontSize="18px"
							padding="5px"
							background="#009846"
							color="#fff"
							width="125px"
							border="none"
						>
							Close
						</LoadMorebutton>
					</FlexTag>
				</SpaceTag>
			</Modal>
		</>
	);
}
