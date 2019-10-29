export function manageFriends(state={ friends: [] }, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            state.friends.push(action.friend)
            return state
        case "REMOVE_FRIEND" :
            let newFriends = state.friends.filter(friend => { return friend.id !== action.id })
            return {friends: newFriends}
        default :
            return state
    }
}
