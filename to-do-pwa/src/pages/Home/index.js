import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as S from './styles'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard')
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <S.LoginWrapper>
            <S.LoginContainer>
                <h2>Login</h2>
                <S.Form onSubmit={handleLogin}>
                    <S.Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <S.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                    <S.SignUpContainer>
                        <S.SignUpText>Não tem uma conta?</S.SignUpText>
                        <S.SignUpButton onClick={() => navigate("/signup")}>Clique aqui</S.SignUpButton>
                    </S.SignUpContainer>
                    <S.Button type="submit">Login</S.Button>
                </S.Form>
            </S.LoginContainer>
        </S.LoginWrapper>
    );
};

export default Login;
