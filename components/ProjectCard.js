import React from 'react'
import styles from './project-card.module.css'

export default function ProjectCard({
	image,
	startDate = null,
	endDate = null,
	title,
	desc,
	sponsor,
	amount,
}) {
	return (
		<div className={styles['container']}>
			{image != '' ? <img src={image} className={styles['image']} /> : null}
			<div className={styles['content']}>
				<div className={styles['date']}>
					{startDate} {endDate != null ? <>- {endDate}</> : null}
				</div>
				<div className={styles['title']}>{title}</div>
				<div className={styles['desc']}>{desc}</div>
				<div className={styles['info-wrapper']}>
					<div className={styles['label']}>Sponsor:</div>
					<div className={styles['text']}>{sponsor}</div>
				</div>
				<div className={styles['info-wrapper']}>
					<div className={styles['label']}>Amount:</div>
					<div className={styles['text']}>{amount}</div>
				</div>
				<div className={styles['read-more']}>
					<div className={styles['read-more-text']}>Read more</div>
					<img src='/svgs/arrow_forward.svg' />
				</div>
			</div>
		</div>
	)
}
