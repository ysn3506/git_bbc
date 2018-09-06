import styled from 'styled-components';
import { C_POSTBOX, GEL_SPACING_DBL } from '../../lib/constants/styles';

const HorizontalRule = styled.hr`
  background-color: ${C_POSTBOX};
  height: 4px;
  width: 48px;
  margin: ${GEL_SPACING_DBL} 0;
  border: 0;
`;

export default HorizontalRule;
