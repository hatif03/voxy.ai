import { UserDetailContext } from '@/context/UserDetailContext'
import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'

function Provider({children}) {

    const [user, setUser] = useState()

    useEffect(() => {
        createNewUser()
    }, [])

    const createNewUser = () => {
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            // Check if user exists
            let { data: Users, error } = await supabase
                .from('Users')
                .select('*')
                .eq('email', user?.email)

            console.log(Users)

            // If not then create user
            if(Users?.length==0){
                await supabase.from('Users')
                    .insert([{
                        email: user?.email,
                        name: user?.user_metadata?.name,
                        picture: user?.user_metadata?.picture
                    }])
                    console.log(data);
                    setUser(data);
                    return;
            }
            setUser(Users[0]);
        })
    }
  return (
    <UserDetailContext.Provider value={{user, setUser}}>
        <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUser = () => {
    const context=useContext(UserDetailContext);
    return context;
}