import { GET_REPORTS, ADD_REPORT, DELETE_REPORT } from "./types";

export const getReports = () => {
    return {
        type: GET_REPORTS
    };
};