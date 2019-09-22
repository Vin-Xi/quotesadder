import React,{useState} from 'react'
import {AUTH_TOKEN} from '../Constants'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo';
const SIGNUP_MUTATION=gql`
mutation SignUpMutation($email:String!,$name:String!,$password:String!){
    signup(email:$email,name:$name,password:$password)
    {
        token
    }
}
`
const LOGIN_MUTATION=gql`
mutation LoginMutation($email:String!,$password:String!){
    login(email:$email,password:$password){
        token
    }
}
`
export default function Login(props) {
    const [state,setState]=useState(
        {login:true,
         email:'',
         password:'',
         name:'',        
        });
        const {login,email,password,name}=state;
    const _confirm=async(data)=>{
        const {token}=  login? data.login:data.signup
        _saveUserData(token)
        props.history.push('/')
    }
    
    return (
        <div style={{position:"absolute",top:'300'}}>
            <div>
            {!login && (
            <input type="text" placeholder="Name"/>)
            }
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            </div>
            <div>
            <Mutation 
            mutation={login? LOGIN_MUTATION:SIGNUP_MUTATION}
            variables={{email,name,password}}
            onCompleted={(data)=>_confirm(data)}>

             {mutation=>(<div onClick={mutation}>{login? "login":"Create an Account"}</div>)}
            </Mutation>
            </div>
            <div onClick={()=>setState({...state,login:!login})}>
            {login? "Need to create an Account?":"Already have an Account?"}
            </div>
        </div>
    )
}
const _saveUserData=(token)=>{
    localStorage.setItem(AUTH_TOKEN,token)
}