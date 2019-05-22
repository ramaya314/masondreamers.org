
import {combineReducers} from 'redux';
import flatCombineReducers from 'flat-combine-reducers';

import NavigationReducer from './NavigationReducer';
import AboutUsPicsReducer from './AboutUsPicsReducer';

import {
	KokoLibReducers
} from 'kokolib';


const siteReducers = combineReducers({
	navs : NavigationReducer,
	aboutUsPics: AboutUsPicsReducer
});

const allReducers = flatCombineReducers(siteReducers, KokoLibReducers);

export default allReducers;