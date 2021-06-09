const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [ 
        {id: 1, name: 'Temuch'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'}
    ],
    messages: [ 
        {id: 1, message: 'hi1'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
        {id: 4, message: 'hi4'}
    ],
};
 const dialogsReducer = (state = initialState, action) => {
    // stateCopy.messages =[...state.messages];

    switch(action.type){
        case SEND_MESSAGE:
           let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, {id:6, message: body}]
            };
        default: 
            return state;
    }
   
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;