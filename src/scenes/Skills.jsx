// import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
// import { motion } from "framer-motion";
// import react from "../assets/react.png";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import bulma from "../assets/bulma.png";
// // import nodejs from "../assets/nodejs.png";
// import tailwind from "../assets/tailwind.png";
// import flask from "../assets/flask.png";
// import sql from "../assets/sql.png";
// import github from "../assets/github.png";
// import python from "../assets/python.png";

// const Skills = () => {
// 	// const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

// 	const techs = [
// 		{
// 			id: 1,
// 			src: html,
// 			title: 'HTML',
// 			style: 'shadow-orange-500'
// 		},
// 		{
// 			id: 2,
// 			src: css,
// 			title: 'CSS',
// 			style: 'shadow-blue-500'
// 		},
// 		{
// 			id: 1,
// 			src: flask,
// 			title: 'Flask',
// 			style: 'shadow-white'
// 		},
// 		{
// 			id: 1,
// 			src: react,
// 			title: 'REACT',
// 			style: 'shadow-blue-400'
// 		},
// 		{
// 			id: 1,
// 			src: python,
// 			title: 'PYTHON',
// 			style: 'shadow-blue-600'
// 		},
// 		{
// 			id: 1,
// 			src: tailwind,
// 			title: 'Tailwind',
// 			style: 'shadow-sky-400'
// 		},
// 		{
// 			id: 1,
// 			src: bulma,
// 			title: 'Bulma',
// 			style: 'shadow-green-500'
// 		},
// 		{
// 			id: 1,
// 			src: sql,
// 			title: 'SQL',
// 			style: 'shadow-orange-400'
// 		},
// 		{
// 			id: 1,
// 			src: github,
// 			title: 'GitHub',
// 			style: 'shadow-gray-400'
// 		},
// 	];
// 	return (
// 		<div 
// 		name="Skills"
// 		className="bg-gradient-to-b from-gray-800  to-white w-full  h-screen"
// 		>
// 			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

// 				<div>
// 					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
// 						Skills
// 						</p>
// 					<p className="py-6">These are the technologies I work with</p>
// 				</div>

// 				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
// 					{techs.map(({ id, src, title, style }) => (
// 						<div
// 						key={id}
// 						className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
// 						>
// 							<img src={src} alt="" className="w-20 mx-auto" />
// 							<p className="mt-4">{title}</p>

// 						</div>
// 					))}
// 					<div>
// 						<img src={html} alt="" />
// 						<p>HTML</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>

// 	);
// };
// export default Skills;