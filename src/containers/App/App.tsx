import * as React from 'react';
import Reviews from '../Reviews/Reviews';
import { Provider } from 'react-redux';
import { store } from '../../store';

import styled from 'styled-components';

const AppContainer = styled.div`
  color: red;
`;

export default class App extends React.Component {
  public render() {
    return (
    <Provider store={store}>
      <AppContainer className="App">
        Hello World
        <Reviews />
      </AppContainer>
    </Provider>
    );
  }
}
