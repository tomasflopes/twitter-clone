import React from 'react';

import { Tabs, Tab } from './styles';

const ProfileTabs: React.FC = () => {
  return (
    <Tabs>
      <Tab className='active'>Tweets</Tab>
      <Tab>Tweets e respostas</Tab>
      <Tab>Mídia</Tab>
      <Tab>Curtidas</Tab>
    </Tabs>
  );
};

export default ProfileTabs;
