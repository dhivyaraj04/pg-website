import React from "react";
import Link from "next/link";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SectionConsultant,
	Subtext,
	SpaceTag,
	ImageTag,
	CursorTag,
	CenterTag
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
	function getWord(test) {
		const t = test.substring(0, 40);
		const tes = t.trim().replace(/[ -]+/g, "-");
		return tes;
	}
	return (
		<SectionConsultant>
			<CenterTag>
				<Subtext
					color="#000000"
					fontSize="32px"
					letterSpacing="0.26px"
					lineHeight="20px"
				>
					Connect with our Certifield Consultant Experts Today
				</Subtext>
			</CenterTag>

			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{ConsultantExpertItems.map((item, i) => (
							<Column sm={3} md={3}>
								<Card
									borderRadius="0"
									margin="auto"
									textAlign="center"
									height="100px"
									width="-webkit-fill-available"
								>
									<Link
										href={`/expertis/${getWord(
											item.name
										)}/${item._id}`}
									>
										<CursorTag>
											<ImageTag src={item.image} />
											<Subtext
												color="#000000"
												fontSize="14px"
												letterSpacing="0px"
												lineHeight="20px"
											>
												{item.name}
											</Subtext>
										</CursorTag>
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
