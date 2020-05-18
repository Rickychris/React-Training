const initialState = {
    data: [],
    drawer: false,
    ResponsiveNav: false,
    allFunds: [
        { id: 0, name: 'The Church Fund - A1050919' },
        { id: 1, name: 'The Corona Relief Fund - A1090429' },
        { id: 2, name: 'The Divine Mercy Fund - A1020108' },
    ],
    fundName: 'The Church Fund - A1050919',
    whileUpdating: '',
    index: 0,
    keyValue: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Drawer':
            return {
                ...state,
                drawer: !state.drawer
            };
        case 'ResponsiveNav':
            return {
                ...state,
                ResponsiveNav: !state.ResponsiveNav
            };
        case 'Selection-Changed':
            return {
                ...state,
                fundName: state.allFunds[action.id].name,
                index: action.id
            };
        case 'Change-Name':
            return {
                ...state,
                whileUpdating: action.updatedName
            };
        case 'Update-Name':
            let updatedAllFunds = [...state.allFunds];
            updatedAllFunds[state.index].name = state.whileUpdating;
            return {
                ...state,
                allFunds: [...updatedAllFunds],
                fundName: state.whileUpdating
            };
        case 'Cancel-Change':
            return {
                ...state,
                whileUpdating: state.fundName
            };
        case 'Get-Data':
            let getData = localStorage.getItem("DATA");
            let dataList = [];
            if (getData) {
                dataList = JSON.parse(getData);

                // for (let i = 0; i < dataList.length; i++) {
                //     dataList[i].key = i;
                // }
            }
            return {
                ...state,
                data: [...dataList]
            };
        case 'Delete-Data':
            const updateList = [...state.data];
            // console.log(action.key);
            // console.log(state.data);
            // const newData = [...state.data].splice(action.key, 1);
            const newData = updateList.filter(item => item.key !== action.key);
            localStorage.setItem("DATA", JSON.stringify(newData));

            return {
                ...state,
                data: newData
            };
        case 'Update-Data':

            const nwData = [...action.newData];
            localStorage.setItem("DATA", JSON.stringify(nwData));

            return {
                ...state,
                data: nwData
            };
        case 'Submit':
            let newList = [];
            let data = state.data;

            if (data.length > 0) {
                newList = data;
            }
            newList.push(action.addData);
            localStorage.setItem("DATA", JSON.stringify(newList));
            return {
                ...state,
                data: newList,
                keyValue: state.keyValue + 1
            };
        default:
            return state;
    }

};

export default reducer;