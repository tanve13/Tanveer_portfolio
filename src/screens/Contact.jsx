import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const email = "tanusaini.jandir@gmail.com";
  const phone = "+91-7696767028";
  const whatsappNumber = "917696767028";

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied!`);
  };

  return (
    <div>
      {/* PROFILE HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "16px",
        }}
      >
        <img
          src="/img.jpeg"
          alt="profile"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #3B82F6",
          }}
        />

        <div>
          <h3 style={{ margin: 0, fontSize: "16px" }}>
            Let's Work Together 🤝
          </h3>

          <p style={{ margin: "4px 0 0", fontSize: "12px", opacity: 0.8 }}>
            Open to internships, freelance & collaborations
          </p>

          <span
            style={{
              display: "inline-block",
              marginTop: "6px",
              padding: "3px 10px",
              background: "#16a34a",
              color: "white",
              borderRadius: "20px",
              fontSize: "11px",
            }}
          >
            🟢 Available for Opportunities
          </span>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          backgroundColor: "#1E293B",
          borderRadius: "12px",
          padding: "16px",
          color: "white",
        }}
      >
        {/* EMAIL */}
        <div style={item}>
          <span style={row}>
            <FaEnvelope /> {email}
          </span>

          <button onClick={() => copyToClipboard(email, "Email")} style={btn}>
            <FaCopy />
          </button>
        </div>

        {/* PHONE */}
        <div style={item}>
          <span style={row}>
            <FaPhone /> {phone}
          </span>

          <button onClick={() => copyToClipboard(phone, "Phone")} style={btn}>
            <FaCopy />
          </button>
        </div>

        {/* LOCATION */}
        <div style={item}>
          <span style={row}>
            <FaMapMarkerAlt />Jalandhar,Punjab, India
          </span>
        </div>

        {/* SOCIAL LINKS (FIXED JSX ERROR) */}
        <h4 style={{ marginTop: "16px", marginBottom: "8px" }}>
          Connect
        </h4>

        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="https://www.linkedin.com/in/tanveer-kaur-56a188304/"
            target="_blank"
            rel="noreferrer"
            style={social}
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://github.com/tanve13"
            target="_blank"
            rel="noreferrer"
            style={social}
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* EMAIL BUTTON */}
        <a href={`mailto:${email}`} style={sendBtn}>
          📧 Send Email
        </a>

        {/* WHATSAPP BUTTON (FIXED) */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Tanveer%2C%20I%20checked%20your%20portfolio%20and%20would%20like%20to%20connect!`}
          target="_blank"
          rel="noreferrer"
          style={whatsappBtn}
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>

      {/* FLOATING WHATSAPP ICON (ADD THIS OUTSIDE CARD) */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Tanveer`}
        target="_blank"
        rel="noreferrer"
        style={floatingWhatsapp}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

/* STYLES */
const item = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "10px",
  marginBottom: "8px",
};

const row = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "13px",
};

const btn = {
  background: "transparent",
  border: "none",
  color: "#94A3B8",
  cursor: "pointer",
};

const social = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "8px 12px",
  background: "#334155",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "13px",
  flex: 1,
  justifyContent: "center",
};

const sendBtn = {
  display: "block",
  marginTop: "14px",
  padding: "12px",
  background: "#3B82F6",
  color: "white",
  borderRadius: "10px",
  textAlign: "center",
  textDecoration: "none",
};

const whatsappBtn = {
  display: "block",
  marginTop: "10px",
  padding: "12px",
  background: "#25D366",
  color: "white",
  borderRadius: "10px",
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "600",
};

/* FLOATING BUTTON */
const floatingWhatsapp = {
  position: "fixed",
  bottom: "24px",
  right: "24px",
  width: "56px",
  height: "56px",
  background: "#25D366",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "24px",
  textDecoration: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  zIndex: 1000,
};

export default Contact;