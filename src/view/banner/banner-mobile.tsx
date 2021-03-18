import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";
import SelectSearch from "react-select-search/dist/cjs/index.js";
import { Column, Row } from "styled-grid-system-component";
import {
	FlexTag,
	Text,
	BannerImage,
	SpaceTag,
	SectionBannerRight,
	BannerCircle,
	CenterTag,
	BookVisitButton,
	BannerButton,
	FlyButton,
	MenuButton,
	SearchIconCircle,
	SearchBlock,
	SearchInputTag,
	FloatingTag
} from "../../components/small-component";
import { Icon } from "../../components/icons/icon";
import { Icons } from "../../components/icons/icons-props";
import * as BannerImg from "../../img/banner.png";
import Fuse from "fuse.js";

export type BannerProps = {
	onClickEvent?: (event: React.MouseEvent) => void;
};
export function BannerMobile({ onClickEvent }: BannerProps) {
	const images = [
		{
			img: BannerImg
		},

		{
			img: BannerImg
		},
		{
			img: BannerImg
		},
		{
			img: BannerImg
		}
	];
	const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

	const prevSlide = () => {
		const resetToVeryBack = currentSlideIdx === 0;
		const index = resetToVeryBack ? images.length - 1 : currentSlideIdx - 1;
		setCurrentSlideIdx(index);
	};
	const nextSlide = () => {
		const resetIndex = currentSlideIdx === images.length - 1;
		const index = resetIndex ? 0 : currentSlideIdx + 1;
		setCurrentSlideIdx(index);
	};
	const activeImageSourcesFromState = images.slice(
		currentSlideIdx,
		currentSlideIdx + 3
	);
	const imageSourcesToDisplay =
		activeImageSourcesFromState.length < 3
			? [
					...activeImageSourcesFromState,
					...images.slice(0, 3 - activeImageSourcesFromState.length)
			  ]
			: activeImageSourcesFromState;
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	};
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			background: "#000000e3",
			width: "100%",
			height: "100%"
		}
	};
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	const options = [
		{ name: "Swedish", value: "sv" },
		{ name: "English", value: "en" }
	];
	function fuzzySearch(options) {
		const fuse = new Fuse(options, {
			keys: ["name", "groupName"],
			threshold: 0.3
		});

		return value => {
			if (!value.length) {
				return options;
			}

			return fuse.search(value);
		};
	}
	return (
		<>
			<Row>
				<Column
					sm={8}
					md={8}
					xs={12}
					style={{ paddingRight: "0px", paddingLeft: "0px" }}
				>
					<div style={{ position: "relative" }}>
						<Slider {...settings}>
							{imageSourcesToDisplay.map((items, i) => (
								<div key={i}>
									<BannerImage banner={items.img}>
										<FloatingTag>
											<SpaceTag
												marginLeft="20"
												marginRight="20"
											>
												<FlexTag justifyContent="flex-end">
													<MenuButton
														onClick={openModal}
													>
														<Icon
															name={Icons.menu}
														/>
													</MenuButton>
												</FlexTag>
											</SpaceTag>
										</FloatingTag>
									</BannerImage>
								</div>
							))}
						</Slider>
					</div>
					<FlyButton>
						<FlexTag justifyContent="space-between">
							<BannerButton onClick={prevSlide}>
								<Icon name={Icons.left} />
								previous
							</BannerButton>

							<BannerButton onClick={nextSlide}>
								next
								<Icon name={Icons.right} />
							</BannerButton>
						</FlexTag>
					</FlyButton>
				</Column>
				<Column
					sm={4}
					md={4}
					xs={12}
					style={{ paddingRight: "0px", paddingLeft: "0px" }}
				>
					<SectionBannerRight>
						<SpaceTag marginLeft="20" marginRight="20">
							<FlexTag justifyContent="center">
								<SpaceTag marginTop="20">
									<SearchBlock>
										<FlexTag>
											<SpaceTag
												marginLeft="10"
												marginRight="10"
												marginTop="6"
											>
												<Icon name={Icons.map} />
											</SpaceTag>

											<SpaceTag
												marginLeft="10"
												marginRight="10"
												marginTop="0"
											>
												<SelectSearch
													options={options}
													search
													filterOptions={fuzzySearch}
													placeholder="Location"
												/>
											</SpaceTag>

											<SearchIconCircle>
												<Icon name={Icons.search} />
											</SearchIconCircle>
										</FlexTag>
									</SearchBlock>
								</SpaceTag>
							</FlexTag>
						</SpaceTag>

						<FlexTag justifyContent="center">
							<SpaceTag marginTop="60" marginRight="30">
								<CenterTag>
									<BannerCircle>
										<Icon name={Icons.womenGroup} />
									</BannerCircle>
									<Text
										fontSize="14px"
										color="#000"
										fontWeight="400"
									>
										Shared
									</Text>
									<Text
										fontSize="14px"
										color="#000"
										fontWeight="400"
									>
										Rs 6,500
									</Text>
								</CenterTag>
							</SpaceTag>
							<SpaceTag marginTop="60" marginLeft="30">
								<CenterTag>
									<BannerCircle>
										<Icon name={Icons.women} />
									</BannerCircle>
									<Text
										fontSize="14px"
										color="#000"
										fontWeight="400"
									>
										Private
									</Text>
									<Text
										fontSize="14px"
										color="#000"
										fontWeight="400"
									>
										Rs 3000
									</Text>
								</CenterTag>
							</SpaceTag>
						</FlexTag>
						<SpaceTag marginTop="20">
							<CenterTag>
								<BookVisitButton onClick={onClickEvent}>
									Book a Visit
								</BookVisitButton>
							</CenterTag>
						</SpaceTag>
						<SpaceTag marginTop="20">
							<CenterTag>
								<Text
									fontSize="18px"
									color="#000"
									fontWeight="400"
								>
									Security Deposit Rs 20,000
								</Text>
							</CenterTag>
						</SpaceTag>
					</SectionBannerRight>
				</Column>
			</Row>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<SpaceTag marginTop="100" marginLeft="50" marginRight="50">
					<FlexTag justifyContent="flex-end">
						<MenuButton
							onClick={closeModal}
							style={{ fontSize: "24px", color: "#fff" }}
						>
							X
						</MenuButton>
					</FlexTag>
					<CenterTag>
						<Link href="/home">
							<Text fontSize="24px" color="#fff" fontWeight="600">
								Blog
							</Text>
						</Link>
						<br />
						<br />
						<Link href="/home">
							<Text fontSize="24px" color="#fff" fontWeight="600">
								Contact Us
							</Text>
						</Link>
						<br />
						<br />
						<Link href="/home">
							<Text fontSize="24px" color="#fff" fontWeight="600">
								About Us
							</Text>
						</Link>
						<br />
						<br />
						<Link href="/home">
							<Text fontSize="24px" color="#fff" fontWeight="600">
								FAQs
							</Text>
						</Link>
					</CenterTag>
				</SpaceTag>
			</Modal>
		</>
	);
}
