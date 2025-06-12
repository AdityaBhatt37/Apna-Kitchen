const Offline = () => {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        color: "#008000",
        fontFamily: "'Poppins', sans-serif",
      },
      heading: {
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "15px",
        animation: "fadeIn 1.5s ease-in-out",
      },
      paragraph: {
        fontSize: "1.5rem",
        opacity: 0.9,
        animation: "fadeIn 2s ease-in-out",
      },
      button: {
        marginTop: "20px",
        padding: "15px 30px",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#FFFFFF",
        backgroundColor: "#008000",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.2s ease, background-color 0.3s ease",
      },
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Oops! You're Offline</h1>
        <p style={styles.paragraph}>
          It looks like you lost your internet connection. Please check your
          connection and try again.
        </p>
        <button style={styles.button} onClick={() => location.reload()}>
          Retry
        </button>
      </div>
    );
  };
  
  export default Offline;
  