import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index.js'),
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/Clock',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Clock__index" */ '../Clock/index.js'),
            })
          : require('../Clock/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/Home',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Home__index" */ '../Home/index.js'),
            })
          : require('../Home/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/Manager',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Manager__index" */ '../Manager/index.js'),
            })
          : require('../Manager/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/Sentence',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Sentence__index" */ '../Sentence/index.js'),
            })
          : require('../Sentence/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index.js'),
            })
          : require('../index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/login',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__login__index" */ '../login/index.js'),
            })
          : require('../login/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/travel',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__travel__index" */ '../travel/index.js'),
            })
          : require('../travel/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        path: '/weather',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__weather__index" */ '../weather/index.js'),
            })
          : require('../weather/index.js').default,
        _title: 'universe',
        _title_default: 'universe',
      },
      {
        component: () =>
          React.createElement(
            require('/home/yuzhao/universe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'universe',
        _title_default: 'universe',
      },
    ],
    _title: 'universe',
    _title_default: 'universe',
  },
  {
    component: () =>
      React.createElement(
        require('/home/yuzhao/universe/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'universe',
    _title_default: 'universe',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
