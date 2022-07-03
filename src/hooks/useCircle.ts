const useCircle = ({
	size,
	viewBoxOffset = 5,
}: {
	size: number;
	viewBoxOffset?: number;
}) => {
	const radius = size / 2 - viewBoxOffset;
	const length = 2 * Math.PI * radius;

	return {
		radius,
		length,
	};
};

export default useCircle;
