import React, { useState } from "react";
import { Nav } from "styled-nav-component";
import { Column, Row } from "styled-grid-system-component";
import {
	SubHead,
	Headers,
	NavbarLinkblock,
	Navbarblock,
	SubNavbarLinkTag,
	NavbarButton,
	LogoBlock,
	SearchBlock
} from "./style";
import { LogoImage } from "../logo/logo";
import { SearchBox } from "../search-box/search-box";
import { Icon } from "../icon/icon";
import { Icons } from "../icon/icons-props";

export function SubNavs() {
	const [hidden, setHidden] = useState(true);
	return (
		<div>
			<SubHead>
				<Headers>
					<Row>
						<Column sm={12}>
							<Navbarblock
								expandSm
								expandMd
								light
								style={{ background: "#fff !important" }}
							>
								<Nav expandSm expandMd>
									<SubNavbarLinkTag href="/home">
										Home
									</SubNavbarLinkTag>
									<SubNavbarLinkTag href="/fitness">
										Fitness
									</SubNavbarLinkTag>
									<SubNavbarLinkTag href="/nutrition">
										Nutrition
									</SubNavbarLinkTag>
									<SubNavbarLinkTag href="/lawyer">
										Lawyer
									</SubNavbarLinkTag>
									<SubNavbarLinkTag href="/accountant">
										Lawyer
									</SubNavbarLinkTag>
									<SubNavbarLinkTag href="/career">
										Career
									</SubNavbarLinkTag>

									<SubNavbarLinkTag light href="/explore">
										Explore
									</SubNavbarLinkTag>
								</Nav>
							</Navbarblock>
						</Column>
					</Row>
				</Headers>
			</SubHead>
		</div>
	);
}
