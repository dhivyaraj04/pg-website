import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { Icon } from "../../components/icons/icon";
import { Icons } from "../../components/icons/icons-props";
import {
	SectionBookVisit,
	InputTag,
	Text,
	FlexTag,
	SpaceTag,
	CenterTag,
	AmenitiesCircleTag,
	AmenitiesCircleColor
} from "../../components/small-component";

export function AmenitiesMobile() {
	return (
		<Container>
			<Row>
				<Column sm={12} xs={12} md={12}>
					<SpaceTag marginTop="40">
						<FlexTag justifyContent="center">
							<AmenitiesCircleColor />
						</FlexTag>
						<CenterTag>
							<SpaceTag marginTop="20">
								<Text
									fontSize="30px"
									color="#000"
									fontWeight="900"
								>
									Amenities
								</Text>
							</SpaceTag>
						</CenterTag>
					</SpaceTag>
				</Column>
			</Row>
			<Row>
				<Column sm={6} xs={12} md={6}>
					<SpaceTag marginTop="20" marginBottom="30">
						<CenterTag>
							<Text fontSize="24px" color="#000" fontWeight="500">
								What Is Included?
							</Text>
						</CenterTag>
					</SpaceTag>
					<div style={{ borderBottom: "1px solid #e8e4e4" }}>
						<FlexTag justifyContent="space-evenly">
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
							>
								<CenterTag>
									<AmenitiesCircleTag>
										<SpaceTag marginTop="10">
											<Icon name={Icons.bed} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Bed
									</Text>
								</CenterTag>
							</SpaceTag>
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
								marginLeft="5"
							>
								<CenterTag>
									<AmenitiesCircleTag
										style={{ marginLeft: "15px" }}
									>
										<SpaceTag marginTop="10">
											<Icon name={Icons.housekeeping} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Housekeeping
									</Text>
								</CenterTag>
							</SpaceTag>
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
								marginLeft="5"
							>
								<CenterTag>
									<AmenitiesCircleTag>
										<SpaceTag marginTop="10">
											<Icon name={Icons.maintance} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Maintance
									</Text>
								</CenterTag>
							</SpaceTag>
						</FlexTag>

						<br />
						<SpaceTag marginTop="20" marginBottom="40">
							<FlexTag justifyContent="space-evenly">
								<SpaceTag
									marginTop="10"
									marginBottom="10"
									marginRight="5"
								>
									<CenterTag>
										<AmenitiesCircleTag>
											<SpaceTag marginTop="6">
												<Icon name={Icons.food} />
											</SpaceTag>
										</AmenitiesCircleTag>
										<Text
											fontSize="16px"
											color="#000"
											fontWeight="400"
										>
											Food
										</Text>
									</CenterTag>
								</SpaceTag>
								<SpaceTag
									marginTop="10"
									marginBottom="10"
									marginRight="5"
									marginLeft="5"
								>
									<CenterTag>
										<AmenitiesCircleTag
											style={{ marginLeft: "15px" }}
										>
											<SpaceTag marginTop="12">
												<Icon name={Icons.internet} />
											</SpaceTag>
										</AmenitiesCircleTag>
										<Text
											fontSize="16px"
											color="#000"
											fontWeight="400"
										>
											Internet
										</Text>
									</CenterTag>
								</SpaceTag>
							</FlexTag>
						</SpaceTag>
					</div>
				</Column>
				<Column sm={6} xs={12} md={6}>
					<SpaceTag marginTop="30">
						<SpaceTag marginTop="30" marginBottom="30">
							<CenterTag>
								<Text
									fontSize="24px"
									color="#000"
									fontWeight="500"
								>
									Amenities
								</Text>
							</CenterTag>
						</SpaceTag>
						<FlexTag justifyContent="space-evenly">
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
							>
								<CenterTag>
									<AmenitiesCircleTag>
										<SpaceTag marginTop="10">
											<Icon name={Icons.lift} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Lift
									</Text>
								</CenterTag>
							</SpaceTag>
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
								marginLeft="5"
							>
								<CenterTag>
									<AmenitiesCircleTag>
										<SpaceTag marginTop="10">
											<Icon name={Icons.power} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Power <br />
										backup
									</Text>
								</CenterTag>
							</SpaceTag>
							<SpaceTag
								marginTop="10"
								marginBottom="10"
								marginRight="5"
								marginLeft="5"
							>
								<CenterTag>
									<AmenitiesCircleTag>
										<SpaceTag marginTop="5">
											<Icon name={Icons.sofa} />
										</SpaceTag>
									</AmenitiesCircleTag>
									<Text
										fontSize="16px"
										color="#000"
										fontWeight="400"
									>
										Beautiful <br />
										common <br />
										spaces
									</Text>
								</CenterTag>
							</SpaceTag>
						</FlexTag>
					</SpaceTag>
				</Column>
			</Row>
		</Container>
	);
}
