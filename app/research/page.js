'use client'

import React, { useEffect, useState } from 'react'
import styles from './research.module.css'
import Navbar from '@/components/common/Navbar'
import ResearchCard from '@/components/ResearchCard'
import Footer from '@/components/common/Footer'
import { pb } from '@/lib/pocketbase'
import Link from 'next/link'

export default function Research() {
	const [research, setResearch] = useState([])

	useEffect(() => {
		;(async () => {
			const researchRecords = await pb.collection('research').getFullList({
				$autoCancel: false,
			})

			let tempResearch = []

			for (let r of researchRecords) {
				r.thumbnail = pb.getFileUrl(r, r.thumbnail)
				tempResearch.push(r)
			}
			setResearch(tempResearch)
		})()
	})

	return (
		<div className={styles['big-container']}>
			<Navbar />
			<div className={styles['container']}>
				<div className={styles['research-container']}>
					<div className={styles['heading']}>Research</div>
					<div className={styles['research-cards']}>
						{research?.map((r, index) => (
							<Link href={`/research/${r?.id}`} key={index}>
								<ResearchCard
									author={r.author}
									startDate={r?.start ? new Date(r?.start)?.toISOString().slice(0, 10) : null}
									endDate={r?.end ? new Date(r?.end)?.toISOString().slice(0, 10) : null}
									title={r.title}
									sponsor={r.sponsor}
									image={r.thumbnail}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
