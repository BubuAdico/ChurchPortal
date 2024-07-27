import { Route, Routes } from "react-router-dom";
import { DashBoard, Layout, NotFound } from "./Modules/Pages";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
