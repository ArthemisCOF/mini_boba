import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  axios
  return (
    <Layout>
      <div className={styles.homepage}>
        <p className={styles.indexTitle}>WELCOME TO TEABAR</p>
        <button className={styles.indexButton} onClick={() => {
            router.push("/shop");
          }}>BEST SELLER</button>
      </div>
    </Layout>
  );
}
