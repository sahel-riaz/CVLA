'use client'

import React, { useEffect, useState } from 'react'
import styles from './projects.module.css'
import { useRef } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import QuickNavigation from '@/components/QuickNavigation'
import ProjectCard from '@/components/ProjectCard'
import { pb } from '@/lib/pocketbase'
import Link from 'next/link'

export default function Projects() {
	const ongoingRef = useRef(null)
	const completedRef = useRef(null)

	const [ongoingProjects, setOngoingProjects] = useState([])
	const [completedProjects, setCompletedProjects] = useState([])

	const quickLinks = {
		'Ongoing projects': 'Explore Ongoing Projects for current initiatives',
		'Completed projects': 'Review Completed Projects for past achievements',
	}

	useEffect(() => {
		;(async () => {
			const projectRecords = await pb.collection('projects').getFullList({
				$autoCancel: false,
			})

			const tempOngoingProjects = []
			const tempCompletedProjects = []

			for (let r of projectRecords) {
				r.thumbnail = pb.getFileUrl(r, r.thumbnail)
				if (r.type == 'ongoing') tempOngoingProjects.push(r)
				else if (r.type == 'completed') tempCompletedProjects.push(r)
			}
			setOngoingProjects(tempOngoingProjects)
			setCompletedProjects(tempCompletedProjects)
		})()
	})

	return (
		<div className={styles['container']}>
			<Navbar />
			<div className={styles['main-container']}>
				<div className={styles['left-container']}>
					<div className={styles['projects']}>
						<div className={styles['title']}>Projects</div>
						{ongoingProjects?.length ? (
							<div className={styles['projects-wrapper']} ref={ongoingRef}>
								<div className={styles['project-title']}>Ongoing projects</div>
								<div className={styles['project-list']}>
									{ongoingProjects?.map((project, index) => (
										<Link href={`/projects/${project?.id}`} key={index}>
											<ProjectCard
												image={project?.thumbnail}
												startDate={
													project?.start
														? new Date(project?.start).toISOString().slice(0, 10)
														: null
												}
												endDate={
													project?.end ? new Date(project?.end).toISOString().slice(0, 10) : null
												}
												title={project?.title}
												desc={project?.description}
												sponsor={project?.sponsor}
												amount={project?.amount}
											/>
										</Link>
									))}
								</div>
							</div>
						) : null}
						{completedProjects?.length ? (
							<div className={styles['projects-wrapper']} ref={completedRef}>
								<div className={styles['project-title']}>Completed projects</div>
								<div className={styles['project-list']}>
									{completedProjects?.map((project, index) => (
										<Link href={`/projects/${project?.id}`} key={index}>
											<ProjectCard
												image={project?.thumbnail}
												startDate={
													project?.start
														? new Date(project?.start).toISOString().slice(0, 10)
														: null
												}
												endDate={
													project?.end ? new Date(project?.end).toISOString().slice(0, 10) : null
												}
												title={project?.title}
												desc={project?.description}
												sponsor={project?.sponsor}
												amount={project?.amount}
											/>
										</Link>
									))}
								</div>
							</div>
						) : null}
					</div>
				</div>
				<div className={styles['right-container']}>
					<div className={styles['quick-nav-container']}>
						<QuickNavigation
							quickLinks={quickLinks}
							ongoingRef={ongoingRef}
							completedRef={completedRef}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
