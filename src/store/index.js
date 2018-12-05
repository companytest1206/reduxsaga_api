import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga'
import saga from './../Sagas'

const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = composeWithDevTools({ 
      realtime: false,
      port: 8000
  });



  
  const store = createStore(
      reducer,
      composeEnhancers(
          applyMiddleware(logger, sagaMiddleware),
      ));

    sagaMiddleware.run(saga);
        
  export default store;
