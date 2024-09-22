
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import * as S from "./styles"
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <S.SignupContainer>
            <S.SignupForm onSubmit={handleSignup}>
                <h2>Crie sua conta</h2>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
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
                <S.SignUpContainer>
                    <S.SignUpText>Já tem uma conta?</S.SignUpText>
                    <S.SignUpButton onClick={() => navigate("/")}>Clique aqui</S.SignUpButton>
                </S.SignUpContainer>
                <S.Button type="submit">Sign Up</S.Button>
            </S.SignupForm>
        </S.SignupContainer>
    );
};

export default Signup;
