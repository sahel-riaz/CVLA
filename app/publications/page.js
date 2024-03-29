'use client'

import React, { useEffect, useState } from 'react'
import styles from './publications.module.css'
import { useRef } from 'react'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import PublicationsCard from '@/components/PublicationsCard'
import QuickNavigation from '@/components/QuickNavigation'
import { pb } from '@/lib/pocketbase'
import Link from 'next/link'

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
										<Link href={`/publications/${journal?.id}`} key={index}>
											<PublicationsCard
												image={journal?.thumbnail}
												date={new Date(journal?.date).toISOString().slice(0, 10)}
												title={journal?.title}
												references={journal?.citation}
											/>
										</Link>
									))}
								</div>
							</div>
						) : null}
						{conferences?.length ? (
							<div className={styles['publications-wrapper']} ref={conferencesRef}>
								<div className={styles['publication-title']}>Conferences</div>
								<div className={styles['publication-list']}>
									{conferences?.map((conference, index) => (
										<Link href={`/publications/${conference?.id}`} key={index}>
											<PublicationsCard
												image={conference?.thumbnail}
												date={new Date(conference?.date).toISOString().slice(0, 10)}
												title={conference?.title}
												references={conference?.citation}
											/>
										</Link>
									))}
								</div>
							</div>
						) : null}
						{patents?.length ? (
							<div className={styles['publications-wrapper']} ref={patentsRef}>
								<div className={styles['publication-title']}>Patents</div>
								<div className={styles['publication-list']}>
									{patents?.map((patent, index) => (
										<Link href={`/publications/${patent?.id}`} key={index}>
											<PublicationsCard
												image={patent?.thumbnail}
												date={new Date(patent?.date).toISOString().slice(0, 10)}
												title={patent?.title}
												references={patent?.citation}
											/>
										</Link>
									))}
								</div>
							</div>
						) : null}
						{bookChapters?.length ? (
							<div className={styles['publications-wrapper']} ref={bookChaptersRef}>
								<div className={styles['publication-title']}>Book Chapters</div>
								<div className={styles['publication-list']}>
									{bookChapters?.map((bookChapter, index) => (
										<Link href={`/publications/${bookChapter?.id}`} key={index}>
											<PublicationsCard
												image={bookChapter?.thumbnail}
												date={new Date(bookChapter?.date).toISOString().slice(0, 10)}
												title={bookChapter?.title}
												references={bookChapter?.citation}
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
