'use client'
import React from 'react'
import { useRef } from 'react'
import styles from './page.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUs from '@/components/ContactUs'

export default function Home() {
	const aboutUsRef = useRef(null)
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
						<div className={styles['explore-button']}>
							{/* <div>Explore</div> */}
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
						The Advanced Vision and Learning Lab (AVLL) seeks to develop novel artificial
						intelligence (AI), machine learning (ML), and computer vision (CV) algorithms. We aim to
						be world leaders in the AI/ML/CV community through innovative solutions, unique
						perspectives, and reproducible research. Our lab seeks excellence in our research,
						academic, and professional environments.<br></br>
						<br></br> AVLL promotes intellectual, professional, and personal growth to achieve
						desired research and learning outcomes. We hold ourselves accountable to create a
						diverse, equitable, and inclusive space for all in the lab, at Texas A&M University, and
						in the broader community.
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
						info='contactus@nitc.ac.in'
						height='230px'
						width='286px'
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
