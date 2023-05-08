"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import SearchInput from "./components/search-component/SearchInput";
import MessageList from "./components/message-list/index";
import {mockData} from "./mock/mockdata";

export default function Home() {
  const [data, setData] = useState(mockData);

  const onSearch = (searchValue) => {
    console.log(searchValue);
    let matchedMessages = [];
    if (searchValue == "") {
      setData(mockData);
    } else {
      matchedMessages = mockData.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      // let pattern = `/${searchValue}/i`;
      // console.log(searchValue);

      setData(matchedMessages);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
        <SearchInput onSearch={onSearch} />
        <MessageList data={data} />
      </div>
    </main>
  );
}
