import { useState } from "react"


export const Login=()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    return(
        <>
        <h1>Login</h1>

        <form>  
            <label></label>
            <input type="text" name="email" value={email}></input>
            <label></label>
            <input type="text" name="password" value={password}></input>

            <button type="submit"></button>
            
        </form>
        </>

    )
}