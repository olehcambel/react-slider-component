import React from "react";
import { Col, Row } from 'react-bootstrap';
import styled from "styled-components";

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`;

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block
    color: #464646;
    font-size: 22px;
    font-weight: 550;
  }
`;

const Calls = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
    display: block
    color: #464646;
    font-size: 22px;
    font-weight: 550;
  }
`;

const CallbackBtn = styled.button`
  width: 176px;
  height: 48px;
  background-color: #3fc7db;
  border-radius: 25px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

class Menu extends React.Component {
  state = {
    addr: "Ленинская, 303",
    tel: "8 (846) 922 55 44"
  };

  Address = () => {
    return <span>{this.state.addr}</span>;
  };

  TelNumber = () => {
    return <span>{this.state.tel}</span>;
  };

  render() {
    return (
      <Row>
        <Col lg={3}>
          <Repair>Ремонт айфонов в сервисном центре и на выезде </Repair>
        </Col>
        <Col lg={3} lgOffset={1}>
          <WorkTime>
            {" "}
            Пн-пт с 10 до 20, сб,вс с 10 до 18
            <this.Address />
          </WorkTime>
        </Col>
        <Col lg={3}>
          <Calls>
            {" "}
            Звонки принимаются 24 часа
            <this.TelNumber />
          </Calls>
        </Col>
        <Col lg={2}>
          <CallbackBtn> Заказать звонок </CallbackBtn>
        </Col>
      </Row>
    );
  }
}

export default Menu;
