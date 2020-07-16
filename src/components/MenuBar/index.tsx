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

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton
          className={location.pathname === '/messages' ? 'active' : ''}
        >
          <EmailIcon />
          <Link className='link-to' to='/messages'>
            <span>Mensagens</span>
          </Link>
        </MenuButton>

        <MenuButton>
          <SavedIcon />
          <span>Itens Salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton className={location.pathname === '/' ? 'active' : ''}>
          <ProfileIcon />
          <Link className='link-to' to='/'>
            <span>Perfil</span>
          </Link>
        </MenuButton>

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
