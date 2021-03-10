import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { Icon } from "../../components/icons/icon";
import { Icons } from "../../components/icons/icons-props";
import {
	CenterTag,
	Text,
	FooterTag,
	SectionFooter,
	SpaceTag,
	FlexTag,
	CircleTag
} from "../../components/small-component";

export function FooterMobile() {
	return (
		<>
			<SectionFooter>
				<Container>
					<Row>
						<Column md={4} xs={12} sm={4}>
							<SpaceTag marginTop="30" marginBottom="20">
								<Text
									fontSize="22px"
									color="#000"
									fontWeight="900"
								>
									Logo
								</Text>
							</SpaceTag>
						</Column>
						<Column md={4} xs={12} sm={4}>
							<SpaceTag marginTop="30" marginBottom="20">
								<Text
									fontSize="22px"
									color="#000"
									fontWeight="900"
								>
									Company Information
								</Text>
							</SpaceTag>

							<SpaceTag marginTop="10" marginBottom="10">
								<Text
									fontSize="14px"
									color="#000"
									fontWeight="500"
								>
									About Us
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="10" marginBottom="10">
								<Text
									fontSize="14px"
									color="#000"
									fontWeight="500"
								>
									FAQs
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="10" marginBottom="10">
								<Text
									fontSize="14px"
									color="#000"
									fontWeight="500"
								>
									Community
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="10" marginBottom="10">
								<Text
									fontSize="14px"
									color="#000"
									fontWeight="500"
								>
									Terms & Carrers
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="10" marginBottom="10">
								<Text
									fontSize="14px"
									color="#000"
									fontWeight="500"
								>
									Blogs
								</Text>
							</SpaceTag>
						</Column>
						<Column md={4} xs={12} sm={4}>
							<SpaceTag marginTop="30" marginBottom="20">
								<Text
									fontSize="22px"
									color="#000"
									fontWeight="900"
								>
									Contact Us
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="0" marginBottom="20">
								<FlexTag>
									<Icon name={Icons.whatsapp} />
									<SpaceTag marginLeft="10">
										<Text
											fontSize="14px"
											color="#000"
											fontWeight="900"
										>
											9898989898 (What’s App Only)
										</Text>
									</SpaceTag>
								</FlexTag>
							</SpaceTag>
							<SpaceTag marginTop="20" marginBottom="20">
								<FlexTag>
									<SpaceTag marginLeft="10">
										<CircleTag>
											<Icon name={Icons.facebook} />
										</CircleTag>
									</SpaceTag>
									<SpaceTag marginLeft="10">
										<CircleTag>
											<Icon name={Icons.instagram} />
										</CircleTag>
									</SpaceTag>
									<SpaceTag marginLeft="10">
										<CircleTag>
											<Icon name={Icons.linkedIn} />
										</CircleTag>
									</SpaceTag>
								</FlexTag>
							</SpaceTag>
						</Column>
					</Row>
				</Container>
			</SectionFooter>
			<FooterTag>
				<CenterTag>
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="12px" color="#fff" fontWeight="500">
							© Copyright pg 2021. All Rights Reserved
						</Text>
					</SpaceTag>
				</CenterTag>

				<FlexTag justifyContent="center">
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="12px" color="#fff" fontWeight="500">
							Home
						</Text>
					</SpaceTag>
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="20px" color="#fff" fontWeight="500">
							|
						</Text>
					</SpaceTag>
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="12px" color="#fff" fontWeight="500">
							Terms & Conditions
						</Text>
					</SpaceTag>
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="12px" color="#fff" fontWeight="500">
							|
						</Text>
					</SpaceTag>
					<SpaceTag
						marginTop="10"
						marginLeft="10"
						marginRight="10"
						marginBottom="10"
					>
						<Text fontSize="12px" color="#fff" fontWeight="500">
							Privacy Policy
						</Text>
					</SpaceTag>
				</FlexTag>
			</FooterTag>
		</>
	);
}
