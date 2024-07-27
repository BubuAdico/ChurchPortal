import { Outlet } from "react-router-dom";
import { SideBar } from "../Components";

const Layout = () => {
	return (
		<main className=" flex flex-col min-h-[100vh] bg-transparent">
			<SideBar />
			<Outlet />
		</main>
	);
};

export default Layout;
