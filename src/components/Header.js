import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 49px;
`;

const Header = () => (
  <Row>
    <Col lg={12}>
      <nav>
        <List>
          <Link link="#" text="Вызов мастера" />
          <Link link="#" text="Прайс на ремонт" />
          <Link link="#" text="Наши преимущества" />
          <Link link="#" text="Схема работы" />
          <Link link="#" text="Отзывы клиентов" />
          <Link link="#" text="Примеры работ" />
          <Link link="#" text="Контакты" />
        </List>
      </nav>
    </Col>
  </Row>
);

export default Header;
