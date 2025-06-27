"use client"

import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import Image from 'next/image'
import React from 'react'

export default function Login() {

    // Function to handle Google login
    const signInWithGoogle = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            console.error('Error signing in with Google:', error.message);
        } else {
            console.log('Sign in successful');
        }
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <Image src={'/voxy.png'} alt='logo'
                width={400}
                height={100}
                className='w-[200px]'
            />
            <div className='flex flex-col items-center '>
                <Image src={'/login.png'} alt='login'
                    width={400}
                    height={400}
                    className='w-[300px] h-[300px]'
                />
                <h2 className='text-2xl font-bold text-center mt-2'>Welcome to Voxy</h2>
                <p className='text-center text-gray-500'>Sign In with Google</p>
                <Button className='mt-7 w-full'
                    onClick={signInWithGoogle}
                >
                    Log In with Google
                </Button>
            </div>
        </div>
    </div>
  )
}
