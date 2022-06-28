import React from 'react'
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
        <div className={styles.footerInfo}>
          {t('Valorant API Documentation')}
        </div>
        <div className={styles.footerIcon}>
          <a href="https://www.linkedin.com/in/gaurav-bansal-270a78238">
            <FontAwesomeIcon className={styles.iconStyle} icon={faLinkedin} size="lg" />        
          </a> 
          <a href="https://github.com/icicleee">
            <FontAwesomeIcon className={styles.iconStyle} icon={faGithub} size="lg" />          
          </a> 
        </div>
    </footer>
  )
}

export default Footer;