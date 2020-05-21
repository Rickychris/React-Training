import React from 'react';

import classes from './MainTop.module.css';
import BalaceCard from '../../BalanceCard/BalanceCard';
import TabView from '../../TabView/TabView';


class MainTop extends React.Component {
    state = {
        isLoading: true,
        error: false,
        data: {
            currentBalance: '',
            availableBalance: ''
        }
    };
    componentDidMount() {
        fetch('https://demo1164494.mockable.io/balance')
            .then(res => res.json())
            .then(res => this.successHandler(res))
            .catch(error => this.errorHandler(error))
    }

    successHandler = (response) => {
        console.log(response.data);
        this.setState({
            isLoading: false,
            data: response.data

        });
    }
    errorHandler = (error) => {
        console.log(error);
        this.setState({
            error: true
        })
    }
    render() {
        return (
            <div className={[classes.MainTop, 'MaxWidth'].join(' ')}>
                <div>
                    <BalaceCard name='Current Balance' balance={this.state.data.currentBalance} loading={this.state.isLoading} error={this.state.error} />
                    <BalaceCard name='Available Balance' balance={this.state.data.availableBalance} trxSummary loading={this.state.isLoading} error={this.state.error} />
                </div>
                <div>

                    <TabView />
                </div>
            </div>
        );
    }
}

export default MainTop;