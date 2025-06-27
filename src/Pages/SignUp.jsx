import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import validator from "validator"
import axios from 'axios'

const signUp = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [strength, setStrength] = useState("");
    const [confirmPass, setConfirmPass] = useState('')
    const [name, setName] = useState('');

    const confirmName = () => {
        if (name == "") {
            console.log("Please enter your name");
            return false
        }
        else if (name.length < 3) {
            console.log("Name is too short");
            return false
        }
        else {
            console.log("Valid Name");
            return true
        }
    }

    const validateEmail = () =>{
        if (!validator.isEmail(email)) {
            console.log("Invalid Email")
            return false
        }
        else {
            console.log("Valid Email")
            return true
        }
    }

    const evaluatePasswordStrength = () => {
        let score = 0;

        if (!pass){
            return ''
        }

        if (pass.length > 8) {
            score += 1;
        }
        if (/[a-z]/.test(pass)) {
            score += 1;
        }
        if (/[A-Z]/.test(pass)) {
            score += 1;
        }
        if (/\d/.test(pass)) {
            score += 1;
        }
        if (/[^A-Za-z0-9]/.test(pass)) {
            score += 1;
        }

        switch(score) {
            case 0:
            case 1:
            case 2:
                return "Weak";
            case 3:
                return "Medium";
            case 4:
            case 5:
                return "Strong";
        }
    }


    const confirmPasswords = () => {
        if (pass == "") {
            console.log("Please Enter Password")
            return false
        }
        else if (pass != confirmPass){
            console.log("Password does not match")
            return false
        }
        else {
            console.log("Password does match")
            return true
        }
    }

    const registerClick = () => {

        if (confirmName() == false || validateEmail() == false || confirmPasswords() == false) {
            console.log("Form validation Failed");
            return;
        }
    
        try {
            const response = axios.post('https://6ecc-72-138-28-18.ngrok-free.app/api/auth/register', {
                name: name,
                email: email,
                password: pass,
            });
    
            console.log('Registration successful:', response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
            alert('Registration failed. Please try again.');
        }
    }


    return (
        <section className='w-full h-fit bg-[#0F1117]'>
            <section className='sign-in min-h-screen max-h-fit flex justify-center w-full p-6 flex-col items-center'>
                <form className='bg-[#151821] w-[90%] h-4/5 flex flex-col gap-3 max-w-[450px] mt-5 pt-[50px] pb-[70px] px-[60px] rounded-[20px] left-2/4 top-2/4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="text-white font-medium text-2xl ">Sign Up</h1>
                            <p className='text-[#858EAD]'>to Start Networking</p>
                        </div>
                        <h1 className='text-white'>logo</h1>
                    </div>
                    <div alt='input-group'>
                        <div className='bg-[#212734] flex items-center mx-0 my-[15px] rounded-[3px]'>
                            <input value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className='bg-transparent text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div className='bg-[#212734] flex items-center mx-0 my-[15px] rounded-[3px]'>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className='bg-transparent text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div className='bg-[#212734] flex items-center mx-0 my-[15px] rounded-[3px]'>
                            <input value={pass} onChange={(e) => {setPass(e.target.value); setStrength(evaluatePasswordStrength(e.target.value))}} type="password" placeholder="Password" className='bg-transparent text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <small className='text-[#858EAD]'>Password Strength: {strength}</small>
                        <div className='bg-[#212734] flex items-center mx-0 my-[15px] rounded-[3px]'>
                            <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="Confirm Password" className='bg-transparent text-[#858EAD] w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div alt="btn-field" className='w-full mt-10;'>
                            <button onClick={registerClick}  className='bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-sm basis-[48%] h-10 w-full rounded-md text-white font-medium border-0 outline-none' type="button" id="signUpBtn">Sign Up</button>
                        </div>
                        <p className='text-sm text-center mt-3 text-[#FFFFFF]'>Already have an account? <Link className='text-center text-[#FF7000] text-sm text-decoration-line: underline' to={"/signin"}>Sign In</Link> Here.</p>
                    </div>
                </form>
            </section>
        </section>
    )
}

export default signUp