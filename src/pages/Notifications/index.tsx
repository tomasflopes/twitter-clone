import React from 'react';

import {
  Container,
  Wrapper,
  Header,
  SettingsIcon,
  Main,
  Tabs,
  Tab,
} from './styles';

import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Notification from '../../components/Notification';

const Notifications: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main>
          <Header>
            <h1>Notificações</h1>
            <SettingsIcon />
          </Header>
          <Tabs>
            <Tab className='active'>Tudo</Tab>
            <Tab>Menções</Tab>
          </Tabs>
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </Main>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Notifications;
