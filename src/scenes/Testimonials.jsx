import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
	const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
	justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

	return (
		<section id="testimonials" className="pt-32 pb-16">
			{/* HEADINGS */}
			<motion.div
			className="md:w-1/3 text-center md:text-left"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 }
					}}
				>
					<p className="font-playfair front-semibold text-4xl mb-5 text-red">
						TESTIMONIALS
					</p>
					<LineGradient width="mx-auto w-2/4" />
					<p className="mt-10">
					Here is what people are saying about me and my work.
					
					</p>
      </motion.div>
			{/* TESTIMONIALS */}
			<div className="md:flex md:justify-between gap-8">
				<motion.div
				className={`bg-blue ${testimonialsStyles} before:content-person1`}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 }
					}}
				>
					<p className="font-playfair text-6xl"></p>
					<p className="text-center text-xl">
						A hardworker like you will have a great future in Software Engineering.
						I'm happy to have known you for a while now.
					</p>
				</motion.div>

				<motion.div
				className={`bg-red ${testimonialsStyles} before:content-person2`}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 }
					}}
				>
					<p className="font-playfair text-6xl"></p>
					<p className="text-center text-xl">
						Je nje njeri i mrekullueshem dhe me energi te pashtershme.
						Te uroj qe te arrish sa me larg ne karrieren tende te re!
					</p>
				</motion.div>

				<motion.div
				className={`bg-yellow ${testimonialsStyles} before:content-person3`}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, scale: 0.8 },
						visible: { opacity: 1, scale: 1 }
					}}
				>
					<p className="font-playfair text-6xl"></p>
					<p className="text-center text-xl">
						I know you love what you're doing and you never give up. 
						You like new challenges and tha's what makes you a great person to have in the team.
					</p>
				</motion.div>
			</div>
		</section>
	) 

};
export default Testimonials;