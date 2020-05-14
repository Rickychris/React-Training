import React from 'react';
import { Link } from 'react-router-dom';


import * as styledComp from './manageStyle';

let List;

class ManageData extends React.Component {
    componentWillMount() {

        let data = localStorage.getItem("DATA");

        if (data) {
            List = JSON.parse(data);
        } else {
            List = [];
        }
    }
    render() {
        return (
            <div>
                {List.map(d => (<styledComp.styleDiv>
                    <styledComp.styleP>Name:{d.name}</styledComp.styleP>
                    <styledComp.styleP>Email:{d.email}</styledComp.styleP>
                    <styledComp.styleP>Query:{d.query}</styledComp.styleP>
                </styledComp.styleDiv>))}
                {console.log(List.length === 0)}
                {!(List.length === 0) ? <styledComp.styleButton danger onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                }}>Delete All</styledComp.styleButton>
                    : <styledComp.styleH1>No Data to Display!</styledComp.styleH1>}
                <styledComp.styleButton><Link to='/'>Back</Link></styledComp.styleButton>
            </div>
        );
    }
}
export default ManageData;