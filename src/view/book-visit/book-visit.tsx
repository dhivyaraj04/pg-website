import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { SelectBox } from "../../components/select-box/select-box";
import {
	SectionBookVisit,
	InputTag,
	Text,
	FlexTag,
	SpaceTag,
	BookAVistitButton
} from "../../components/small-component";

export type BookVisitProps = {
	id?: string;
};
export function BookVisit({ id }: BookVisitProps) {
	const [selectedOption, setSelectedOption] = React.useState(
		"Bengaluru,Karnataka"
	);
	const [phone, setPhone] = React.useState("");
	const options = [
		"Bengaluru, Karnataka",
		"Bengaluru, Karnataka",
		"Bengaluru, Karnataka",
		"Bengaluru, Karnataka",
		"Bengaluru, Karnataka"
	];
	function handleChange(e: React.ChangeEvent) {
		const { name } = e.target as HTMLInputElement;
		const { value } = e.target as HTMLInputElement;
		setSelectedOption(value);
		console.log(`Option selected:`, selectedOption);
	}
	function handleChangePhone(e: React.ChangeEvent) {
		const { value } = e.target as HTMLInputElement;
		setPhone(value);
	}
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<SectionBookVisit id={id}>
			<Container>
				<Row>
					<Column sm={4} xs={12} md={4}>
						<SpaceTag marginTop="20">
							<Text fontSize="26px" color="#000" fontWeight="900">
								Book a Visit
							</Text>
						</SpaceTag>
					</Column>
				</Row>
				<form onSubmit={handleSubmit}>
					<Row>
						<Column sm={4} xs={12} md={4}>
							<SpaceTag marginTop="20">
								<FlexTag>
									<SpaceTag marginTop="20">
										<Text
											fontSize="18px"
											color="#000"
											fontWeight="500"
										>
											Phone No
										</Text>
									</SpaceTag>
									<InputTag
										value={phone}
										placeholder="Enter your Phone no"
										onChange={handleChangePhone}
									/>
								</FlexTag>
							</SpaceTag>
						</Column>
						<Column sm={4} xs={12} md={4}>
							<SpaceTag marginTop="18">
								<FlexTag>
									<SpaceTag marginTop="20">
										<Text
											fontSize="20px"
											color="#000"
											fontWeight="500"
										>
											Location
										</Text>
									</SpaceTag>
									<SelectBox
										defaultValue={selectedOption}
										options={options}
										onChangeEvent={handleChange}
									/>
								</FlexTag>
							</SpaceTag>
						</Column>
						<Column sm={4} xs={12} md={4}>
							<SpaceTag marginTop="30">
								<BookAVistitButton>
									Book a Visit
								</BookAVistitButton>
							</SpaceTag>
						</Column>
					</Row>
				</form>
			</Container>
		</SectionBookVisit>
	);
}
