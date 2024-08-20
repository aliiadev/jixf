import React from 'react';
import styles from "@/styles/components/_Story.module.scss"
import { BsFillEyeFill } from "react-icons/bs"
import { BsFillChatFill } from "react-icons/bs"
import { BsHeartFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { BsCheckLg } from "react-icons/bs"
import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import { DataUtils } from '@/utils/DataUtils'
import Chapter from './Chapter';

const Story = ({
	id = '',
	name = '',
	totalView = 10000,
	totalComment = 25550,
	totalLike = 600000,
	img = '',
	listChapter = [],
	hot = false,
	showFollow = false,
	newSize = false
}) => {

	const onUnFollow = (() => {

	})

	return (
		<div className={`item ${newSize && 'item-2'}`}>
			<div className={styles.item}>
				<div className={styles.wrapperImage}>
					<a>
						{hot && (
							<span className={styles.icon_hot} />
						)}
						<Image
							alt='tr'
							width={200}
							height={200}
							src={img}
						/>
						<div className={styles.view_clearfix}>
							<div className={styles.col_icon}>
								<div className={styles.item_col_icon}>
									<BsFillEyeFill className={styles.icon} />
									<h2 className={styles.text_icon}>{DataUtils.totalNumberFormat(totalView)}</h2>
								</div>
								<div className={styles.item_col_icon}>
									<BsFillChatFill className={styles.icon} />
									<h2 className={styles.text_icon}>{DataUtils.totalNumberFormat(totalComment)}</h2>
								</div>
								<div className={styles.item_col_icon}>
									<BsHeartFill className={styles.icon} />
									<h2 className={styles.text_icon}>{DataUtils.totalNumberFormat(totalLike)}</h2>
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className={styles.footer_item}>
					{showFollow &&
						<Row>
							<Col>
								<p className={styles.btnSuccess}>
									<BsCheckLg size={12} />
									Đang đọc
								</p>
							</Col>
							<Col onClick={onUnFollow}>
								<p className={styles.btnError}>
									<IoClose size={15} />
									Bỏ theo dõi
								</p>
							</Col>
						</Row>
					}
					<a>
						<h2 className={styles.title_text}>{name.toLowerCase()}</h2>
					</a>
					{Array(3).fill(0).map((_, index) => (
						<a key={index} className={styles.chapterItem}>
							<Chapter active={true} name={`Chapter ${index}`} updateAt={new Date()} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Story;
