import React from "react";
import { Container } from "styled-container-component";
import { Column, Row } from "styled-grid-system-component";
import { Chat } from "./chat/chat";
import { BreadCrumb } from "./banner/breadcrumb";
import { SpaceTag, Subtext } from "../components/small-component";
import { aboutBanner } from "./data";
export function About() {
	const [windowSize, setWindowSize] = React.useState({
		width: undefined,
		height: undefined
	});
	React.useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const width = 770;
	return (
		<>
			<BreadCrumb BanerItems={aboutBanner} />
			<SpaceTag marginTop="10" marginBottom="40">
				<Container>
					<Row>
						<Column md={12} xs={12} sm={12}>
							<SpaceTag marginTop="10" marginBottom="10">
								<Subtext
									fontSize="24px"
									color="#000"
									letterSpacing="0.10px"
									lineHeight="1.5"
								>
									About Us
								</Subtext>
							</SpaceTag>
							<SpaceTag marginTop="10" marginBottom="10">
								<Subtext
									fontSize="34px"
									color="#009846"
									letterSpacing="0.10px"
									lineHeight="1.5"
								>
									WHO WE ARE
								</Subtext>
							</SpaceTag>
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
								style={{ textAlign: "justify" }}
							>
								How often do we face obstacles in our daily
								lives due to lack of expert advice. Be it a
								fitness related issue or a legal concern, even
								the most trivial of things might disrupt the
								smooth functioning of our everyday schedules.
								Sounds relatable? We are sure it does. Hiring an
								expert for every challenge that you face is
								neither feasible nor affordable and we at
								ProTalk by M/s.InnovX absolutely understand this
								challenge. Our mission is to satisfy this exact
								need and fill the gap created by it by bringing
								together a wide range of professionals including
								Chartered Accountants, Lawyers, Homeopathy
								Experts, Fitness Instructors and more.
							</Subtext>
							<br />
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
								style={{ textAlign: "justify" }}
							>
								We at ProTalk by M/s.Innovx understand that with
								an expert team comes remarkable dedication. We
								like to go the extra mile for our customers and
								hence make sure that all our professionals are
								verified and sufficiently qualified to address
								your needs. Our vision is to create a curated
								online market place connecting professionals
								with users which is quality driven, affordable,
								convenient and accessible.
							</Subtext>
							<br />
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
								style={{ textAlign: "justify" }}
							>
								When it comes to a great idea, you know it when
								you see it and this great idea is just one click
								away from addressing all your professional
								concerns!
							</Subtext>
							<SpaceTag marginTop="20" marginBottom="10">
								<Subtext
									fontSize="34px"
									color="#009846"
									letterSpacing="0.10px"
									lineHeight="1.5"
								>
									Why Clients Choose Us?
								</Subtext>
							</SpaceTag>
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
							>
								One on One Live on Demand Consultation with
								various experts of different fields.
							</Subtext>
							<br />
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
							>
								Verified Consultants from each field
							</Subtext>
							<br />
							<Subtext
								fontSize="16px"
								color="#000"
								letterSpacing="0.10px"
								lineHeight="1.5"
							>
								Convenient way to connect to multiple
								consultants via One Platform
							</Subtext>
						</Column>
					</Row>
				</Container>
			</SpaceTag>
			<br />
			<Chat />
		</>
	);
}
