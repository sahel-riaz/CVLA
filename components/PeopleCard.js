import React from 'react'
import styles from './peoplecard.module.css'

export default function PeopleCard({ photo, name, designation, contactNumber, email, address }) {
	return (
		<div className={styles['container']}>
			<img src={photo} className={styles['photo']} />
			<div className={styles['content-container']}>
				<div className={styles['name']}>{name}</div>
				<div className={styles['designation']}>{designation}</div>
				<div className={styles['contact-wrapper']}>
					<div className={styles['contact']}>
						<img src='/svgs/call.svg' className={styles['image']} />
						<p>{contactNumber}</p>
					</div>
					<div className={styles['contact']}>
						<img src='/svgs/mail.svg' className={styles['image']} />
						<p>{email}</p>
					</div>
				</div>
				<div className={styles['college']}>{address}</div>
			</div>
		</div>
	)
}
