import React from 'react';
import { connect } from 'react-redux';


import classes from './PageInfo.module.css';

class PageInfo extends React.Component {
    state = {
        isEdit: false,
    }
    clickHandler = () => {
        this.props.cancelChange();
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    clickedOkHandler = () => {
        this.props.updateName();
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    render() {
        return (
            <section className={[classes.PageInfo, 'MaxWidth'].join(' ')}>

                <p>
                    {this.state.isEdit ?
                        <> <input value={this.props.whileUpdating} onChange={this.props.changeName} /><button onClick={this.clickedOkHandler}>&#10004;</button></>
                        : <span>{this.props.fundName}</span>
                    }
                    {this.state.isEdit ? <button onClick={this.clickHandler}>&#10006;</button>
                        : <code onClick={this.clickHandler}>&#128394;</code>}
                </p>
                <p> Balances as of 12/12/2012</p>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        fundName: state.fundName,
        whileUpdating: state.whileUpdating
    };
}
const mapDispatchToProps = dispatch => {
    return {
        changeName: (e) => dispatch({ type: 'Change-Name', updatedName: e.target.value }),
        updateName: () => dispatch({ type: 'Update-Name' }),
        cancelChange: () => dispatch({ type: 'Cancel-Change' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageInfo);