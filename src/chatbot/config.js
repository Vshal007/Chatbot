import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import LinkList from "../components/LinkList/LinkList";


const config = {
    botname: "LearningBot",
    initialMessages: [
        createChatBotMessage(`Hello world`, { widget: "learningOptions" }),

    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
     
        {
            widgetName: "buildLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Build brief",
                        url:
                            "#",
                        id: 1,
                    },
                    {
                        text: "Explore brief",
                        url:
                            "#",
                        id: 2,
                    },
                    {
                        text: "Get in touch",
                        url: "#",
                        id: 3,
                    },
                ],
            },
        },

        {
            widgetName: "learnLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "What is learn",
                        url:
                            "#",
                        id: 1,
                    },
                    {
                        text: "Explore learn",
                        url:
                            "#",
                        id: 2,
                    },
                    {
                        text: "Get in touch",
                        url: "#",
                        id: 3,
                    },
                ],
            },
        },

        {
            widgetName: "communityLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Community brief",
                        url:
                            "#",
                        id: 1,
                    },
                    {
                        text: "Explore community",
                        url:
                            "#",
                        id: 2,
                    },
                    {
                        text: "Join Community",
                        url: "#",
                        id: 3,
                    },
                ],
            },
        },
        
    ],
}

export default config
