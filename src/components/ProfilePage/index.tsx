import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Tomás Lopes</h1>
        <h2>@tomas050302</h2>

        <p>maktub</p>

        <ul>
          <li>
            <LocationIcon />
            Malang Kalam
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 5 de março de 2002
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
