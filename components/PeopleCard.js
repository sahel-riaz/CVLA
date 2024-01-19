import React from 'react'
import styles from './peoplecard.module.css'

export default function PeopleCard({ photo, name, designation, email, location }) {
	return (
		<div className={styles['container']}>
			<img src={photo} className={styles['photo']} />
			<div className={styles['content-container']}>
				<div className={styles['name']}>{name}</div>
				<div className={styles['designation']}>{designation}</div>
				{email != '' ? (
					<div className={styles['contact-wrapper']}>
						<div className={styles['contact']}>
							<img src='/svgs/mail.svg' className={styles['image']} />
							<p>{email}</p>
						</div>
					</div>
				) : null}
				<div className={styles['college']}>{location}</div>
			</div>
		</div>
	)
}
