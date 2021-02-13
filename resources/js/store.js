export default {
   state : {
      welcomeMessage : 'Welcome to my Vue app!'
   },
   getters : {
      welcome(state){
         return state.welcomeMessage;
      }
   },
   mutations : {},
   actions : {},
};
