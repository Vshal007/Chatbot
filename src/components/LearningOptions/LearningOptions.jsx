import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { 
    text: "Build", 
    handler: props.actionProvider.handleBuildList, 
    id: 1,
    },
    { text: "Learn", handler: props.actionProvider.handleLearnList, id: 2 },
    { text: "Community", handler: props.actionProvider.handleCommunityList, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
