export const layout = {
  upperBox: {
    background: "#3A58FC",
    height: "15vh",
    borderRadius: "0 0 25px 25px",
    position: "relative",
  },
  backgroundContainer: {
    background: "#f5f5f5",
    height: "100vh",
    width: "100vw",
    position: "relative",
  },
  midObject: {
    position: "absolute",
    width: "90%",
    left: "50%",
    bottom: "0",
    background: "#fff",
    transform: "translate(-50%, 50%)",
    padding: "0.1rem 1rem",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  midFlex: {
    position: "absolute",
    width: "90%",
    left: "50%",
    bottom: "0",
    transform: "translate(-50%, 50%)",
    overflowX: "auto",
    scrollbarWidth: "none",
    display: "flex",
    flexDirection: "row",
  },
  flexItem: {
    background: "#fff",
    borderRadius: "20px",
    fontSize: "0.7rem",
    lineHeight: "0.9rem",
    color: "#313450",
    padding: "0.2rem 0.5rem",
    minWidth: "120px",
    textAlign: "center",
    margin: "0.5rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  input: {
    "&::placeholder": {
      fontSize: "0.8rem",
    },
  },
  icon: {
    color: "#C7C7C7",
  },
  lowerHomeLayout: {
    height: "82vh",
    position: "absolute",
    bottom: "0",
    width: "100%",
    overflowY: "scroll",
  },
  card: {
    background: "#fff",
    margin: "1rem",
    padding: "0.2rem",
    borderRadius: "10px",
    border: "1px solid #ececec",
  },
  imageCard: {
    height: "4rem",
    width: "4rem",
  },
  cBadge: {
    background: "#00e676",
    color: "#fff",
    fontSize: "0.7rem",
  },
  headCard: {
    color: "#313450",
    fontSize: "0.9rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
  },
  cardLeft: {
    margin: "0.5rem 1rem",
  },
  leftBlock: {
    border: "0.5px solid #ececec",
    borderRadius: "4px",
    minWidth: "100px",
    padding: "0.2rem",
    margin: "0.2rem auto",
  },
  secondaryContent: {
    fontSize: "0.6rem",
    lineHeight: "0.9rem",
    color: "#898a8f",
  },
  tag: {
    border: "1px solid #ececec",
    color: "#898a8f",
    fontSize: "0.6rem",
    lineHeight: "0.9rem",
    width: "fit-content",
    padding: "0.1rem 1rem",
    borderRadius: "10px",
    margin: "auto 0.5rem",
  },
  button: {
    background: "#fff",
    color: "#3a58fc",
    fontSize: "0.75rem",
    lineheight: "1.125rem",
    border: "1px solid #ececec",
    padding: "0.2rem 0.5rem",
    margin: "0.5rem",
    borderRadius: "10px",
    cursor: "pointer",
  },
  flexButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export const upperComponent = {
  gridUpperBox: {
    color: "#fff",
    height: "10vh",
    padding: "1rem",
  },
  heading: {
    fontSize: "1rem",
  },
  icon: {
    cursor: "pointer",
  },
};

export const lowerComponent = {
  lower: {
    height: "78vh",
    position: "absolute",
    bottom: "0",
    width: "100%",
    background: "#fff",
    borderRadius: "25px 25px 0 0",
    overflowY: "scroll",
  },
  recommendations: {
    margin: "1rem 2rem",
    padding: "0.5rem auto",
  },
  heading: {
    fontSize: "0.8rem",
    color: "#404040",
    lineHeight: "1.1rem",
    margin: "0",
    padding: "0",
  },
  paragraph: {
    fontSize: "0.6rem",
    lineHeight: "0.8rem",
    color: "#898A8F",
    margin: "0",
    padding: "0",
  },
  line: {
    border: "0.5px solid #ececec",
    margin: "0.2rem auto",
  },
};
