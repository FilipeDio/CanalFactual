import { useState } from "react";
import { StyledForm,StyledDiv,StyledInput } from "./login.styled";
import{LinksBtn} from "../../components/atoms/LinksBtn/LinksBtn";

import Formbtn from "../../components/atoms/Formbtn/Formbtn";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página
        console.log("Email:", email);
        console.log("Password:", password);
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
    };

    return (
        <>
            <h1>Login</h1>

            <StyledForm onSubmit={handleSubmit}>
                <StyledDiv>
                    <label htmlFor="email">Email:</label>
                    <StyledInput
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                    />
                </StyledDiv>

                <StyledDiv>
                    <label htmlFor="password">Senha:</label>
                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    />
                </StyledDiv>


                <StyledDiv>
                <LinksBtn name="Registo"/>
                </StyledDiv>

                <StyledDiv>
                    <Formbtn type="submit" name="Entrar"></Formbtn>
                </StyledDiv>
            </StyledForm>
        </>
    );
};