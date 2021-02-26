import React from "react";
import { AutoSizer, WindowScroller, List } from "react-virtualized";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { BreadCrumb } from "./banner/breadcrumb";
import { Question } from "./question/question";
import { BaseUrl } from "../url";
import { Chat } from "./chat/chat";
import {
	HorizontalLine,
	LoadMorebutton,
	SpaceTag,
	ImageTag,
	CenterTag
} from "../components/small-component";
import { forumBanner } from "./data";
import * as Loader from "../img/loader.gif";

interface QueryNameProps {
	queryName: any;
}
export function ForumLayout({ queryName }: QueryNameProps) {
	const [query, setQuery] = React.useState([]);
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	const [selected1, setSelected1] = React.useState([]);
	const [selected2, setSelected2] = React.useState([]);
	const [option1, setOption1] = React.useState([]);
	const [option2, setOption2] = React.useState([]);
	const [skip, setSkip] = React.useState(0);
	const [scrollY, setScrollY] = React.useState(20);
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
				skip: skip
			})
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				setQuery(query.concat(res.queries));
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
		setSelected2(uniquebyKeep(arr2));
	}

	function searchData() {
		setQuery([]);
		let result = [];
		if (selected2.length !== 0) {
			selected2.map(a1 => {
				if (a1.value !== "*") {
					var out = query.filter(
						item => item.subExpertise === a1.value
					);
					result.push(...out);
				} else {
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

	function Rows({ index, key, isScrolling, style }) {
		if (isScrolling) {
			return (
				<div style={style} key={key}>
					<Question
						QuestionItems={query[index]}
						windowwidth={windowSize.width}
					/>
				</div>
			);
		} else {
			return (
				<div style={style} key={key}>
					<Question
						QuestionItems={query[index]}
						windowwidth={windowSize.width}
					/>
				</div>
			);
		}
	}

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
	const height1 = windowSize.width > 770 ? 175 : 215;
	const width = 770;
	function onChildScroll() {
		setSkip(skip + 1);
		getForumQuery("query");
	}
	return (
		<>
			<HorizontalLine borderTop="1px solid #E0E0E0" />
			<BreadCrumb BanerItems={forumBanner} />
			<br />
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
												Search
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
			{query.length === 0 ? (
				<CenterTag>
					{windowSize.width > width ? (
						<ImageTag src={Loader} />
					) : (
						<ImageTag src={Loader} width="100" height="100" />
					)}
					<br />
				</CenterTag>
			) : (
				<WindowScroller>
					{({ height, isScrolling, registerChild, scrollTop }) => (
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
			)}
			<br />
			<Chat />
		</>
	);
}
