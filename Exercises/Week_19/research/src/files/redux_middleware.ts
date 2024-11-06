import {
  Action,
  combineReducers,
  configureStore,
  Middleware,
  Tuple,
} from "@reduxjs/toolkit";

// in ts file
const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
const crashReporter: Middleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};
//  in redux store
const todoApp = combineReducers(reducer);
const store = configureStore(
  {
    reducer: todoApp,
    middleware: () => new Tuple(crashReporter, logger),
  }
  // applyMiddleware() tells createStore() how to handle middleware
);
//  in every component
store.dispatch(addTodo("Use Redux"));
