

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import RootRouter from "./components/Root";

const mountPoint = document.getElementById("root");

const render = (Comp) =>
	ReactDOM.render(
		<AppContainer>
			<Comp/>
		</AppContainer>,
		mountPoint
	);

render(RootRouter);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/Root', () => {
		const NextApp = require('./components/Root').default;
		render(NextApp);
	});
}