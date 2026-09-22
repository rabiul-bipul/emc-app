import "./index.css";

function App() {
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

    medical: {
      allergies: "None known",
      conditions: "None known",
      medications: "None",
    },

    note: "If I am unable to communicate, please contact my family immediately.",
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="hero">
        <div className="badge">
          <span className="badge-dot"></span>
          EMERGENCY INFORMATION
        </div>

        <div className="avatar" style={{ padding: 0, overflow: "hidden" }}>
          <img
            src="/01852558135.jpg"
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
          If you found this page, I may need help.
          <br />
          Please contact me or my family.
        </p>
      </header>

      <main className="content">
        {/* Basic Information */}
        <section className="card basic-card">
          <div className="info-box">
            <span className="icon">
              <img src="/blood-type-a.png" />
            </span>
            <span className="label">Blood Group</span>
            <strong>{person.bloodGroup}</strong>
          </div>

          <div className="info-box">
            <span className="icon">
              <img src="/mobileb.png" />
            </span>
            <span className="label">Phone</span>
            <strong>{person.phone}</strong>
          </div>
        </section>

        {/* Call Me */}
        <section className="card">
          <div className="section-title">
            <div className="title-icon">📱</div>

            <div>
              <h2>Contact Me</h2>
              <p>Try calling me first</p>
            </div>
          </div>

          <a href={`tel:${person.phone}`} className="main-call">
            📞 Call Me
          </a>
        </section>

        {/* Emergency Contacts */}
        <section className="card">
          <div className="section-title">
            <div className="title-icon">
              <img src="/emergency-call.png" />
            </div>

            <div>
              <h2>Emergency Contacts</h2>
              <p>Please contact my family</p>
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
                  <span>{contact.relation}</span>
                  <small>{contact.phone}</small>
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  className="call-button"
                  aria-label={`Call ${contact.name}`}
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
            <h3>Important</h3>
            <p>{person.note}</p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <strong>Rabiul Islam Bipul</strong>
          <span>Emergency information</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
