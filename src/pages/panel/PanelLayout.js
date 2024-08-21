import React from 'react';
import { Outlet } from 'react-router-dom';
import PanelNavbar from '../../components/panel/partials/PanelNavbar';
import styled from 'styled-components';
const PanelLayout = () => {
  return (
    <PanelContainer>
      <SideBar>
        <PanelNavbar />
      </SideBar>

      <Outlet />
    </PanelContainer>
  );
};

const PanelContainer = styled.div`
  display: flex;
`;
const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
export default PanelLayout;
