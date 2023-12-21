'use client'

import React, { useEffect, useState } from 'react'
import styles from './publications.module.css'
import { useRef } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import PublicationsCard from '@/components/PublicationsCard'
import QuickNavigation from '@/components/QuickNavigation'
import { pb } from '@/lib/pocketbase'

export default function Publications() {
	const journalsRef = useRef(null)
	const conferencesRef = useRef(null)
	const patentsRef = useRef(null)
	const bookChaptersRef = useRef(null)

	const [journals, setJournals] = useState([])
	const [conferences, setConferences] = useState([])
	const [patents, setPatents] = useState([])
	const [bookChapters, setBookChapters] = useState([])

	const quickLinks = {
		Journals: 'Explore the latest research in academic journals',
		Conferences: 'Discover insights from conferences and symposiums',
		Patents: 'Access patented innovations and intellectual property',
		'Book chapters': 'Find in-depth knowledge in published book chapters',
	}

	useEffect(() => {
		;(async () => {
			const publicationsRecords = await pb.collection('publications').getFullList({
				$autoCancel: false,
			})

			const tempJournals = []
			const tempConferences = []
			const tempPatents = []
			const tempBookChapters = []

			for (let r of publicationsRecords) {
				r.thumbnail = pb.getFileUrl(r, r.thumbnail)
				if (r.type == 'journals') tempJournals.push(r)
				else if (r.type == 'conferences') tempConferences.push(r)
				else if (r.type == 'patents') tempPatents.push(r)
				else if (r.type == 'book_chapters') tempBookChapters.push(r)
			}
			setJournals(tempJournals)
			setConferences(tempConferences)
			setPatents(tempPatents)
			setBookChapters(tempBookChapters)
		})()
	}, [])

	return (
		<div className={styles['container']}>
			<Navbar />
			<div className={styles['main-container']}>
				<div className={styles['left-container']}>
					<div className={styles['publications']}>
						<div className={styles['title']}>Publications</div>
						{journals?.length ? (
							<div className={styles['publications-wrapper']} ref={journalsRef}>
								<div className={styles['publication-title']}>Journals</div>
								<div className={styles['publication-list']}>
									{journals?.map((journal, index) => (
										<PublicationsCard
											key={index}
											image={journal?.thumbnail}
											date={journal?.date}
											title={journal?.title}
											references={journal?.citation}
										/>
									))}
								</div>
							</div>
						) : null}
						{conferences?.length ? (
							<div className={styles['publications-wrapper']} ref={conferencesRef}>
								<div className={styles['publication-title']}>Conferences</div>
								<div className={styles['publication-list']}>
									{conferences?.map((conference, index) => (
										<PublicationsCard
											key={index}
											image={conference?.thumbnail}
											date={conference?.date}
											title={conference?.title}
											references={conference?.citation}
										/>
									))}
								</div>
							</div>
						) : null}
						{patents?.length ? (
							<div className={styles['publications-wrapper']} ref={patentsRef}>
								<div className={styles['publication-title']}>Patents</div>
								<div className={styles['publication-list']}>
									{patents?.map((patent, index) => (
										<PublicationsCard
											key={index}
											image={patent?.thumbnail}
											date={patent?.date}
											title={patent?.title}
											references={patent?.citation}
										/>
									))}
								</div>
							</div>
						) : null}
						{bookChapters?.length ? (
							<div className={styles['publications-wrapper']} ref={bookChaptersRef}>
								<div className={styles['publication-title']}>Book Chapters</div>
								<div className={styles['publication-list']}>
									{bookChapters?.map((bookChapter, index) => (
										<PublicationsCard
											key={index}
											image={bookChapter?.thumbnail}
											date={bookChapter?.date}
											title={bookChapter?.title}
											references={bookChapter?.citation}
										/>
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
							journalsRef={journalsRef}
							conferencesRef={conferencesRef}
							patentsRef={patentsRef}
							bookChaptersRef={bookChaptersRef}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

//  <QuickNavigation quickLinks={quickLinks} />
