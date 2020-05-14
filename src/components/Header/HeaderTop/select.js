import React from 'react';
import { connect } from 'react-redux';


class Select extends React.Component {
    render() {
        return (
            <select onChange={(e) => this.props.selectionChanged(e.target.value)}>
                {/* {console.log(this.props.allFunds[1].name)} */}
                {this.props.allFunds.map(data => <option key={data.id} value={data.id}>{data.name}</option>)}
            </select>
        );
    }
}
const mapStateToProps = state => {
    return {
        allFunds: [...state.allFunds],
        fundName: state.fundName
    };
}
const mapDispatchToProps = dispatch => {
    return {
        selectionChanged: (id) => dispatch({ type: 'Selection-Changed', id: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);

