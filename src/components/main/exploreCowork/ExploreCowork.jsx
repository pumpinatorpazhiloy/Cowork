import { motion } from "framer-motion"

import img from "/images/exploreCowork/title.png"
import trailer from "/video/trailer.mp4"

import "./ExploreCowork.scss"

const ExploreCowork = () => {
	return(
		<>
			<section className="exploreCowork">
				<div className="container">
					<div className="exploreCowork__content">
						<motion.div 
						className="exploreCowork__textwrapper"
						initial={{y: 100}}
						whileInView={{y: 0}}
						transition={{duration: .4}}
						viewport={{once: true}}>
							<p className="exploreCowork__label label">A Virtual Tour</p>
							<h2 className="exploreCowork__title title">Explore Cowork Through Our <br />
								<img src={img} alt="image"/> Lens</h2>
							<p className="exploreCowork__text text">Experience the essence of Cowork before setting foot in our dynamic spaces. Our immersive video tour gives you a sneak peek into the vibrant atmosphere, cutting-edge facilities, and collaborative energy that define the Cowork experience.</p>
							<button type="button" className="exploreCowork__button btn">
								<span>Explore Spaces</span>
							</button>
						</motion.div>
						<motion.div 
							className="exploreCowork__video"
							initial={{y: 100}}
							whileInView={{y: 0}}
							transition={{duration: .4}}
							viewport={{once: true}}>
							<video controls src={trailer}></video>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ExploreCowork;