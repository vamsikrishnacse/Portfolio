import React from "react";
import ScrollService from "../../utilities/ScrollService";

export default function Footer() {
  const styles = {
    footerContainer: {
      backgroundColor: "#121212",
      color: "#ccc",
      padding: "20px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderTop: "1px solid #333",
      position: "relative",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    paragraph: {
      margin: 0,
      fontSize: "14px",
      color: "#aaa",
    },
    icons: {
      display: "flex",
      gap: "20px",
      marginTop: "10px",
    },
    iconLink: {
      backgroundColor: "#1e1e1e",
      padding: "10px",
      borderRadius: "50%",
      color: "#fff",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    },
    icon: {
      fontSize: "16px",
    },
    scrollButton: {
      position: "absolute",
      right: "20px",
      bottom: "20px",
      width: "45px",
      height: "45px",
      color: "#fff",
      fontSize: "18px",
      backgroundColor: "#ff5823",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(255, 88, 35, 0.3)",
      transition: "transform 0.3s ease",
    },
  };

  const handleHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? "translateY(-4px)" : "translateY(0)";
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.content}>
        <p style={styles.paragraph}>© 2025 Dharun Narayanan. All rights reserved.</p>
        <div style={styles.icons}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <i className="fa fa-linkedin" style={styles.icon}></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <i className="fa fa-github" style={styles.icon}></i>
          </a>
          <a href="mailto:your.email@example.com" style={styles.iconLink}>
            <i className="fa fa-envelope" style={styles.icon}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <i className="fa fa-twitter" style={styles.icon}></i>
          </a>
        </div>
      </div>

      <button
        style={styles.scrollButton}
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </footer>
  );
}
