import React from 'react';
import { Message } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import UiStore from '../../stores/ui.store';

interface Props {
  uiStore ?: UiStore;
}
const Alert = ({ uiStore }:Props) => (
  uiStore!.alert.type ? (
    <Message onDismiss={() => uiStore!.setAlert({})} size="small" negative={uiStore!.alert.type === 'error'} positive={uiStore!.alert.type === 'success'} warning={uiStore!.alert.type === 'warn'}>
      <Message.Header>{uiStore!.alert.title}</Message.Header>
      <p>{uiStore!.alert.message}</p>
    </Message>
  ) : null
);

export default inject('uiStore')(observer(Alert));
