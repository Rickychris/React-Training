import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import { FormWrap, FormDone } from './need-style';
// import cancelImg from '../../assets/images/cancel.png'


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
        this.props.submitData({ ...this.state.formData, key: this.props.keyValue });
        this.setState({
            validSubmit: true,
        });
        // window.scrollTo(0, 0);
        // let List;
        // let data = localStorage.getItem("DATA");

        // if (data) {
        //     List = JSON.parse(data);
        // } else {
        //     List = [];
        // }
        // List.push({ ...this.state.formData });
        // localStorage.setItem("DATA", JSON.stringify(List));
    }

    render() {
        return (

            !this.state.validSubmit ?
                <FormWrap>
                    <h1>Need Assistance?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                    <p>For answers to other common questions, click here to go to our FAQ section.</p>
                    <hr />
                    <p>Seeking Assistance for&nbsp;<span>‘{this.props.fundName}’</span> </p>
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
                    {/* <Link to='/'><img src={cancelImg} alt="cancel"></img></Link> */}
                </FormWrap>
                :
                <FormDone>
                    {/* <Link to='/'><img src={cancelImg} alt="cancel"></img></Link> */}
                    <h2>Request Submitted</h2>
                    <div>
                        <div></div>
                    </div>
                    <p>You have successfully submmited your request for assistance.
                    We will get back to you within 2 - 3 business days.</p>
                    <Button invert onClick={this.props.drawerHandler}>DONE</Button>
                    <h3>Hit a snag?</h3>
                    <span>Contact us at 888-383-4483</span>
                </FormDone>
        );
    }
}

const mapStateToProps = state => {
    return {
        fundName: state.fundName,
        keyValue: state.keyValue
    };
}
const mapDispatchToProps = dispatch => {
    return {
        drawerHandler: () => dispatch({ type: 'Drawer' }),
        submitData: (addData) => dispatch({ type: 'Submit', addData: addData }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedAssistance);

