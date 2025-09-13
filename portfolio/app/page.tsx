"use client";

import styles from "./page.module.css";
import Topbar from "@/components/Topbar/Topbar";
import Landing from "./pages/home/Home";
import AboutMe from "./pages/about-me/AboutMe";
import WorkPage from "./pages/work-experience/WorkPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import EducationPage from "./pages/education/Education";
import ProjectModal from "./pages/projects/ProjectModal";
import { useState } from "react";
import { ProjectData } from "@/lib/firebase/Interfaces";

export default function Home() {
	const [isOpeningModal, setIsOpeningModal] = useState(false);
	const [modalProject, setModalProject] = useState<ProjectData | null>(null);

	const handleModalOpen = (project: ProjectData) => {
        setModalProject(project);
        setIsOpeningModal(true);
    };

    const handleModalClose = () => {
        setIsOpeningModal(false);
        setModalProject(null);
    };

	return (
		<>
			<div className={styles.fixedTopbar}>
				<Topbar/>
			</div>

				<div className={styles['scrollable-content']}>
					<Landing/>
					<AboutMe/>
					<WorkPage/>
					<ProjectsPage onOpenModal={handleModalOpen}/>
					<EducationPage/>
				</div>


			{isOpeningModal && modalProject && (
                <ProjectModal
                    projectData={modalProject}
                    onClose={handleModalClose}
                />
            )}
		</>
	);
}
