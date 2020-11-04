import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import Logo from "../../assets/logo.jpg"
import {Form,Container} from  './styles'
import api from "../../services/api"

class SignUp extends Component{
    state={
        username: "",
        email: "",
        password: "",
        error: ""
     };

handleSignup = async e =>{
    e.preventDefault();
   const {username,email,password} =this.state;
   if(!username || !email || !password){
       this.setState({error: "Preencha todos os campos"});
   }else{
       try{
           await api.post("/users",{username,email,password});
           this.props.history.push("/");
       }catch (err){
           console.log(err)
           this.setState({error:"Ocorreu um erro ao cadastrar T.T"});
       }
   }
};

render(){
    return(
        <Container>
            <Form onSubmit={this.handleSignup}>
               <img src={Logo} alt="AppLogo"/> 
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                  type ="text"
                   placeholder="Nome do usuario"
                   onChange={e =>this.setState({username: e.target.value})} 
                   />
                <input 
                  type ="text"
                   placeholder="e-mail"
                   onChange={e =>this.setState({email: e.target.value})} 
                   />
                <input 
                  type ="password"
                   placeholder="Senha"
                   onChange={e =>this.setState({password: e.target.value})} 
                   />  
                <button type="submit" >Cadastro </button>
                <hr/>
                <Link to="/">Fazer login</Link>      
            </Form>
        </Container>   
    );
   }
}
export default  withRouter(SignUp);