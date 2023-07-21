import React from "react";
import MyRouter from "routers/index";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

function App() {
	// const { t, i18n } = useTranslation();

	// useEffect(() => {
	// 	const lng = navigator.language;
	// 	i18n.changeLanguage(lng);
	// }, [])

	// const lng = navigator.language;
	return (
		<div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
			<MyRouter />
		</div>
	);
}

export default App;
