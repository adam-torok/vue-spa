export const ALERT_SUCCESS = (state, message) => {
    state.type = 'alert-success';
    state.message = message;
}

export const ALERT_ERROR = (state, message) => {
   state.type = 'alert-danger';
   state.message = message;
}


export const ALERT_CLEAR = (state) => {
   state.type = null;
   state.message = null;
}