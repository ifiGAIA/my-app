// import styles from './Footer.css';
import styles from './Footer.module.css';
export default function Footer(){
    return(
        <div className={styles.version}>
            <div class={styles.sign}>More About Me</div>
            <div className={styles.triangle}></div>
            <a href='https://www.linkedin.com/in/%E4%BB%A5%E6%A8%82-%E9%99%B3-ba99451a4/'><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href='https://github.com/ifiGAIA?tab=repositories'><ion-icon name="logo-github"></ion-icon></a>
            <a href='https://www.instagram.com/if_i_gaia/'><ion-icon name="logo-instagram"></ion-icon></a>
            <a href='https://www.facebook.com/profile.php?id=100000345072592'><ion-icon name="logo-facebook"></ion-icon></a>
		</div>
        
    );
}