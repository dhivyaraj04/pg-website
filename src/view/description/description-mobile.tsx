import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import { FlexTag, Text, SpaceTag } from "../../components/small-component";

export function DescriptionMobile() {
	return (
		<>
			<Container>
				<Row>
					<Column md={12} sm={12} xs={12}>
						<FlexTag>
							<SpaceTag marginTop="20">
								<Text
									fontSize="22px"
									color="#9A9D0F"
									fontWeight="900"
								>
									Grexter Inaaya -
								</Text>
							</SpaceTag>
							<SpaceTag marginTop="27">
								<Text
									fontSize="14px"
									color="#9A9D0F"
									fontWeight="900"
								>
									Coliving space in Hebbal-
								</Text>
							</SpaceTag>
						</FlexTag>
						<SpaceTag marginTop="10" marginBottom="10">
							<Text fontSize="14px" color="#000" fontWeight="500">
								Lawrence Layout, Jogappa Layout, Nagavara,
								Bengaluru, Karnataka 560045
							</Text>
						</SpaceTag>
						<SpaceTag marginTop="10" marginBottom="10">
							<Text
								fontSize="14px"
								color="#000"
								fontWeight="300"
								lineHeight="25px"
							>
								Situated in a buzzing locality in Hebbal, Inaaya
								is one of the Grexter's very first coliving
								property. It has beautiful common areas and a
								great terrace to chill. It is well equipped with
								all amenities like 24x7 power back up, wifi and
								common kitchen. Inaaya is known for ...(more)
							</Text>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</>
	);
}
