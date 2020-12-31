import React from "react";
import { Column, Row } from "styled-grid-system-component";
import { Container } from "styled-container-component";
import {
	SectionIconText,
	Subtext,
	SpaceTag,
	CenterTag
} from "../../components/small-component";
import { Icon } from "../../components/icon/icon";
import { Icons } from "../../components/icon/icons-props";

export function LawyerIconText() {
	return (
		<SectionIconText>
			<Container>
				<Row>
					<Column sm={12} md={4}>
						<SpaceTag marginTop="60">
							<CenterTag>
								<SpaceTag marginTop="100">
									<Icon name={Icons.knowledge} />
									<Subtext
										color="#000"
										fontSize="20px"
										letterSpacing="0.56px"
										fontWeight="500"
									>
										Value though Experts
									</Subtext>
									<Subtext
										color="#787887"
										fontSize="16px"
										letter-spacing="0.56px"
									>
										Experts written articles and solutions
										to your problems
									</Subtext>
								</SpaceTag>
							</CenterTag>
						</SpaceTag>
					</Column>
					<Column sm={12} md={4}>
						<SpaceTag>
							<CenterTag>
								<SpaceTag marginTop="100">
									<Icon name={Icons.icBaselineSecurity} />
									<Subtext
										color="#000"
										fontSize="20px"
										letterSpacing="0.56px"
										fontWeight="500"
									>
										Privary though Security
									</Subtext>
									<Subtext
										color="#787887"
										fontSize="16px"
										letter-spacing="0.56px"
									>
										Your conversions with our experts will
										be encrypted and secured
									</Subtext>
								</SpaceTag>
							</CenterTag>
						</SpaceTag>
					</Column>
					<Column sm={12} md={4}>
						<SpaceTag>
							<CenterTag>
								<SpaceTag marginTop="100">
									<Icon name={Icons.nounQuality} />
									<Subtext
										color="#000"
										fontSize="20px"
										letterSpacing="0.56px"
										fontWeight="500"
									>
										Quality Though Consultants
									</Subtext>
									<Subtext
										color="#787887"
										fontSize="16px"
										letter-spacing="0.56px"
									>
										Certified Experts to guide you though to
										provide best solution possible.
									</Subtext>
								</SpaceTag>
							</CenterTag>
						</SpaceTag>
					</Column>
				</Row>
			</Container>
		</SectionIconText>
	);
}
