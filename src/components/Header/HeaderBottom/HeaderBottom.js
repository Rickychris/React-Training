import React from 'react';
import { connect } from 'react-redux';


import classes from './HeaderBottom.module.css';
import Logo from '../../../assets/images/vcep-logo.png';

const headetBottomData = [
    'ACCOUNT SUMMARY',
    'GRANTS',
    'CONTRIBUTIONS',
    'INVESTMENTS',
    'RESOURCES',
    'MY ACCOUNT',
];


const HeaderBottom = (props) => {
    // window.scrollTo(0, -1000);
    // const [tap, setTap] = useState(false);
    // const responsiveNav = () => {
    //     props.ResponsiveNav();
    //     // setTap(!tap)
    // }
    return (
        <div className={classes.Background}>

            <div className={[classes.HeaderBottom, 'MaxWidth'].join(' ')}>
                <img src={Logo} alt='logo' />
                <ul className={classes.NavUL}>
                    {headetBottomData.map(data => <li key={data}>{data}</li>)}
                </ul>
                <div onClick={props.ResponsiveNav}>
                    <div className={[classes.line1, props.showNav ? classes.rotate1 : null].join(' ')}></div>
                    <div className={[classes.line1, classes.opacity, props.showNav ? classes.opacityToggle : null].join(' ')}></div>
                    <div className={[classes.line3, props.showNav ? classes.rotate3 : null].join(' ')}></div>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        showNav: state.ResponsiveNav,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        ResponsiveNav: () => dispatch({ type: 'ResponsiveNav' }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);
