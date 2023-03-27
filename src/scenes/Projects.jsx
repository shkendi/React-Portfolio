import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import spaceinvaders from "../assets/spaceinvaders.jpeg";
const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
};
const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 }
}
// title = "Project 1"
// convert = "project-1"
const Project = ({ title }) => {
	const overlayStyles = `absolute h-full opacity-0 hover:opacity-90 transition duration-500
	bg-grey z-30 flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(" ").join("-").toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
				<p className="mt-10">
					
					This was my first project.
				</p>
			</div>
			<img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />

		</motion.div>
	)
}

const Projects = () => {

	return (
		<section id="projects" className="pt-48 pb-48">
			{/* Headings */}
			<motion.div
					className="md:w-2/4 mx-auto text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: -50 },
						visible: { opacity: 1, y: 0 }
					}}
				>
					<div>
					<p className="font-playfair front-semibold text-4xl">
						MY <span className="text-red">PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
					<LineGradient width="w-2/3" />
					</div>
					</div>
					<p className="mt-10 mb-10">
						{/* Miresevine ne faqen time publike. Ju lutem klikoni ketu per me shume
						informacione. Ju faleminderit */}
					</p>
				</motion.div>

				{/* PROJECTS */}
				<div className="flex justify-center">
				<motion.div
					className="sm:grid sm:grid-cols-4"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={container}
				>
					{/* ROW ! */}
					<div className="flex justify-center text-center items-center p-10 bg-red
					max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div>
					<Project title="Space invaders" />
					<Project title="Criptocurrency App" />

					{/* ROW 2 */}
					<Project title="Dinspiration" />
					<Project title="GiftShop" />
					<Project title="Portfolio Website" />

					
					{/* ROW 3 */}
					
					<div className="flex justify-center text-center items-center p-10 bg-blue
					max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div>
					<div className="flex justify-center text-center items-center p-10 bg-red
					max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div>

				</motion.div>
				</div>
		</section>
	);
};
export default Projects;