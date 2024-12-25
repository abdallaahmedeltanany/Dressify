import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Men from "@assets/mens.png";
import wemen from "@assets/womens.png";
import kids from "@assets/kids.png";
import styles from "./styles.module.css";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <Row
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Col
        xs={3}
        className={styles.column}
        onClick={() => navigate("/categories/products/men")}
      >
        <img src={Men} alt="" style={{ width: "100%" }} />
        <h2 className={styles.word}>Men</h2>
      </Col>
      <Col xs={3} className={styles.column}>
        <img
          src={wemen}
          alt=""
          style={{ width: "100%" }}
          onClick={() => navigate("/categories/products/women")}
        />
        <h2 className={styles.wordWomen}>women</h2>
      </Col>
      <Col xs={3} className={styles.column}>
        <img
          src={kids}
          alt=""
          style={{ width: "100%" }}
          onClick={() => navigate("/categories/products/kids")}
        />
        <h2 className={styles.word}>Kids</h2>
      </Col>
    </Row>
  );
};

export default Hero;
