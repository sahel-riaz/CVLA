'use client'

import styles from './publication-slug.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { pb } from '@/lib/pocketbase'

export default function Slug() {
	const params = useParams()

	const [publication, setPublication] = useState()

	useEffect(() => {
		;(async () => {
			const tempPublicationRecord = await pb.collection('publications').getOne(params?.slug, {
				$autoCancel: false,
			})
			tempPublicationRecord.thumbnail = pb.getFileUrl(
				tempPublicationRecord,
				tempPublicationRecord.thumbnail
			)
			setPublication(tempPublicationRecord)
		})()
	}, [params])

	return (
		<div className={styles['big-container']}>
			<Navbar />
			<div className={styles['container']}>
				<div className={styles['main-container']}>
					<div className={styles['title']}>{publication?.title}</div>
					<div className={styles['references']}>{publication?.citation}</div>
					{publication?.date ? (
						<div className={styles['date']}>
							{new Date(publication?.date).toISOString().slice(0, 10)}
						</div>
					) : null}
					<img src={publication?.thumbnail} />
					<div className={styles['paragraphs']}>
						<div className={styles['text']}>{publication?.abstract}</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
