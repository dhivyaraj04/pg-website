import React, { useState } from "react";
import { Nav } from "styled-nav-component";
import { Column, Row } from "styled-grid-system-component";
import {
	Head,
	Headers,
	NavbarLinkblock,
	Navbarblock,
	NavbarLinkTag,
	NavbarButton,
	LogoBlock,
	SearchBlock
} from "./style";
import { LogoImage } from "../logo/logo";
import { SearchBox } from "../search-box/search-box";
import { Icon } from "../icon/icon";
import { Icons } from "../icon/icons-props";
export function Navs() {
	const [hidden, setHidden] = useState(true);
	return (
		<div>
			<Head>
				<Headers>
					<Row>
						<Column sm={12}>
							<Navbarblock
								expandSm
								expandMd
								light
								style={{ background: "#fff !important" }}
							>
								<Nav start>
									<NavbarLinkblock light brand href="#">
										<LogoBlock>
											<LogoImage />
										</LogoBlock>
									</NavbarLinkblock>
									<Nav center>
										<SearchBlock>
											<SearchBox />
										</SearchBlock>
									</Nav>
									<Nav end>
										<NavbarButton
											light
											outline
											toggleCollapse
											expandSm
											expandMd
											expandXs
											onClick={() => setHidden(!hidden)}
										>
											<Icon name={Icons.hamburger} />
										</NavbarButton>
									</Nav>
								</Nav>
								<Nav
									end
									collapse
									expandSm
									expandMd
									hidden={hidden}
								>
									<NavbarLinkTag href="/">Home</NavbarLinkTag>

									<NavbarLinkTag
										activeClass="active"
										href="/articles"
									>
										Articles
									</NavbarLinkTag>

									<NavbarLinkTag light href="/forum">
										Forum1
									</NavbarLinkTag>
									<NavbarLinkTag light href="/forum-test">
										Forum2
									</NavbarLinkTag>
									<NavbarLinkTag light href="/aboutus">
										About Us
									</NavbarLinkTag>
								</Nav>
							</Navbarblock>
						</Column>
					</Row>
				</Headers>
			</Head>
		</div>
	);
}
