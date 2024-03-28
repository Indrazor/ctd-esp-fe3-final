const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        style={{
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "red",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          cursor: "pointer",
        }}
        onClick={scrollToTop}
      >
        <strong>IR ARRIBA ⬆</strong>
      </button>
    </>
  );
};

export default ScrollToTopButton;
