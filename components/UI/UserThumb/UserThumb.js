import React from 'react';
import styled from 'styled-components';

function UserThumb({name}){
  return (
    <Wrapper>
      {name}
    </Wrapper>
  )
};

export default UserThumb;

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #03060C;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  font-weight: 400;
`;
