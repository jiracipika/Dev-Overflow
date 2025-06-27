import React, {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from '../features/auth/authSlice'
import axios from '../utils/axios'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const signInClick = async (e) =>{
        e.preventDefault();
        if (email == "" || pass == "") {
            console.log("Empty Inputs")
            return
        }

        try {
            const response = await axios.post(
                'auth/login', 
                {
                email: email,
                password: pass,
                },
                {
                    withCredentials: true, // ✅ Sends cookies with the request
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
,);

                console.log(response)

                const accessToken = response.data.accessToken
                const refreshToken = response.data.refreshToken

            dispatch(setAuth({accessToken,refreshToken}))
            navigate("/")
        } catch (error){
            console.error('Error during login:', error.response ? error.response.data : error.message);
            alert('Login failed. Please try again.');
        }
    }

    return (
        <section className='w-full h-fit bg-[#0F1117]'>
            <section className='sign-in min-h-screen max-h-fit flex justify-center w-full p-6 flex-col items-center'>
                <form className='bg-[#151821] w-[90%] h-4/5 flex flex-col gap-3 max-w-[450px] mt-5 pt-[50px] pb-[70px] px-[60px] rounded-[20px] left-2/4 top-2/4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-white font-medium text-2xl ">Sign In</h1>
                            <p className='text-[#858EAD]'>to Continue Networking</p>
                        </div>
                        <h1 className='text-white'>logo</h1>
                    </div>
                    <div className='input-group'>
                        <div className='flex items-center mx-0 my-[15px]'>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='bg-[#212734] text-[#858EAD] rounded-md w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div className='flex gap-3 flex-col justify-center mx-0 my-[15px] rounded-[3px]'>
                            <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" className='bg-[#212734] rounded-md text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                            <Link to={"/forgotpassword"} className='self-end text-[#1DA1F2]'>Forgot Password</Link>
                        </div>
                    </div>
                    <div className='w-full '>
                        <button onClick={signInClick} className='bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-sm basis-[48%] h-10 w-full rounded-md text-white font-medium border-0 outline-none' type="button" id="signInBtn">Continue</button>
                        <p className='text-sm text-center mt-3 text-[#FFFFFF]'>Don't have an account? <Link className='text-center text-[#FF7000] text-sm text-decoration-line: underline' to={"/Signup"}>Sign Up</Link> Here.</p>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default SignIn
