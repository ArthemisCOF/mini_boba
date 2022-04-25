import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import config from "../config/config";
const Layout = (props) => {
  const router = useRouter();
  const topButton = () => {
    return (
      <div className={styles.boxmenu}>
        <button
          className={styles.mainmenu}
          onClick={() => {
            router.push("/");
          }}>Home</button>
        <button
          className={styles.mainmenu}
          onClick={() => {
            router.push("/shop");
          }}>Menu</button>
        <button
          className={styles.mainmenu}
          onClick={() => {
            router.push("/login");
          }}>Login</button>
        <button
          className={styles.mainmenu}
          onClick={() => {
            axios
              .get(`${config.URL}/logout`, { withCredentials: true })
              .then((res) => {
                // console.log(res);
                localStorage.removeItem("userid");
                window.location.reload();
              })
              .catch((error) => {
                console.log(error);
              });
          }}>Logout</button>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>TEA CAFE</title>
      </Head>
      <main className={styles.main} style={{backgroundImage: "https://i.pinimg.com/564x/2d/35/ea/2d35ea12d3db8c669b91cc12b597ada7.jpg"}}>
        <div className="row-justify-between" style={{ backgroundColor : '#181818' }}>
          <div className="rows" style ={{ color:'white', alignItems: 'center' }}>
            <img className={styles.logo} src={"https://talkboba.com/wp-content/uploads/2019/11/mockup-95af4edc.png"}></img>
            <div className="flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <h1  className={styles.title} >TEA CAFE </h1>
              <small>BOBATEA CLUB</small>
            </div>
           
            
          </div>
          <div style={{ paddingRight: '5%' }}>{topButton()}</div>
        </div>
        <div>{props.children}</div>
      </main>
    </div>
  );
};

export default Layout;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
