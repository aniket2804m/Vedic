import React from "react";

const Term = () => {

  const styles = {
    container: {
      background: "#fff",
      color: "#000",
      padding: "70px 15px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      display: "flex",
      justifyContent: "center",
    },

    inner: {
      maxWidth: "900px", 
      width: "100%",
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "clamp(20px, 3vw, 26px)", // 👈 responsive font
      fontWeight: "bold",
    },

    text: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "20px",
      textAlign: "center",
    },

    section: {
      marginBottom: "15px",
      borderBottom: "1px solid #eee",
      paddingBottom: "10px",
    },

    sectionTitle: {
      fontSize: "clamp(14px, 2.5vw, 16px)",
      fontWeight: "600",
      marginBottom: "5px",
    },

    sectionText: {
      fontSize: "clamp(13px, 2.5vw, 14px)",
      color: "#666",
    },

    contact: {
      marginTop: "20px",
      background: "#f5f5f5",
      padding: "15px",
      borderRadius: "8px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.inner}> {/* 👈 center wrapper */}

        <h2 style={styles.heading}>Terms & Conditions</h2>

        <p style={styles.text}>
          Welcome to our website. By accessing or using our platform, you agree to comply with the following terms and conditions.
        </p>

        {[
          ["1.",  "This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generatedby a computer system and does not require any physical or digital signatures."],
          ["2.",  "This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name www.jiivaastro.com ('Website'), including the related mobile site and mobile application (hereinafter referred to as 'Platform')."],
          ["3", "The Platform is owned by Jiivaastro Academy, a company incorporated under the Companies Act, 1956 with its registered office at C 507 nilaya building,mantra city road,near star bazar, Talegaon dabhade pune ,Pune ,India (hereinafter referred to as ‘Platform Owner’, 'we', 'us', 'our').."],
          ["4.", "For the purpose of these Terms of Use, wherever the context so requires ‘you’, 'your' or ‘user’ shall mean any natural or legal person who has agreed to become a user/buyer on the Platform.."],
          ["5.", "Returns", "We offer returns and exchanges within 7 days of delivery. Products must be unused, unwashed, and in original condition with tags intact. "],
          ["6. COD", "Available for selected locations with extra charges."],
          ["7. Colors", "We strive to display product colors accurately. However, slight variations may occur due to lighting or screen settings."],
          ["8. User Responsibility", "Users must not misuse the website or engage in fraudulent activities. Any violation may lead to account suspension."],
          ["9. Intellectual Property", "All content, including images, logos, and designs, belongs to us and cannot be used without permission."],
          ["10. Liability", "We are not responsible for delays, damages, or losses caused by external factors beyond our control."],
          ["11. Changes", "We reserve the right to update these terms at any time. Continued use of the website means you accept the updated terms."]
        ].map(([title, text], i) => (
          <div key={i} style={styles.section}>
            <h4 style={styles.sectionTitle}>{title}</h4>
            <p style={styles.sectionText}>{text}</p>
          </div>
        ))}

        <div style={styles.contact}>
          <h4>Contact Us</h4>
          <p>Email: Jiivaastroacademy@gmail.com</p>
          <p>Phone: +91 - 7400344849</p>
        </div>

      </div>
    </div>
  );
};

export default Term;