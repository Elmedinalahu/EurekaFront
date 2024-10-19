// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>E</Icon>
      <Icon>🏠</Icon>
      <Icon>📧</Icon>
      <Icon>📋</Icon>
      <Icon>🔔</Icon>
    </SidebarContainer>
  );
};

export default Sidebar;
