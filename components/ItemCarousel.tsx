import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/components/_itemCarousel.module.scss';
import { DateUtil } from "@/utils/DateUtils";
import path from "@/constants/path";
import { FiClock } from 'react-icons/fi'
import { DataUtils } from '@/utils/DataUtils';
import { useWindowSize } from 'usehooks-ts';
import Image from 'next/image';

type ItemCarouselType = {
	id: string,
	src: string,
	name: string,
	lastChapter?: string,
	updatedAt: Date
}


const ItemCarousel = (props: ItemCarouselType) => {
	const { id, src, name, lastChapter, updatedAt } = props;

	// const ref = useRef();
	// const [width, setWidth] = useState(0);

	// const { width: windowWidth } = useWindowSize();

	// useEffect(() => {
	// 	if (ref.current?.clientWidth !== width) setWidth(ref.current?.clientWidth)
	// }, [ref.current?.clientWidth, windowWidth]);

	// const onImgLoad = (e) => {
	// 	setWidth(e.target.offsetWidth)
	// }

	return (
		<div className={styles.main}>
			<span aria-hidden className={styles.wrapperImage}>
				<Image
					alt='img'
					src={src}
					width={200}
					height={200}
				/>
				{/* <img onLoad={onImgLoad} ref={ref} src={img} alt={name} style={{ width }} /> */}
				<div className={styles.footerCaption}>
					<h3 className={styles.titleName}>{name}</h3>
					<div className={styles.content}>
						<a>{'Chapter...'}</a>
						<h3 style={{ display: 'flex', alignItems: "center", gap: "5px" }}><FiClock /> <span>{DateUtil.formatDateSince(updatedAt)}</span></h3>
					</div>
				</div>
			</span>

		</div>
	);
};



export default React.memo(ItemCarousel);
