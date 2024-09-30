import React, { useState } from 'react'

const thirteen = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isRegistered, setisregistered] = useState(false);
    const [islogin, setislogin] = useState(false);
    const [users,setusers] = useState([]);

   const handleauthentication = ()=>{
    if(isRegistered){
         const user = users.find((u)=>{u.email=== email && u.password===password})
         if(user){
            setislogin(true)
         }
         else{
            alert("Login Failed please check your Credential");
         }
    }
    else{
        const newUsers = {email,password};
        setusers([...users,newUsers]);
        localStorage.setItem('users',JSON.stringify([...users,newUsers]));
        setislogin(true);
    }
   }

   const handlelogout = ()=>{
    setislogin(false);
    setemail('');
    setpassword('');
   }

    return (
        <div>
            {
                islogin ? (
                    <div>
                        <h2>Welcome , {email}</h2>
                        <button onClick={handlelogout}>Logout</button>
                    </div>
                ) :
                    (
                        <div>
                            <h2> {
                                isRegistered ? "login" : "registered"
                            }
                            </h2>
                            <form action="">
                                <input type="email" placeholder='Enter Email' onChange={(e) => { setemail(e.target.value) }} />
                                <input type="password" placeholder='Enter Password' onChange={(e) => { setpassword(e.target.value) }} />
                                <button onClick={handleauthentication}>
                                    {
                                        isRegistered ? "Login" : "Register"
                                    }
                                </button>
                            </form>
                            <p>
                                {
                                    isRegistered ? "Dont have an account please registered here" : "Already have an account login here"
                                }
                            </p>
                            <button onClick={() => { setisregistered(!isRegistered) }}>
                                {
                                    isRegistered ? "register" : "login"
                                }
                            </button>
                        </div>
                    )
            }

        </div>
    )
}

export default thirteen
