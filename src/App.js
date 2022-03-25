import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import './App.css';
import {Box, Button, Card, Container, TextField, Typography} from "@mui/material";
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

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(0);
    const [user, setUser] = useState("");

    const loginEmailPassword = async () => {

        // const loginEmail = "tonnytg@gmail.com";
        // const loginPassword = "banana@123";

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(userCredential.user);
        setUser(userCredential.user.email)
    }


    const handleLogin = (email, password) => {
        console.log(email. password);
        signInWithEmailAndPassword(auth, email, password)
    }


  return (
    <div className="App">

        <Container>
            <Box >
                <TextField
                    type="text" label="Login" variant="outlined"
                    value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                />
            </Box>

            <Box>
                <TextField
                    type="password" label="Password" variant="outlined"
                    value={loginPassword} onChange={e => setLoginPassword(e.target.value)}
                />
            </Box>
            <Button onClick={loginEmailPassword}>Logar</Button>

            <Box>
                <Card variant="outlined">
                    {
                        user ? "logado" : "empty"
                    }
                </Card>
            </Box>
        </Container>
    </div>
  );
}

export default App;
