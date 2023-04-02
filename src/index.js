/**
 * 入口js
 */
import React from "react";
// import StrictMode from "react";
// import ReactDOM  from "react-dom";
import { createRoot} from 'react-dom/client';
import 'antd/dist/antd.css';
import App from './App';
import localstorageUnits from "./utils/localstorageUnits";
import memoryUtils from "./utils/memoryUtils";
const user = localstorageUnits.getUser();
memoryUtils.user = user;

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);
createRoot(document.getElementById('root')).render( <App />);
// ReactDOM.render(<App />,document.getElementById('root'));