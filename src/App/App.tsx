import React from "react"
import styled from "styled-components"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { SiLeetcode } from "react-icons/si"
import { BsFileCode, BsBookmarks } from "react-icons/bs"
import AnimatedCursor from "react-animated-cursor"

const App = () => {
	const innerStyle = { styles: {} }

	const handleClick = () => {
		alert("Work in progress....")
	}
	console.log("Gonna update this with time")

	return (
		<Container>
			<AnimatedCursor
				innerSize={20}
				outerSize={40}
				color='51,51,51'
				outerAlpha={0.3}
				innerScale={0.5}
				outerScale={3}
				hasBlendMode={true}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link"
				]}
			/>
			<BackgroundVid>
				<video
					src='https://storage.coverr.co/videos/02rR1EcpuwIngiui00fTqyiuTxKHZgaygw?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjU4NTgxOTIzfQ.BNZW4lnmAR2UvfnOga8Iblb-B1BFPjQ9oduo8pL0S9g'
					autoPlay
					muted
					loop
					playsInline
				></video>
			</BackgroundVid>
			<Content>
				<ProfileImg>
					<img src='https://i.ibb.co/bzzt9gq/profile-Img.jpg' alt='pfp' />
				</ProfileImg>
				<Links>
					<span>
						<a href='https://www.linkedin.com/in/viraj-s/' target='_blank'>
							<h2>LinkedIn</h2>
							<AiFillLinkedin />
						</a>
					</span>
					<span>
						<a href='https://github.com/viraj-s15' target='_blank'>
							<h2>GitHub</h2>
							<AiFillGithub />
						</a>
					</span>
					<span>
						<a href='https://leetcode.com/Veer1516/' target='_blank'>
							<h2>Leetcode</h2>
							<SiLeetcode />
						</a>
					</span>
					<span>
						<a href='#' onClick={handleClick}>
							<h2>Portfolio</h2>
							<BsFileCode />
						</a>
					</span>
					<span>
						<a href='https://bloggy-viraj-s15.vercel.app' target='_blank'>
							<h2>Blog</h2>
							<BsBookmarks />
						</a>
					</span>
				</Links>
			</Content>
		</Container>
	)
}

export default App

const Container = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	color: white;
	margin-top: 10%;
`

const BackgroundVid = styled.div`
	video {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: -1;
	}
	z-index: -1;
`
const Content = styled.div`
	width: 100%;
	text-align: center;
`

const Links = styled.div`
	a {
		text-decoration: none;
		color: white;
		display: flex;
		background-color: rgba(51, 51, 51, 0.7);
		font-size: 1em;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		max-width: 15rem;
		margin: 0 auto;
		margin-top: 2.5rem;
		border-radius: 5em;
		svg {
			font-size: 2em;
		}
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		color: rgba(51, 51, 51, 0.5);
		background-color: white;
	}
`

const ProfileImg = styled.div`
	z-index: 1000;
	img {
		height: 9rem;
		width: 9rem;
		border-radius: 50%;
	}
`
