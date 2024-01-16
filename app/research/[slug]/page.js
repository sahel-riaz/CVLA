'use client'

import styles from './research-slug.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { pb } from '@/lib/pocketbase'

export default function Slug() {
	const params = useParams()

	const [research, setResearch] = useState()

	useEffect(() => {
		;(async () => {
			const tempResearchRecord = await pb.collection('research').getOne(params?.slug, {
				$autoCancel: false,
			})
			tempResearchRecord.thumbnail = pb.getFileUrl(tempResearchRecord, tempResearchRecord.thumbnail)
			setResearch(tempResearchRecord)
		})()
	}, [params])

	return (
		<div className={styles['big-container']}>
			<Navbar />
			<div className={styles['container']}>
				<div className={styles['main-container']}>
					<div className={styles['title']}>{research?.title}</div>
					<div className={styles['references']}>{research?.author}</div>
					<div className={styles['references']}>
						{research?.sponsor ? <>Sponsor</> : null}: {research?.sponsor}
					</div>
					{research?.start && research?.end ? (
						<div className={styles['date']}>
							{new Date(research?.start).toISOString().slice(0, 10)} -{' '}
							{new Date(research?.end).toISOString().slice(0, 10)}
						</div>
					) : null}
					<img src={research?.thumbnail} />
					<div className={styles['paragraphs']}>
						<div className={styles['text']}>{research?.abstract}</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
