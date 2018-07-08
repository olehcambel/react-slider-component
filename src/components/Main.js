import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import styled from 'styled-components';

const Repair = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
  font-size: 40px;

  span{
    display: block;
    line-height: 30px;
    font-size: 24px
  }
`

const LightText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 54px;
`

const CallbackBtn = styled.button`
  width: 248px;
  height: 67px;
  background-color: #ffa14b;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height:24px;
  margin-top: 32px;
`

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 120,
    }
  }

  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>Качественный ремонт
            <span>iphone за {this.state.min} минут и гарантия 1 год</span>
          </Repair>
          <LightText> Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 юань, с установкой в подарок </LightText>
          <CallbackBtn>Отправить заявку

          </CallbackBtn>
        </Col>
        <Col lg={6} lgOffset={1}>

        </Col>
      </Row>
    )
  }
}

export default Main