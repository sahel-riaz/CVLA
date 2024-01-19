'use client'

import styles from './people.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import PeopleCard from '@/components/PeopleCard'
import { pb } from '@/lib/pocketbase'
import { useEffect, useState } from 'react'

export default function People() {
	const [scholars, setScholars] = useState([])
	const [faculties, setFaculties] = useState([])
	const [mtech, setMtech] = useState([])
	const [interns, setInterns] = useState([])

	useEffect(() => {
		;(async () => {
			const peopleRecords = await pb.collection('people').getFullList({
				$autoCancel: false,
			})

			const tempScholars = []
			const tempFaculties = []
			const tempMtech = []
			const tempInterns = []

			for (let r of peopleRecords) {
				r.photo = pb.getFileUrl(r, r.photo)
				if (r.type == 'scholars') tempScholars.push(r)
				else if (r.type == 'faculties') tempFaculties.push(r)
				else if (r.type == 'mtech-btech') tempMtech.push(r)
				else if (r.type == 'interns') tempInterns.push(r)
			}

			setScholars(tempScholars)
			setFaculties(tempFaculties)
			setMtech(tempMtech)
			setInterns(tempInterns)
		})()
	}, [])

	return (
		<div className={styles['container']}>
			<Navbar />
			<div className={styles['main-container']}>
				<div className={styles['content']}>
					<div className={styles['heading']}>Scholars</div>
					<div className={styles['people-wrappers']}>
						<div className={styles['people-wrapper']}>
							<div className={styles['people-container']}>
								{scholars?.map((person, index) => (
									<PeopleCard
										key={index}
										photo={person?.photo}
										name={person?.name}
										designation={person?.designation}
										email={person?.email}
										location={person?.location}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				{mtech?.length > 0 ? (
					<div className={styles['content']}>
						<div className={styles['heading']}>MTech/BTech</div>
						<div className={styles['people-wrappers']}>
							<div className={styles['people-wrapper']}>
								<div className={styles['people-container']}>
									{mtech?.map((person, index) => (
										<PeopleCard
											key={index}
											photo={person?.photo}
											name={person?.name}
											designation={person?.designation}
											email={person?.email}
											location={person?.location}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				) : null}
				{interns?.length > 0 ? (
					<div className={styles['content']}>
						<div className={styles['heading']}>Interns</div>
						<div className={styles['people-wrappers']}>
							<div className={styles['people-wrapper']}>
								<div className={styles['people-container']}>
									{interns?.map((person, index) => (
										<PeopleCard
											key={index}
											photo={person?.photo}
											name={person?.name}
											designation={person?.designation}
											email={person?.email}
											location={person?.location}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				) : null}
				<div className={styles['content']}>
					<div className={styles['heading']}>Faculties</div>
					<div className={styles['people-wrappers']}>
						<div className={styles['people-wrapper']}>
							<div className={styles['people-container']}>
								{faculties?.map((person, index) => (
									<PeopleCard
										key={index}
										photo={person?.photo}
										name={person?.name}
										designation={person?.designation}
										email={person?.email}
										location={person?.location}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
