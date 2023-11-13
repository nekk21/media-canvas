import styled from 'styled-components';

export const Canvas = styled.div`
  width: 1280px;
  height: 860px;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
`;

export const Asset = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 100;
`;
