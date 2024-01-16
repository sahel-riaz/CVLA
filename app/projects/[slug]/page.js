'use client'

import styles from './project-slug.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { pb } from '@/lib/pocketbase'

export default function Slug() {
	const params = useParams()

	const [project, setProject] = useState()

	useEffect(() => {
		;(async () => {
			const tempProjectRecord = await pb.collection('projects').getOne(params?.slug, {
				$autoCancel: false,
			})
			tempProjectRecord.thumbnail = pb.getFileUrl(tempProjectRecord, tempProjectRecord.thumbnail)
			setProject(tempProjectRecord)
		})()
	}, [params])

	return (
		<div className={styles['big-container']}>
			<Navbar />
			<div className={styles['container']}>
				<div className={styles['main-container']}>
					<div className={styles['title']}>{project?.title}</div>
					<div className={styles['references']}>{project?.author}</div>
					<div className={styles['references']}>
						{project?.sponsor ? <>Sponsor:</> : null} {project?.sponsor} | {project?.amount}
					</div>
					{project?.start && project?.end ? (
						<div className={styles['date']}>
							{new Date(project?.start).toISOString().slice(0, 10)} -{' '}
							{new Date(project?.end).toISOString().slice(0, 10)}
						</div>
					) : null}

					<img src={project?.thumbnail} />
					<div className={styles['paragraphs']}>
						<div className={styles['text']}>{project?.abstract}</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
