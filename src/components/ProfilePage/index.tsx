import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  BirthdayIcon,
  CalendarIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>2+</h1>
        <h2>@tomas050302</h2>

        <p>maktub</p>

        <ul>
          <li>
            <LocationIcon />
            Malang Kalam
          </li>

          <li>
            <BirthdayIcon />
            Nascido(a) em 5 de março de 2002
          </li>
        </ul>

        <ul>
          <li>
            <CalendarIcon />
            Ingressou em 30 de fevereiro 2015
          </li>
        </ul>

        <Followage>
          <span>
            seguindo<strong>1 </strong>
          </span>
          <span>
            <strong>998 091 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
