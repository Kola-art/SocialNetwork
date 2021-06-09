import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer.js';

let state ={
    posts: [ 
        {id: 1, message: 'hi from index.js!', likesCount: 12 },
        {id: 2, message: 'It`s first post', likesCount:11 }
    ]        
};

test('length of posts should increment', () => {
    // 1. test data
    let action = addPostActionCreator('it-it');
   
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
   
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length of messages shouldn`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
   
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});