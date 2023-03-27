import  { useState, useEffect } from "react";

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.natches);
		window.addEventListener("resize", listener);
	}, [matches, query]);

	return matches;
};
export default useMediaQuery;