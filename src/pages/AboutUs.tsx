const AboutUs = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f4f8fb",
      color: "#333",
    },
    header: {
      backgroundColor: "#1e90ff",
      color: "white",
      padding: "20px 0",
      textAlign: "center",
    },
    content: {
      maxWidth: "1200px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    team: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "20px",
    },
    teamMember: {
      flex: "1 1 calc(33.333% - 20px)",
      textAlign: "center",
    },
    teamImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      border: "4px solid #1e90ff",
      objectFit: "cover",
    },
    footer: {
      backgroundColor: "#1e90ff",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      marginTop: "20px",
    },
  };
  return (
    <div style={styles.container}>
      <header>
        <h1>Welcome to Dressify</h1>
      </header>

      <div style={styles.content}>
        <section>
          <h2>Our Story</h2>
          <p>
            At Dressify, we believe in making fashion accessible, stylish, and
            sustainable. Our journey started with a simple idea: to help people
            express their unique styles with ease and confidence. We are
            committed to offering high-quality, affordable clothing that caters
            to diverse tastes and preferences.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals to embrace their individuality
            through fashion. By curating a wide range of apparel and
            accessories, we aim to be the go-to destination for anyone looking
            to redefine their wardrobe.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
