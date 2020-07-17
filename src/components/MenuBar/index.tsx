import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  SavedIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Container>
      <Topside>
        <Logo />

        <Link className='link-to' to='/'>
          <MenuButton className={location.pathname === '/' ? 'active' : ''}>
            <HomeIcon />
            <span>Página Inicial</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <Link className='link-to' to='/notifications'>
          <MenuButton
            className={location.pathname === '/notifications' ? 'active' : ''}
          >
            <BellIcon />
            <span>Notificações</span>
          </MenuButton>
        </Link>

        <Link className='link-to' to='/messages'>
          <MenuButton
            className={location.pathname === '/messages' ? 'active' : ''}
          >
            <EmailIcon />
            <span>Mensagens</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <SavedIcon />
          <span>Itens Salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <Link className='link-to' to='/profile'>
          <MenuButton
            className={location.pathname === '/profile' ? 'active' : ''}
          >
            <ProfileIcon />
            <span>Perfil</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>2+</strong>
          <span>tomas050302</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
