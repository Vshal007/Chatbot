class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet=()=>{
     const message=this.createChatBotMessage("Hello friend.");
     this.addMessageToState(message);
   }


   handleBuildList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Build:",
      {
        widget: "buildLinks",
      }
    );

    this.addMessageToState(message);
  };

  handleLearnList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Learn:",
      {
        widget: "learnLinks",
      }
    );

    this.addMessageToState(message);
  };

  handleCommunityList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Community:",
      {
        widget: "communityLinks",
      }
    );

    this.addMessageToState(message);
  };

   addMessageToState =(message)=>{

    this.setState((prevState)=>({
       ...prevState,
       messages:[...prevState.messages,message]
    }));
   };
 }
 
 export default ActionProvider;
 