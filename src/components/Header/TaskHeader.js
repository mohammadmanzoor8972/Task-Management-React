import React, { Component } from 'react'; 
import styled from 'styled-components';
import { primaryColor } from '../../styled/theme';
import { Container } from '../../styled/container';

const ApplicationTitle = styled(Container)`
  margin: 0px;
  font-size: 20px;
  background-color: ${primaryColor};
  color: #ffff;
  padding: 10px;
`;


export default ApplicationTitle;

