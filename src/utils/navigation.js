import {CommonActions} from '@react-navigation/native'; // replace react-navagation/compat

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

function replace(routeName, params = {}) {
  _navigator.dispatch(
    CommonActions.replace({
      name: routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  replace,
};
