const initialState = {
    drawer: false,
    allFunds: [
        { id: 0, name: 'The Church Fund - A1050919' },
        { id: 1, name: 'The Corona Relief Fund - A1090429' },
        { id: 2, name: 'The Divine Mercy Fund - A1020108' },
    ],
    fundName: 'The Church Fund - A1050919',
    whileUpdating: '',
    index: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Drawer':
            return {
                ...initialState,
                drawer: !state.drawer
            };
        case 'Selection-Changed':
            return {
                ...initialState,
                fundName: state.allFunds[action.id].name,
                index: action.id
            };
        case 'Change-Name':
            return {
                ...initialState,
                whileUpdating: action.updatedName
            };
        case 'Update-Name':
            let updatedAllFunds = [...state.allFunds];
            updatedAllFunds[state.index].name = state.whileUpdating;
            return {
                ...initialState,
                allFunds: [...updatedAllFunds],
                fundName: state.whileUpdating
            };
        case 'Cancel-Change':
            return {
                ...initialState,
                whileUpdating: state.fundName
            };
        default:
            return state;
    }

};

export default reducer;