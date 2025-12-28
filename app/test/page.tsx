import React from 'react'
import prisma from '@/db/db'

const test = async () => {

    const users = await prisma.user.findMany();
  return (

    <div className= 'bg-amber-200 flex flex-col justify-center  items-center w-full min-h-screen'>
        {users.map((u: any) =>
            <div>
                <p>ID: {u.id}</p>
                <p>EMAIL: {u.email}</p>
            </div>
            
        )}
        
    </div>


  )
}

export default test