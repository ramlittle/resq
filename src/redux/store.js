import {createStore} from  'redux';
 
//import reducer
import reducer from './reducer';
 
//ito lng talaga laman ng stro
const store=createStore(reducer);
export default store;