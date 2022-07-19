import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import React from 'react';
import ComponentA from './components/context/ConsumerCOld';
import CounterOne from './components/reducer/CounterOne';
import CounterTwo from './components/reducer/CounterTwo';
import CounterThree from './components/reducer/CounterThree';
import Counter from './components/context-reducer/Counter';
import DataFetchingOne from './components/reducer/DataFetchingOne';

export const UserContext = React.createContext();
export const CourseContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}

      {/* <UserContext.Provider value={'Govind'}>
        <CourseContext.Provider value={'ReactJSCourse'}>
          <ComponentA/>
        </CourseContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <Counter/> */}
      <DataFetchingOne />
    </div>
  );
}

export default App;