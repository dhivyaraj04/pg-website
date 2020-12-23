import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Card } from "../../components/card/card";
import {
	SectionConsultant,
	H3tagConsultant,
	Atag,
	Ptag,
	SpaceTag
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";

export function ConsultantExpert() {
	const data = [
		{
			name: "Fitness",
			icon: Icons.fitness
		},
		{ name: "Aryuvedu", icon: Icons.ayruvedu },
		{ name: "Lawyer", icon: Icons.lawyer },
		{ name: "Accountant", icon: Icons.accountant },
		{ name: "Career", icon: Icons.career },
		{ name: "Doctor", icon: Icons.doctor },
		{ name: "Mental Health", icon: Icons.mentalhealth },
		{ name: "GST Filing", icon: Icons.gst },
		{ name: "Dermatologist", icon: Icons.dermatologist },
		{ name: "Yoga", icon: Icons.yoga },
		{ name: "Diet", icon: Icons.diet },
		{ name: "Weight Loss", icon: Icons.weightloss }
	];
	return (
		<SectionConsultant>
			<H3tagConsultant>
				Connect with our Certifield Consultant Experts Today
			</H3tagConsultant>
			<SpaceTag marginTop="40">
				<Container>
					<Row>
						{data.map((item, i) => (
							<Column sm={3} md={3}>
								<Card
									borderRadius="0"
									margin="0 auto"
									textAlign="center"
								>
									<Atag
										fontSize="18"
										href="/expertisTemplate"
										color="#000"
									>
										<Icon name={item.icon} />
										<Ptag color="#000000">{item.name}</Ptag>
									</Atag>
								</Card>
							</Column>
						))}
					</Row>
				</Container>
			</SpaceTag>
		</SectionConsultant>
	);
}
