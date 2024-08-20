import React from 'react';
import styles from "@/styles/components/_Chapter.module.scss"
import { DateUtil } from '@/utils/DateUtils'

const Chapter = ({
	name = '',
	updateAt = new Date(),
	active = false
}) => {
	return (
		<div className={styles.main}>
			<h2 className={`${styles.h2_name} ${active && styles.h2_name_active}`}>{name}</h2>
			<span className={styles.h2_update_at}>{DateUtil.formatDateSince(updateAt)}</span>
		</div>
	);
};

export default Chapter;
