import { GET_REPORTS, ADD_REPORT, DELETE_REPORT } from "../actions/types";

const initialState = {
    REPORTs: [
        {"id":1,"name":"TN-123","description":"Description of TN-123\n","estimation":20,"spent":6,"status":null,"user_id":3},
        {"id":2,"name":"TN-456","description":"Description of TN-456\n","estimation":30,"spent":8,"status":null,"user_id":3}
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_REPORTS:
            return {
                ...state
            };
        default:
            return state;
    }
}
