import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store ={
    _state: {
        profilePage: {
            posts: [ 
                {id: 1, message: 'hi from index.js!', likesCount: 12 },
                {id: 2, message: 'It`s first post', likesCount:11 }
            ],
            newPostText : "it-it-kamasutra"
        },
        dialogsPage: {
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
            newMessageBody: ''
        },
       sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("State was changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

export default store;