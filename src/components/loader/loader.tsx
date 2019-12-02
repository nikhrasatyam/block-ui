import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import UiStore from '../../stores/ui.store';

interface Props {
  uiStore ?: UiStore;
}
const StyledIcon = styled.div`
font-size: 40px;
line-height: 50px;
color: #2F8BC1;
text-align:center

`;

const Loader = ({ uiStore } : Props) => (
  uiStore!.showLoader ? (
    <StyledIcon>
      <Icon name="circle notched" loading />
    </StyledIcon>
  ) : null
);


export default inject('uiStore')(observer(Loader));
