import React from 'react'
import styles from './contacts.module.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ContactUs from '@/components/ContactUs'

export default function Contacts() {
	return (
		<div className={styles['container']}>
			<Navbar />
			<div className={styles['content-container']}>
				<div className={styles['heading']}>Contact Us</div>
				<div className={styles['cards-container']}>
					<ContactUs image='/svgs/contact-call.svg' title='BY PHONE' info='+91 9994058168' />
					<ContactUs
						image='/svgs/contact-loc.svg'
						title='FIND US'
						info='National Institute of Technology Calicut, Kerala 673601'
					/>
					<ContactUs image='/svgs/contact-email.svg' title='BY EMAIL' info='prabum@nitc.ac.in' />
				</div>
			</div>
			<Footer />
		</div>
	)
}
