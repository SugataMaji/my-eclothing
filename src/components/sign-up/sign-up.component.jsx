import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomInput from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            password:'',
            confirmpassword:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({name:'', email:'', password:'', confirmpassword:''})
    }

    handleChange = event =>{
        const {value, name} = event.target;
        
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-up">
                <h2>Don't have an account?</h2>
                <span>Sign up with your information</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    handleChange={this.handleChange}
                    label="name"
                    required
                    />
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required
                    />
                    <FormInput 
                    type="password" 
                    name="confirmpassword" 
                    value={this.state.confirmpassword} 
                    handleChange={this.handleChange}
                    label="confirm password"
                    required
                    />
                    <CustomInput type="submit" >Sign Up</CustomInput>
                </form>
            </div>
        )
    }
}

export default SignUp;