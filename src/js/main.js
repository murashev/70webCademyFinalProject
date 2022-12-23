// import
import bidsPage from './pages/bidsPage.js'
import errorPage from './pages/errorPage.js'
import favouritesPage from './pages/favouritesPage.js'
import homePage from './pages/homePage.js'
import singleItem from './pages/singleItem.js'


// state
const state = {};

// только для тестирования. в рабочей версии удалить
window.state = state;

// routes
const routes = [
   { path: '/', component: homePage },
   { path: 'item', component: singleItem },
   { path: 'favourites', component: favouritesPage },
   { path: 'bids', component: bidsPage },
]

function findComponentByPath(path, routes) {
   return routes.find(function (route) {
      return route.path === path;
   })
}

//  Router
function router() {
   // split path to array
   const pathArray = location.hash.split('/');

   // set current path
   let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
   currentPath = currentPath === '' ? '/' : currentPath;

   // chose matching component from router or error page
   const { component = errorPage } =
      findComponentByPath(currentPath, routes) || {};
   component(state);
}

window.addEventListener('hachchange', router);
window.addEventListener('load', router);

