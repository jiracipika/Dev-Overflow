import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {

    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async() => {
        console.log(NewPassword)
        console.log(ConfirmPassword)
        if (NewPassword === "" || ConfirmPassword === ""){
            alert("Please Enter Passwords")
        }
        else if (NewPassword !== ConfirmPassword){
            alert("Passwords do not match")
        }
        else{
            //Do the Api Call here
            try {
                const response = await axios.put('', {
                    NewPassword: NewPassword,
                });
        
                console.log('Reset Password Success:', response.data);
                alert('Reset Password Success!');
            } catch (error) {
                console.error('Error during password reset:', error.response ? error.response.data : error.message);
                alert('Password Reset Failed. Please try again.');
            }

        }
    }

    return (
        <section className='w-full h-fit bg-[#0F1117]'>
            <section className='sign-in min-h-screen max-h-fit flex justify-center w-full p-6 flex-col items-center'>
                <form className='bg-[#151821] w-[90%] h-4/5 flex flex-col gap-3 max-w-[450px] mt-5 pt-[50px] pb-[70px] px-[60px] rounded-[20px] left-2/4 top-2/4'>
                    <div className='flex justify-between items-center'>
                        <div className='items-center'>
                            <h1 className='text-white'>logo</h1>
                            <h1 className="text-white font-medium text-2xl">Password Reset</h1>
                            <p className='text-sm text-[#858EAD]'>Enter a new password below</p>
                        </div>
                    </div>
                    <div className='input-group'>
                        <div className='flex items-center mx-0 my-[15px]'>
                            <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className='bg-[#212734] text-[#858EAD] rounded-md w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                        <div className='flex items-center mx-0 my-[15px]'>
                            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className='bg-[#212734] text-[#858EAD] rounded-md w-full px-[15px] py-[18px] border-0 outline-none placeholder-#858EAD'/>
                        </div>
                    </div>
                    <div className='w-full '>
                    <button onClick={handleSubmit} className='bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-sm basis-[48%] h-10 w-full rounded-md text-white font-medium border-0 outline-none' type="button">Reset Password</button>
                    </div>
                </form>
            </section>
        </section>
  )
}

export default ResetPassword