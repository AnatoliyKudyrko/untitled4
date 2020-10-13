
const initialState  = {
    device: [],
    deviceControl:[],
    loader: true,
    messageChange:{
        count: 0,
        message:false,
        date:new Date().toDateString()

    },
    selectDevice:0
}

function reducer(state=initialState,action){
    switch (action.type){
        case 'ADD_LOADER_DEVICE':
            return  {
                ...state,
                device: action.payload,
                loader: false
        };
        case 'ADD_LOADER_DEVICE_CONTROL':
            return  {
                ...state,
                deviceControl: action.payload,
                loader: false
            };
        case 'ADD_MESSAGE_CHANGE':
            return  {
                ...state,
                messageChange: {
                    message: true,
                    count:state.messageChange.count+1,
                    date:state.messageChange.date
                }
            };
        case 'RESET_MESSAGE_CHANGE':
            return  {
                ...state,
                messageChange: {
                    message: false,
                    count:state.messageChange.count,
                    date:state.messageChange.date
                }
            };
            case 'SELECT_ID_DEVICE':
            return  {
                ...state,
                selectDevice: action.payload,
            };
            case 'CHECKED_DEVICE':
            return  {
                ...state,
                deviceControl: {
                    ...state,
                    value:action.payload
                },
            };
        default: return state

    }

}

export default reducer;