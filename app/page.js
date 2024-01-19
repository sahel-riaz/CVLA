'use client'
import React from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUs from '@/components/ContactUs'

export default function Home() {
	const aboutUsRef = useRef(null)
	const router = useRouter()
	const handleClick = () => {
		if (aboutUsRef.current) {
			aboutUsRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<div className={styles['container']}>
			<div className={styles['main-container']}>
				<Navbar />
				<div className={styles['landing-container']}>
					<div className={styles['landing-content-container']}>
						<div className={styles['landing-title']}>
							Computer Vision, Learning and Applications Research Group
						</div>
						<div className={styles['landing-byline']}>
							Explore the future of Computer Vision, Learning, and Applications with our Research
							Group. Innovation awaits.
						</div>
						<div className={styles['explore-button']} onClick={() => router.push('/publications')}>
							<img src='/svgs/arrow_outward.svg' />
							Explore
						</div>
					</div>
					<img src='/svgs/landing-svg.svg' className={styles['landing-svg']} />
				</div>
				<div className={styles['learn-more']} onClick={handleClick}>
					<div className={styles['learn-more-text']}>Learn more</div>
					<img src='/svgs/expand_more.svg' className={styles['arrow-svg']} />
				</div>
			</div>
			<div className={styles['about-us-container']} ref={aboutUsRef}>
				<img src='/svgs/about-us.svg' className={styles['about-us-svg']} />
				<div className={styles['about-us-content']}>
					<div className={styles['title']}>About us</div>
					<p>
						Computer Vision, Learning and Applications Research Group (CVLA) is a unique, dynamic
						and a not for profit research body in the field of artificial intelligence, machine
						learning, and computer vision. Our group provides strategic research insights on machine
						learning and computer vision to achieve your desired research and learning outcomes. We
						hold ourselves accountable to motivate and train young talent to undertake research in
						computer vision and allied fields to address problems in our daily life and to serve
						society.
					</p>
				</div>
			</div>
			<div className={styles['join-us-container']}>
				<div className={styles['join-us-content']}>
					<div className={styles['title']}>Join Us</div>
					<div className={styles['join-us-text']}>
						<p>
							If you have an interest in collaborating on the topics mentioned below, please forward
							your CV via email. (Open to B.Tech, M.Tech, and Ph.D. candidates).
						</p>
						<br></br>
						<ol>
							<li>Object Movement Pattern detection</li>
							<li>Deep Learning and IoT Based Object Classification and Movement Tracking</li>
							<li>Earlier Breast Cancer Detections- mammogram Images</li>
							<li>Real-Time Traffic Signal Prediction and Control using Deep Q-Network</li>
						</ol>
					</div>
				</div>
				<div className={styles['contact-card']}>
					<ContactUs
						image='/svgs/contact-email.svg'
						title='BY EMAIL'
						info='prabum@nitc.ac.in'
						height='230px'
						width='286px'
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
