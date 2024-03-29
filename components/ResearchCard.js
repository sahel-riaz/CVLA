import React from 'react'
import styles from './research-card.module.css'

export default function ResearchCard({
	author,
	startDate = null,
	endDate = null,
	title,
	sponsor,
	image,
}) {
	return (
		<div className={styles['container']}>
			<div className={styles['content']}>
				<div className={styles['author-wrapper']}>
					<div>{author}</div>
					<div>·</div>
					<div>
						{startDate} {endDate != null ? <>- {endDate}</> : null}
					</div>
				</div>
				<div className={styles['title']}>{title}</div>
				<div className={styles['sponsor-wrapper']}>
					<div className={styles['sponsor-label']}>Sponsor:</div>
					<div className={styles['sponsor-info']}>{sponsor}</div>
				</div>
				<div className={styles['read-more']}>
					<div className={styles['read-more-text']}>Read more</div>
					<img src='/svgs/arrow_forward.svg' />
				</div>
			</div>
			{image != '' ? <img src={image} className={styles['image']} /> : null}
		</div>
	)
}
