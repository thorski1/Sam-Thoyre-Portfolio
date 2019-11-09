export const charPoses = {
	exit: { y: 20, opacity: 0 },
	enter: {
		y: 0,
		opacity: 1,
		transition: ({ charInWordIndex }) => ({
			type: "spring",
			delay: charInWordIndex * 30,
			stiffness: 500 + charInWordIndex * 150,
			damping: 15 - charInWordIndex * 1
		})
	}
};
