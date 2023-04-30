import * as React from 'react'
import { NativeRouter, Route, Routes } from "react-router-native";
import Login from './screens/Login';
import Main from './screens/Main';
import SignUp from './screens/SignUp';

export default function App() {

    return (
        <NativeRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </NativeRouter>
    );
}
