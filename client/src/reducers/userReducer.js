import { GET_USERS, ADD_USER, DELETE_USER } from "../actions/types";

const initialState = {
    users: [
        {"id":"1","login":"administrator","password":'admin123',"email":"admin@mail.com","name":"Administrator","role":"Admin"},
        {"id":"2","login":"pm","password":'admin123',"email":"pm@mail.com","name":"Project Manager","role":"PM"},
        {"id":"3","login":"developer","password":'admin123',"email":"devloper@mail.com","name":"Developer","role":"Developer"}
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state
            };
        default:
            return state;
    }
}
