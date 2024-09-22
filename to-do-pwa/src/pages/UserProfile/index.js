import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import * as S from "./styles"

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);
    return (
        <>
            <S.ShowUserPageToogleContainer>
                <S.ShowUserPageToogle onClick={() => navigate('/dashboard')}>Ver lista</S.ShowUserPageToogle>
            </S.ShowUserPageToogleContainer>

            <S.ProfilePage>
                <h1>Bem vindo, {user?.email}</h1>
                <p>ID de usuario: {user?.uid}</p>
            </S.ProfilePage>
        </>
    )
}
export default UserProfile