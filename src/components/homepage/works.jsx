import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./rapbot.jpg"
								alt="rapbot"
								className="work-image"
							/>
							<div className="work-title">Rapbot Studios</div>
							<div className="work-subtitle">
								Game Development Intern
							</div>
							<div className="work-duration">September 2021 - February 2022</div>
						</div>

						<div className="work">
							<img
								src="./roboto.jpg"
								alt="roboto"
								className="work-image"
							/>
							<div className="work-title">Roboto Coding Academy</div>
							<div className="work-subtitle">
								Part-time Technology Educator
							</div>
							<div className="work-duration">March 2022 -  August 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
