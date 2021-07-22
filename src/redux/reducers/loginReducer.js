export default (state, action) => {
    switch (action.type) {
        case "login":
            return {
                user: action.payload
            };
        default:
            return state;
    }
};