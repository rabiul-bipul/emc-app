import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem("emc-language") || "bn",
  );
  const [isDark, setIsDark] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7;
  });

  useEffect(() => {
    const updateThemeByTime = () => {
      const hour = new Date().getHours();
      setIsDark(hour >= 19 || hour < 7);
    };

    updateThemeByTime();
    const intervalId = setInterval(updateThemeByTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("emc-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const person = {
    name: "Rabiul Islam Bipul",
    bloodGroup: "A+",
    phone: "+880 1607431819",

    emergencyContacts: [
      {
        name: "Rafiqul Islam",
        relation: "Father",
        phone: "+880 1859315298",
      },
      {
        name: "Nazma Khatun",
        relation: "Mother",
        phone: "+880 1835377641",
      },
      {
        name: "Risha",
        relation: "Sister",
        phone: "+880 1875937308",
      },
      {
        name: "Nazmun Nahar (Benu)",
        relation: "Aunty",
        phone: "+880 1721825115",
      },
      {
        name: "Maruf",
        relation: "Friend",
        phone: "+880 1875754831",
      },
    ],
    note: "If I am unable to communicate, please contact my family immediately.",
  };

  const text = {
    en: {
      badge: "EMERGENCY INFORMATION",
      intro: "If you found this page, I may need help.",
      introFollowup: "Please contact me or my family.",
      bloodGroup: "Blood Group",
      phone: "Phone",
      contactMe: "Contact Me",
      callFirst: "Try calling me first",
      callMe: "Call Me",
      emergencyContacts: "Emergency Contacts",
      contactFamily: "Please contact my family",
      relations: {
        Father: "Father",
        Mother: "Mother",
        Sister: "Sister",
        Aunty: "Aunty",
        Friend: "Friend",
        Brother: "Brother",
      },
      important: "Important",
      note: person.note,
      footer: "Emergency information",
      callContact: (name) => `Call ${name}`,
      languageButton: "বাংলা",
      languageLabel: "Switch language to Bangla",
    },
    bn: {
      badge: "জরুরি তথ্য",
      intro: "আপনি এই পৃষ্ঠাটি পেয়ে থাকলে, আমার সাহায্যের প্রয়োজন হতে পারে।",
      introFollowup: "দয়া করে আমাকে অথবা আমার পরিবারের সঙ্গে যোগাযোগ করুন।",
      bloodGroup: "রক্তের গ্রুপ",
      phone: "ফোন",
      contactMe: "আমার সঙ্গে যোগাযোগ করুন",
      callFirst: "প্রথমে আমাকে ফোন করার চেষ্টা করুন",
      callMe: "আমাকে ফোন করুন",
      emergencyContacts: "জরুরি যোগাযোগ",
      contactFamily: "দয়া করে আমার পরিবারের সঙ্গে যোগাযোগ করুন",
      relations: {
        Father: "বাবা",
        Mother: "মা",
        Sister: "বোন",
        Aunty: "খালা",
        Friend: "বন্ধু",
        Brother: "ভাই",
      },
      important: "গুরুত্বপূর্ণ",
      note: "আমি কথা বলতে না পারলে, দয়া করে অবিলম্বে আমার পরিবারের সঙ্গে যোগাযোগ করুন।",
      footer: "জরুরি তথ্য",
      callContact: (name) => `${name}-কে ফোন করুন`,
      languageButton: "English",
      languageLabel: "Switch language to English",
    },
  }[language];

  return (
    <div className={`page ${isDark ? "theme-dark" : ""}`} lang={language}>
      {/* Header */}
      <header className="hero">
        <button
          className="language-toggle"
          type="button"
          onClick={() => setLanguage(language === "en" ? "bn" : "en")}
          aria-label={text.languageLabel}
        >
          {text.languageButton}
        </button>

        <div className="badge">
          <span className="badge-dot"></span>
          {text.badge}
        </div>

        <div className="avatar" style={{ padding: 0, overflow: "hidden" }}>
          <img
            src="/pp.jpg"
            alt={person.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>

        <h1>{person.name}</h1>

        <p>
          {text.intro}
          <br />
          {text.introFollowup}
        </p>
      </header>

      <main className="content">
        {/* Basic Information */}
        <section className="card basic-card">
          <div className="info-box">
            <span className="icon">
              <img src="/blood-type-a.png" />
            </span>
            <span className="label">{text.bloodGroup}</span>
            <strong>{person.bloodGroup}</strong>
          </div>

          <div className="info-box">
            <span className="icon">
              <img src="/mobileb.png" />
            </span>
            <span className="label">{text.phone}</span>
            <strong>{person.phone}</strong>
          </div>
        </section>

        {/* Call Me */}
        <section className="card">
          <div className="section-title">
            <div className="title-icon">📱</div>

            <div>
              <h2>{text.contactMe}</h2>
              <p>{text.callFirst}</p>
            </div>
          </div>

          <a href={`tel:${person.phone}`} className="main-call">
            📞 {text.callMe}
          </a>
        </section>

        {/* Emergency Contacts */}
        <section className="card">
          <div className="section-title">
            <div className="title-icon">
              <img src="/emergency-call.png" />
            </div>

            <div>
              <h2>{text.emergencyContacts}</h2>
              <p>{text.contactFamily}</p>
            </div>
          </div>

          <div className="contacts">
            {person.emergencyContacts.map((contact) => (
              <div className="contact" key={contact.relation}>
                <div className="contact-avatar">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="30"
                    height="30"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                </div>

                <div className="contact-details">
                  <strong>{contact.name}</strong>
                  <span>{text.relations[contact.relation]}</span>
                  <small>{contact.phone}</small>
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  className="call-button"
                  aria-label={text.callContact(contact.name)}
                >
                  <img src="/mobile.png" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note */}
        <section className="warning">
          <div className="warning-icon">⚠️</div>

          <div>
            <h3>{text.important}</h3>
            <p>{text.note}</p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <strong>Rabiul Islam Bipul</strong>
          <span>{text.footer}</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
