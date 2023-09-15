import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LeaderRow = ({imageUrl,displayName,points}) =>{
    return (<tbody>
        <tr className="hover:bg-grey-lighter text-black">
            <td className="py-2 px-4 border-b border-grey-light"><img src={imageUrl} alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
            <td className="py-2 px-4 border-b border-grey-light">{displayName}</td>
            <td className="py-2 px-4 border-b border-grey-light">{points}</td>
        </tr>
        
        
    </tbody>)
}

const LeaderboardTable = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/leaderboard").then(
            (res) => setUsers(res.data)
        )
    })

  return (
    <div>
    <div className="mx-8 mt-8 bg-white p-4 shadow rounded-lg">
                <h2 className="text-green-400 text-xl font-bold pb-4">LeaderBoard</h2>
                <div className="my-1"></div> 
                <div className="bg-gradient-to-r from-green-300 to-green-500 h-px mb-6"></div> 
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="text-sm leading-normal text-black">
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Photo</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Points</th>
                        </tr>
                    </thead>
                    {users && users.map((user)=>{
                    return <LeaderRow imageUrl={user.profilePic} displayName={user.displayName} points={user.points}/>
                })}
                    
                </table>
                
                
            </div>
            </div>
  )
}

export default LeaderboardTable;