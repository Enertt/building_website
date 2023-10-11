import styles from "./news.module.css";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import NewsCard from "../../NewsCard/NewsCard";
import { API } from "../../../api/api";
// import newsJson from './news.json'

import { useState, useEffect } from "react";

const News = (props) => {
  if (!props.newsData) {
    props.getNewsThunkCreator();
  }

  const [propsState, setPropsState] = useState({
    title: "",
    date: "",
    body: [],
  });
  const [visibilityState, setVisibilityState] = useState({
    pageVisibility: true,
    newsVisibility: false,
  });

  const news = props.newsData ? (
    props.newsData.map((element) => {
      return (
        <div
          onClick={() => {
            setVisibilityState({ pageVisibility: false, newsVisibility: true });
            setPropsState({
              title: element.title,
              date: element.date,
              body: element.body,
            });
          }}
          className={styles.newsElement}
        >
          {/* <div className={styles.img}>
                        <img src={element.photoSmall} />
                    </div> */}
          <span className={styles.date}>{element.date}</span>
          <span>{element.title}</span>
        </div>
      );
    })
  ) : (
    <div>Loading...</div>
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstSection}>
        <div className={styles.textWrapper}>
          <div className={styles.content}>
            <div
              className={
                visibilityState.pageVisibility
                  ? styles.pageWrapper
                  : styles.pageWrapperNone
              }
            >
              <span className={styles.pageTitle}>Новини компанії</span>
              {news}
            </div>

            <div
              className={
                visibilityState.newsVisibility
                  ? styles.newsCardWrapper
                  : styles.newsCardWrapperNone
              }
            >
              <svg
                onClick={() => {
                  setVisibilityState({
                    pageVisibility: true,
                    newsVisibility: false,
                  });
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              <NewsCard props={propsState} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default News;
