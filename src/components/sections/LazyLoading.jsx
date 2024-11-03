import React, { useEffect, useState } from "react";
import HeroBannerInternalPages from "./HeroBannerInternalPages";
import Loader from "./Loader";

const LazyLoading = ({ childern }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		setShow(true);
		let timer = setTimeout(() => {
			setShow(false);
		}, 600);

		return () => clearTimeout(timer);
	}, [childern]);

	return <>{show ? <Loader /> : <div>{childern}</div>}</>;
};

export default LazyLoading;
