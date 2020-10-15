import React from 'react'
const AvatarList=(props)=> {
    return (
        
            <div className="avatar-style bg-light-purple ma3 dib pa2 grow-large shadow-5    tc">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar-img" />
                <h2 className="tc">{props.name}</h2>
                <p>{props.work} </p>
              
            </div>
        
    )
}
export default AvatarList;