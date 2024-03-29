import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './utils/navigation';
import {themeLight} from './configs/themes';
import {name as appName} from '../app.json';
import Router from './navigation/root-switch';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // const { auth, theme } = this.props;
    const barStyle = 'light-content';
    const themeData = themeLight;

    return (
      <NavigationContainer
        ref={navigationRef =>
          NavigationService.setTopLevelNavigator(navigationRef)
        }
        theme={themeData}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={barStyle}
        />
        <Router />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

// const mapStateToProps = state => {
//   return {
//     theme: state.common.get('theme'),
//     auth: state.auth,
//   };
// };

// const AppRouterExport = ({...rest}) => {
//   const prefix = `${appName}://`;
//   return <AppRouter {...rest} uriPrefix={prefix} />;
// };

export default AppRouter;
// export default compose(withTranslation(), connect(mapStateToProps))(AppRouterExport);
