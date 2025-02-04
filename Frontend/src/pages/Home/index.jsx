import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Car Rental</h1>
      <p style={styles.description}>Find the perfect car for your journey.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default Home;
