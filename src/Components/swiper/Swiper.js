import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import sw1 from '../../assets/swiper/sw1.png'
import sw2 from '../../assets/swiper/sw2.png'
import sw3 from '../../assets/swiper/sw3.png'
import sw4 from '../../assets/swiper/sw4.png'
import sw5 from '../../assets/swiper/sw5.png'
import styles from './swiper.module.css'

import { NavLink } from 'react-router-dom'


const SwiperComponent = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={-30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide>
        <NavLink to='/aboutCompany'>
          <div className={styles.swiperItem}>
            <img src={sw1} />
            <div className={styles.gradient}></div>

            <div className={styles.textBlock}>
              <div className={styles.title}>Some title</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
            </div>
          </div>
        </NavLink>
      </SwiperSlide>


      <SwiperSlide>
        <NavLink to='/aboutCompany'>
          <div className={styles.swiperItem}>
            <img src={sw2} />
            <div className={styles.gradient}></div>

            <div className={styles.textBlock}>
              <div className={styles.title}>Some title</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
      <SwiperSlide>
        <NavLink to='/aboutCompany'>
          <div className={styles.swiperItem}>
            <img src={sw3} />
            <div className={styles.gradient}></div>

            <div className={styles.textBlock}>
              <div className={styles.title}>Some title</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
      <SwiperSlide>
        <NavLink to='/aboutCompany'>
          <div className={styles.swiperItem}>
            <img src={sw4} />
            <div className={styles.gradient}></div>

            <div className={styles.textBlock}>
              <div className={styles.title}>Some title</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
      <SwiperSlide>
        <NavLink to='/aboutCompany'>
          <div className={styles.swiperItem}>
            <img src={sw5} />
            <div className={styles.gradient}></div>

            <div className={styles.textBlock}>
              <div className={styles.title}>Some title</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</div>
            </div>
          </div>
        </NavLink>
      </SwiperSlide>
    </Swiper>
  )
}
export default SwiperComponent