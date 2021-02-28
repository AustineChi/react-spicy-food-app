import React, { useState } from 'react';
import Menu  from './components/Menu';
import Order from './components/Order';
import meals from './data';

import {Main, Header, Container} from './style'

export const spiceEmoji = spice => '🌶️'.repeat(spice);

export const App = () => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <Main>
      <Header>
          <h1>Spicy Soups</h1>
      </Header>

      <Container>
          <Menu
            meals={meals}
            orderItems={orderItems}
            setOrderItems={setOrderItems}
          />
          <Order 
          orderItems={orderItems}           
          setOrderItems={setOrderItems}
          />
      </Container>
    </Main>
  );
};
