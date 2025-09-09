"use client";

import styles from "./page.module.css";
import Topbar from "@/components/Topbar/Topbar";
import Landing from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import WorkPage from "./pages/work-experience/WorkPage";

export default function Home() {
	return (
		<>
			<div className={styles.fixedTopbar}>
				<Topbar/>
			</div>
			<div className={styles.page}>
				<Landing/>
				<AboutMe/>
				<WorkPage/>
			</div>
		</>
	);
}
