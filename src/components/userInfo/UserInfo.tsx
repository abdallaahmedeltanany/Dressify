import Profile from "@assets/profile-icon-9.png";
import { useAppSelector } from "@store/hooks";
import { Col, Container, Form, Image, Row } from "react-bootstrap";

const UserInfo = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);
  return (
    <div className=" d-flex justify-content-center flex-column align-items-center">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={Profile} roundedCircle />
          </Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder={accountInfo?.firstName}
                disabled
                style={{ fontSize: "20px" }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder={accountInfo?.lastName}
                disabled
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form.Control
                placeholder={accountInfo?.email}
                disabled
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default UserInfo;
