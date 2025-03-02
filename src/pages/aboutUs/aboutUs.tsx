import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./aboutUs.module.css";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "نیما",
      role: "توسعه دهنده فرانت‌اند",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1740920265~exp=1740923865~hmac=fe654ddf5806ddb0beefb979ea97673e3655b30306ada68df92de447ed82dd6b&w=1060",
      bio: "توسعه رابط کاربری با React و TypeScript",
    },
    {
      name: "کامیار",
      role: "توسعه دهنده بک اند",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1740920308~exp=1740923908~hmac=c7f2770d5461a1734585ddb3e2e6abba3615d92e1df11e32be591d83bbce1ecc&w=1060",
      bio: "توسعه API با Node.js و MongoDB",
    },
    {
      name: "مهراد",
      role: "توسعه دهنده بک‌اند",
      image:
        "https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?t=st=1740920312~exp=1740923912~hmac=47281689da5b3bb2d4b41e2a19ceb1d8f0e01d23fa020f06626640713765d0fe&w=1060",
      bio: "توسعه API با Node.js و MongoDB",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>درباره ما</h1>

        <div className={styles.aboutContent}>
          <div className={styles.textSection}>
            <p className={styles.description}>
              کارهای روزانه یک پلتفرم مدیریت وظایف پیشرفته است که به شما کمک
              می‌کند کارهای روزمره خود را به صورت سازمان‌یافته مدیریت کنید. با
              استفاده از این سامانه می‌توانید:
            </p>
            <ul className={styles.featuresList}>
              <li>✅ وظایف خود را اولویت‌بندی کنید</li>
              <li>✅ پیشرفت کارها را پیگیری کنید</li>
              <li>✅ با تیم خود همکاری کنید</li>
              <li>✅ اعلان‌های هوشمند دریافت کنید</li>
            </ul>
          </div>

          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.17574554233113!2d51.321179868605896!3d35.73289274376197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd0036649db5%3A0xbeda90060e39a59e!2sKARNAVAL!5e0!3m2!1sen!2s!4v1740921374684!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <h2 className={styles.teamTitle}>تیم ما</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.memberImage}
              />
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
