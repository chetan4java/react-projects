import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';
const Avatar =(props)=>{
    const avatarLists=[
        {
            id:1,
            name:'Chetan',
            work:'Web Developer'
        },
        {
            id:2,
            name:'Sushil',
            work:'web Programmer'
        },
        {
            id:3,
            name:'Rakesh',
            work:'Web Tester'
        },
        {
            id:4,
            name:'Bhushan',
            work:'Web Hacker'
        },
        {
            id:4,
            name:'Bhushan',
            work:'Web Hacker'
        }];

      const avatarcards=  avatarLists.map((avatarcard,i)=>{
             return <AvatarList id={avatarcard.name} name={avatarcard.name} work={avatarcard.work} />
            /* return <AvatarList id={avatarLists[i].name} name={avatarLists[i].name} work={avatarLists[i].work} /> */
        });
    return (<div className="main-page">
            
            <h1 className="tc ">Welcome to Avatar World</h1> 
            <div className="avatar-cards">
                 {avatarcards}
                          
            </div>
            <div className="btn-group">
                <button> Subscribe </button>
                <button> Subscribe </button>
            </div>
            </div>
            )
}
export default Avatar;