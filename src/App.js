import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import './App.css';
import {Box, Button, Container} from "@mui/material";
import {Label} from "@mui/icons-material";
import {useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDgV4tAgJLtzRDld-iolu9s4wtXqgDnAeg",
    authDomain: "loginreact-7dcc1.firebaseapp.com",
    projectId: "loginreact-7dcc1",
    storageBucket: "loginreact-7dcc1.appspot.com",
    messagingSenderId: "81719364438",
    appId: "1:81719364438:web:9539b0e35fa956b0fd24f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

function App() {

    const [loginStatus, setLoginStatus] = useState(0);

    const handleLogin = (email, password) => {
        console.log(email. password);
        signInWithEmailAndPassword(auth, email, password)
    }

  return (
    <div className="App">
        <Container>
                <Box >
                    <p>Login</p>
                    <input type="text" id="login" value="email"/>
                </Box>

            <Box>
                <p>Password</p>
                <input type="password" id="password" value="***"/>
            </Box>
            <Button onClick={handleLogin}>Logar</Button>

            <Box>
                <p>{loginStatus}</p>
            </Box>
        </Container>
    </div>
  );
}

export default App;
