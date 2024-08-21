import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IoIosSearch, IoIosClose } from 'react-icons/io'
import { FaSearch, FaBars, FaRegLightbulb } from 'react-icons/fa'
import styles from '@/styles/layout/_header.module.scss';
import Image from 'next/image';

function Header() {

  // const historyDropdownRef = useRef(null);

  // useOnClickOutside(historyDropdownRef, handleClickHistoryOutside)

  return (
    <header className={styles.header}>
      <div className={"container"}>
        <Row className={'items-center'}>
          <Col md={3} sm={4} xs={5}>
            <div className={styles.navHeader}>
              <a href='/'>
                <Image
                  priority
                  width={150}
                  height={32}
                  src={'/images/logo.png'}
                  alt='logo'
                />
              </a>
            </div>
          </Col>
          <Col md={4} className={styles.display}>
            <div className={styles.wrapperSearch}>
              <input className={styles.inputSearch} placeholder={'Tìm truyện...'} />
              <IoIosSearch className={styles.iconWrapperSearch} size={20} />
              {/* <ItemSearch data={data}/> */}
            </div>
          </Col>
          <Col md={2} sm={4} xs={4} className={styles.light_chat}>
            <div className="dark-mode-switch">
              <FaRegLightbulb size={24} type="checkbox" className={styles.light} id="theme-toggle" />
            </div>
          </Col>
          <Col md={0} sm={4} xs={3}>
            <div className={styles.responsive_search}>
              <div><FaSearch size={23} className={styles.iconSearch} /></div>
              <div className={styles.bar}><FaBars size={23} /></div>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header;