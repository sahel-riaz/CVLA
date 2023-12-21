'use client'

import React from 'react'
import styles from './footer.module.css'
import { useRouter } from 'next/navigation'

export default function Footer() {
	const router = useRouter()

	return (
		<div className={styles['container']}>
			<img src='/svgs/logo.svg' className={styles['logo']} onClick={() => router.push('/')} />
			<div className={styles['buttonWrapper']}>
				<div className={styles['button']} onClick={() => router.push('/research')}>
					RESEARCH
				</div>
				<div className={styles['button']} onClick={() => router.push('/publications')}>
					PUBLICATIONS
				</div>
				<div className={styles['button']} onClick={() => router.push('/')}>
					NEWS
				</div>
				<div className={styles['button']} onClick={() => router.push('/people')}>
					PEOPLE
				</div>
				<div className={styles['button']} onClick={() => router.push('/')}>
					EVENTS
				</div>
				<div className={styles['button']} onClick={() => router.push('/contacts')}>
					CONTACT US
				</div>
			</div>
			<div className={styles['socialWrapper']}>
				<img src='/svgs/instagram.svg' className={styles['social']} />
				<img src='/svgs/twitter.svg' className={styles['social']} />
				<img src='/svgs/youtube.svg' className={styles['social']} />
				<img src='/svgs/whatsapp.svg' className={styles['social']} />
			</div>
			<div className={styles['contentWrapper']}>
				<div className={styles['heading']}>National Institute of Technology, Calicut</div>
				<div className={styles['byline']}>
					Calicut Mukkam Road, Kattangal <br></br> Kerala 673601
				</div>
				<div className={styles['plug']}>Developed by: Aadhavan & Sahel, NITC CSE&apos; 24</div>
			</div>
		</div>
	)
}
