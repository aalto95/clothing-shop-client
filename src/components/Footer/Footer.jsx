import React from "react";
import styles from './Footer.module.css'
import vkIcon from './../../assets/icons/vk.svg'
import twitterIcon from './../../assets/icons/twitter.svg'
import instagramIcon from './../../assets/icons/instagram.svg'
import facebookIcon from './../../assets/icons/facebook.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>FAQ</li>
                <li>RETURNS</li>
                <li>SHIPPING</li>
                <li>CONTACT</li>
            </ul>
            <div className={styles.socialNetworks}>
                <a href="https://www.vk.com/"><img src={vkIcon} alt=""/></a>
                <a href="https://www.twitter.com/"><img src={twitterIcon} alt=""/></a>
                <a href="https://www.instagram.com/"><img src={instagramIcon} alt=""/></a>
                <a href="https://www.facebook.com/"><img src={facebookIcon} alt=""/></a>
            </div>
            <p>website by <a href="https://github.com/y2k01">pavlov stanislav</a></p>
        </footer>
    )
}

export default Footer