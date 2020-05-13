import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import { DarkBackground, FormWrap, FormDone } from './need-style';
import cancelImg from '../../assets/images/cancel.png'

class NeedAssistance extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            query: '',
        },
        validSubmit: false,
    }
    changeHandler = (e) => {
        const updatedvalue = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        }
        // console.log(updatedvalue);
        this.setState({
            formData: updatedvalue
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.setState({
            validSubmit: true
        });
    }
    render() {
        return (
            <DarkBackground>
                {!this.state.validSubmit ?
                    <FormWrap>
                        <h1>Need Assistance?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>For answers to other common questions, click here to go to our FAQ section.</p>
                        <hr />
                        <p>Seeking Assistance for<span>‘The Church Fund’</span></p>
                        <form onSubmit={this.submitHandler}>
                            <label htmlFor="name">Full Name <strong>*</strong></label><br />
                            <input type="text" name="name" /*required*/ id="name" onChange={this.changeHandler} value={this.state.formData.name} />
                            <br />
                            <label htmlFor="email">Email Address<strong>*</strong></label><br />
                            <input type="email" name="email" /*required*/ id="email" onChange={this.changeHandler} value={this.state.formData.email} />
                            <br />
                            <label htmlFor="query">Query<strong>*</strong></label><br />
                            <textarea name="query" id="query" /*required*/ cols="40" rows="10"
                                placeholder="Please describe your query" onChange={this.changeHandler} value={this.state.formData.query} ></textarea>
                            <Button type="submit">SEND</Button>
                            <h3>Hit a snag?</h3>
                            <span>Contact us at 888-383-4483</span>
                        </form>
                        <Link to='/'><img src={cancelImg} alt="cancel"></img></Link>
                    </FormWrap>
                    :
                    <FormDone>
                        <Link to='/'><img src={cancelImg} alt="cancel"></img></Link>
                        <h2>Request Submitted</h2>
                        <div>
                            <div></div>
                        </div>
                        <p>You have successfully submmited your request for assistance.
                    We will get back to you within 2 - 3 business days.</p>
                        <Link to='/'><Button invert>DONE</Button></Link>
                        <h3>Hit a snag?</h3>
                        <span>Contact us at 888-383-4483</span>
                    </FormDone>}
            </DarkBackground>
        );
    }
}


export default NeedAssistance;