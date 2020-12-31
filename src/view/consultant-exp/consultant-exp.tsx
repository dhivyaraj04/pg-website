import React from "react";
import Link from "next/link";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Ptag,
	SpaceTag,
	ImageTag
} from "../../components/small-component";

export type ConsultantExpertItem = {
	_id?: string;
	name?: string;
	image?: string;
};
export type ConsultantExpertProps = {
	ConsultantExpertItems?: ConsultantExpertItem[];
};
export function ConsultantExpert({
	ConsultantExpertItems
}: ConsultantExpertProps) {
	return (
		<SectionConsultant>
			<H3tagConsultant>
				Connect with our Certifield Consultant Experts Today
			</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{ConsultantExpertItems.map((item, i) => (
							<Column sm={3} md={3}>
								<Card
									borderRadius="0"
									margin="0 auto"
									textAlign="center"
								>
									<Link href={`/expertis/${item._id}`}>
										<Atag fontSize="18" color="#000">
											{/* <Icon name={item.icon} /> */}
											<ImageTag src={item.image} />
											<Ptag color="#000000">
												{item.name}
											</Ptag>
										</Atag>
									</Link>
								</Card>
							</Column>
						))}
					</Row>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
