import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>کارهای روزانه</h3>
          <p className={styles.footerText}>
            مدیریت هوشمندانه کارهای روزمره با ساده‌ترین روش
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>لینک‌های مفید</h4>
          <ul className={styles.footerLinks}>
            <li className={styles.footerLinkItem}>
              <Link to="/aboutUs" className={styles.footerLink}>
                درباره ما
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link to="/" className={styles.footerLink}>
                شرایط استفاده
              </Link>
            </li>
            <li className={styles.footerLinkItem}>
              <Link to="/" className={styles.footerLink}>
                حریم خصوصی
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>ارتباط با ما</h4>
          <p className={styles.footerText}>
            <span>تهران، خیابان بهنام، پلاک ۱۲۳</span>
            <br />
            <span>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</span>
            <br />
            <span>ایمیل: mraotp@gmail.com</span>
          </p>
          <div className={styles.socialIcons}>
            <Facebook className={styles.icon} />
            <Twitter className={styles.icon} />
            <Instagram className={styles.icon} />
            <LinkedIn className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 کلیه حقوق برای کارهای روزانه محفوظ است</p>
      </div>
    </footer>
  );
};

export default Footer;
