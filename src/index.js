import React from 'react';
import ReactDOM from 'react-dom';
// import HookApp from './HookApp';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithHook from './components/01-useState/CounterWithCoustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
import FocusScreen from './components/useRef/FocusScreen';
import RealExampleRef from './components/useRef/RealExampleRef';
import Layout from './components/useLayoutEffect/Layout';
import Memorize from './components/useMemo/Memorize';
import MemorizeHook from './components/useMemo/MemoHook';
import CallBackHook from './components/useMemo/CallbackHook';
import { Padre } from './components/07-tarea-memo/Padre';

ReactDOM.render(
    <Padre />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
