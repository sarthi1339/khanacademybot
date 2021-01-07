// const agentconfig = require('./agentDashbordconfig');
// const Controller = require('./controller/controller.js');
// const agentDashboard = require('./agentTransfer.js');

// const fs = require('fs');
// const path = require('path');
// const botScriptExecutor = require('bot-script').executor;
// const scr_config = require('./scr_config.json');
// const PropertiesReader = require('properties-reader');

// let mobileNumber = '';

// function MessageHandler(context, event) {
//     // context.sendResponse("This is a response from Message Handler");
//     try {
//         let message = event.message.toLowerCase();
//         let getUserMobileNumber = event.contextobj.contextid;
//         let profileName = event.contextobj.senderName;
//         let number = getUserMobileNumber.split(":");
//         mobileNumber = number[1];
//         console.log(message.length);
//         let count = context.simpledb.roomleveldata.count;

//         if (message.length > 10) {
//             try {
//                 Controller.nlpAnswers(context, event, message, profileName, mobileNumber);
//             } catch (error) {
//                 console.log(error);
//                 Controller.botUnavailable(context, event);
//             }
//         } else
//             if (message == '#') {
//                 try {
//                     // console.log('I am inside 101');
//                     agentDashboard.transferToAgent(mobileNumber, () => {
//                         // options.next_state = 'label_agent_blank_text';
//                         // callback(options, event, context);
//                     });
//                     // ScriptHandler(context, event);
//                 } catch (error) {
//                     console.log(error);
//                     Controller.botUnavailable(context, event);
//                 }
//             } else
//                 if (message == 'start') {
//                     context.sendResponse('*Note*: The minimum length of query should be 10 words.\n\nPlease write your query now.');
//                 } else
//                     if (message == 'yes') {
//                         try {
//                             Controller.satisfactionYes(context, event, message, profileName, mobileNumber);
//                         } catch (error) {
//                             console.log(error);
//                             Controller.botUnavailable(context, event);
//                         }
//                     } else
//                         if (message == 'no') {
//                             try {
//                                 Controller.satisfactionNo(context, event, message, profileName, mobileNumber);
//                             } catch (error) {
//                                 console.log(error);
//                                 Controller.botUnavailable(context, event);
//                             }
//                         } else
//                             if (typeof count == 'undefined') {
//                                 try {
//                                     Controller.resetUser(context, event);
//                                 } catch (error) {
//                                     console.log(error);
//                                     Controller.botUnavailable(context, event);
//                                 }
//                             } else
//                                 if (typeof count == 'number' && message != 99) {
//                                     try {
//                                         Controller.questionAndAnswers(context, event, message);
//                                     } catch (error) {
//                                         console.log(error);
//                                         Controller.botUnavailable(context, event);
//                                     }
//                                 } else
//                                     if (typeof count == 'number' && message == 99) {
//                                         try {
//                                             Controller.resetUser(context, event);
//                                         } catch (error) {
//                                             console.log(error);
//                                             Controller.botUnavailable(context, event);
//                                         }
//                                     } else {
//                                         try {
//                                             Controller.resetUser(context, event);
//                                         } catch (error) {
//                                             console.log(error);
//                                             Controller.botUnavailable(context, event);
//                                         }
//                                     }
//     } catch (error) {
//         console.log(error);
//         Controller.botUnavailable(context, event);
//     }
//      ScriptHandler(context, event);
// }

// function ScriptHandler(context, event) {
//     var apikey = "";

//     var botconfigPath = path.join(__dirname, '.botconfig');
//     if (fs.existsSync(botconfigPath)) {
//         apiKey = PropertiesReader(botconfigPath).get('apikey');
//     }
//     var options = Object.assign({}, scr_config);
//     options.current_dir = __dirname;
//     options.apikey = apikey || '';
//     options.default_message = "I am unable to process your request. \n\nPlese type Hi for main menu";
//     // You can add any start point by just mentioning the <script_file_name>.<section_name>
//     // options.start_section = "default.main";
//     options.success = function (opm) {
//         sendToRocketChat(context, event, opm);
//     };
//     options.error = function (err) {
//         console.log(err.stack);
//         sendToRocketChat(context, event, ["Sorry I am unable to process your request.\nPlease type # to start again"]);
//     };
//     botScriptExecutor.execute(options, event, context);
// }

// function sendToRocketChat(context, event, opm) {
//     if (opm.length === 0) {
//         return context.sendResponse("");
//     }
//     console.log(`OPM Value => ${JSON.stringify(opm)}`);
//     let messageToSend = opm.shift();
//     if (messageToSend) {
//         console.log(`Message Being Forwarded => ${messageToSend}`);

//         context.sendToRocketChatConnector(event, agentconfig.agentDashboardWABANumber, messageToSend, () => {
//             if (opm.length === 0) {
//                 return sendToRocketChat(context, event, opm);
//             } else {
//                 return sendToRocketChat(context, event, opm);
//             }
//         });
//     }
//     else {
//         return sendToRocketChat(context, event, opm);
//     }
// }

// // function EventHandler(context, event) {
// //     // context.sendResponse("This is a Response From Event Handler");
// // }

// function EventHandler(context, event) {
//     context.simpledb.roomleveldata = {};
//     MessageHandler(context, event);
// }

// function HttpResponseHandler(context, event) {
//     if (event.geturl === "http://ip-api.com/json")
//         context.sendResponse('This is response from http \n' + JSON.stringify(event.getresp, null, '\t'));
// }

// function DbGetHandler(context, event) {
//     context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
// }

// function DbPutHandler(context, event) {
//     let values = JSON.stringify(event.dbval);
//     if (values.mobileNumber == mobileNumber) {
//         return;
//     } else {
//         return;
//     }
// }

// function HttpEndpointHandler(context, event) {
//     context.sendResponse('This is response from http \n' + JSON.stringify(event, null, '\t'));
// }

// function LocationHandler(context, event) {
//     context.sendResponse("Got location");
// }

// exports.onMessage = MessageHandler;
// exports.onEvent = EventHandler;
// exports.onHttpResponse = HttpResponseHandler;
// exports.onDbGet = DbGetHandler;
// exports.onDbPut = DbPutHandler;
// exports.sendToRocketChat = sendToRocketChat;
// if (typeof LocationHandler == 'function') {
//     exports.onLocation = LocationHandler;
// }
// if (typeof HttpEndpointHandler == 'function') {
//     exports.onHttpEndpoint = HttpEndpointHandler;
// }

///////////////code for normal bots (withaut rocket chat)
// var botScriptExecutor = require('bot-script').executor;
// var scr_config = require('./scr_config.json');

// function MessageHandler(context, event) {

//     ScriptHandler(context, event);
// }

// function EventHandler(context, event) {
//     context.simpledb.roomleveldata = {};
//     MessageHandler(context, event);
// }


// function ScriptHandler(context, event){
//     var options = Object.assign({}, scr_config);
//     options.current_dir = __dirname;
//     //options.default_message = "Sorry Some Error Occurred.";
//     // You can add any start point by just mentioning the <script_file_name>.<section_name>
//     // options.start_section = "default.main";
//     options.success = function(opm){
//         context.sendResponse(JSON.stringify(opm));
//     };
//     options.error = function(err) {
//         console.log(err.stack);
//         context.sendResponse(options.default_message);
//     };
//     botScriptExecutor.execute(options, event, context);
// }

// function HttpResponseHandler(context, event) {
//     if (event.geturl === "http://ip-api.com/json")
//         context.sendResponse('This is response from http \n' + JSON.stringify(event.getresp, null, '\t'));
// }

// function DbGetHandler(context, event) {
//     context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
// }

// function DbPutHandler(context, event) {
//     context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
// }

// function HttpEndpointHandler(context, event) {
//     context.sendResponse('This is response from http \n' + JSON.stringify(event, null, '\t'));
// }

// function LocationHandler(context, event) {
//     context.sendResponse("Got location");
// };

// exports.onMessage = MessageHandler;
// exports.onEvent = EventHandler;
// exports.onHttpResponse = HttpResponseHandler;
// exports.onDbGet = DbGetHandler;
// exports.onDbPut = DbPutHandler;
// if (typeof LocationHandler == 'function') { exports.onLocation = LocationHandler; }
// if (typeof HttpEndpointHandler == 'function') { exports.onHttpEndpoint = HttpEndpointHandler; }












//////////////////////code for rocket chat bots/////////////
// const utils= require('./utils')
// require('./default');
const agentDashboard = require('./agentTransfer.js');
const agentconfig = require('./agentDashbordconfig');
const Controller = require('./controller/controller.js');
var botScriptExecutor = require('bot-script').executor;
var scr_config = require('./scr_config.json');
var PropertiesReader = require('properties-reader');
var fs = require('fs');
var path = require('path');
let mobileNumber = '';
let opm = [];
let inputs = ['hi', 'hello', 'start'];
let satisfaction_inputs = ['yes', 'no', '1', '2'];
let backToMainMenu = '*Type 99* to go back to *Main Menu*';
let thankYouMessage = 'I hope that I resolved your query 🤞Please visit www.khanacademy.org and keep learning. Give us your feedback and let us know how we did.\n\n*Type 1* to give feedback\n\n' + backToMainMenu;
let unidentifiedTextResponse = "You are almost there! We could not understand your response. Please check your response and revert back based on the previous message and try again.";

function MessageHandler(context, event) {
    // context.sendResponse("This is a response from Message Handler");
    try {
        let message = event.message.toLowerCase();
        console.log(message);
        let getUserMobileNumber = event.contextobj.contextid;
        let profileName = event.contextobj.senderName;
        let number = getUserMobileNumber.split(":");
        mobileNumber = number[1];
        console.log(message.length);
        let count = context.simpledb.roomleveldata.count;
        let feedback = context.simpledb.roomleveldata.feedback;
        let squery = context.simpledb.roomleveldata.squery;
        var currentdate = new Date();
        let oldtime = context.simpledb.roomleveldata.oldtime;
        let currenttime = currentdate.getTime();
        console.log("Old Time: " + oldtime + "Current Time: " + currenttime);

        var delta = Math.abs(currenttime - oldtime) / 1000;
        var hours = Math.floor(delta / 3600) % 24;

        console.log("Hours: " + hours + "Seconds: " + delta);
        
        if (hours <= 3) {
            if (message.length > 15 && (typeof feedback == "undefined")) {
                try {
                    Controller.nlpAnswers(context, event, message, profileName, mobileNumber);
                } catch (error) {
                    console.log(error);
                    Controller.botUnavailable(context, event);
                }
            } else
                if (message == '#') {
                    if (squery == 'on') {
                        try {
                            delete context.simpledb.roomleveldata.squery;
                            delete context.simpledb.roomleveldata.count;
                            agentDashboard.transferToAgent(mobileNumber, () => {
                                // options.next_state = 'label_agent_blank_text';
                                // callback(options, event, context);
                            });
                            // ScriptHandler(context, event);
                        } catch (error) {
                            console.log(error);
                            Controller.botUnavailable(context, event);
                        }
                    } else {
                        try {
                            sendToRocketChat(context, event, [unidentifiedTextResponse]);
                        } catch (error) {
                            console.log(error);
                            Controller.botUnavailable(context, event);
                        }
                    }
                } else
                    if (squery == "on" && message.length < 15) {
                        if (message == '1' && (satisfaction_inputs.includes(message) == true)) {
                            try {
                                delete context.simpledb.roomleveldata.squery;
                                sendToRocketChat(context, event, ['*Note*: The minimum length of query should be 10 words.\n\nPlease write your query now.']);
                            } catch (error) {
                                console.log(error);
                                Controller.botUnavailable(context, event);
                            }
                        }
                        else if (message == '2' && (satisfaction_inputs.includes(message) == true)) {
                            try {
                                delete context.simpledb.roomleveldata.squery;
                                context.simpledb.roomleveldata.feedback = "yes";
                                sendToRocketChat(context, event, [thankYouMessage]);

                            } catch (error) {
                                console.log(error);
                                Controller.botUnavailable(context, event);
                            }
                        } else {
                            try {
                                sendToRocketChat(context, event, [unidentifiedTextResponse]);
                            } catch (error) {
                                console.log(error);
                                Controller.botUnavailable(context, event);
                            }
                        }
                    } else
                        if (feedback == "no" && message != '2' && message.length < 15) {
                            if (message == '1' && (satisfaction_inputs.includes(message) == true)) {
                                try {
                                    delete context.simpledb.roomleveldata.feedback;
                                    sendToRocketChat(context, event, ['*Note*: The minimum length of query should be 10 words.\n\nPlease write your query now.']);

                                } catch (error) {
                                    console.log(error);
                                    Controller.botUnavailable(context, event);
                                }
                            } else {
                                try {
                                    sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                } catch (error) {
                                    console.log(error);
                                    Controller.botUnavailable(context, event);
                                }
                            }
                        } else
                            if ((feedback == 'no' || feedback == 'yes') && message.length < 15 && (message != 99)) {
                                if ((message == '2' && (satisfaction_inputs.includes(message) == true) && feedback == "no") || (message == '1' && (satisfaction_inputs.includes(message) == true) && feedback == "yes")) {
                                    try {
                                        sendToRocketChat(context, event, ['*Note*: The minimum length of feedback should be 10 words.\n\nPlease write your feedback now.']);
                                    } catch (error) {
                                        console.log(error);
                                        Controller.botUnavailable(context, event);
                                    }
                                }
                                else {
                                    try {
                                        sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                    } catch (error) {
                                        console.log(error);
                                        Controller.botUnavailable(context, event);
                                    }
                                }
                            }
                            else
                                if (message.length > 15 && (feedback == "no" || feedback == "yes")) {
                                    try {
                                        delete context.simpledb.roomleveldata.feedback;
                                        Controller.saveCustomFeedback(context, event, message);
                                    } catch (error) {
                                        console.log(error);
                                        Controller.botUnavailable(context, event);
                                    }
                                }
                                else
                                    if (message == 'yes') {
                                        if ((satisfaction_inputs.includes(message) == true) && count > 0) {
                                            try {
                                                Controller.satisfactionYes(context, event, message, profileName, mobileNumber);
                                            } catch (error) {
                                                console.log(error);
                                                Controller.botUnavailable(context, event);
                                            }
                                        } else {
                                            try {
                                                sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                            } catch (error) {
                                                console.log(error);
                                                Controller.botUnavailable(context, event);
                                            }
                                        }

                                    } else
                                        if (message == 'no') {
                                            if ((satisfaction_inputs.includes(message) == true) && count > 0) {
                                                try {
                                                    Controller.satisfactionNo(context, event, message, profileName, mobileNumber);
                                                } catch (error) {
                                                    console.log(error);
                                                    Controller.botUnavailable(context, event);
                                                }
                                            } else {
                                                try {
                                                    sendToRocketChat(context, event, [unidentifiedTextResponse]);
                                                } catch (error) {
                                                    console.log(error);
                                                    Controller.botUnavailable(context, event);
                                                }
                                            }
                                        } else
                                            if (typeof count == 'undefined') {
                                                try {
                                                    Controller.resetUser(context, event);
                                                } catch (error) {
                                                    console.log(error);
                                                    Controller.botUnavailable(context, event);
                                                }
                                            } else
                                                if (typeof count == 'number' && message != 99) {
                                                    try {
                                                        Controller.questionAndAnswers(context, event, message);
                                                    } catch (error) {
                                                        console.log(error);
                                                        Controller.botUnavailable(context, event);
                                                    }
                                                } else
                                                    if (typeof count == 'number' && message == 99) {
                                                        try {
                                                            Controller.resetUser(context, event);
                                                        } catch (error) {
                                                            console.log(error);
                                                            Controller.botUnavailable(context, event);
                                                        }
                                                    } else {
                                                        try {
                                                            Controller.resetUser(context, event);
                                                        } catch (error) {
                                                            console.log(error);
                                                            Controller.botUnavailable(context, event);
                                                        }
                                                    }
        } else {
            try {
                Controller.resetUser(context, event);
            } catch (error) {
                console.log(error);
                Controller.botUnavailable(context, event);
            }
        }
    } catch (error) {
        console.log(error);
        Controller.botUnavailable(context, event);
    }
    //  ScriptHandler(context, event);
}


function EventHandler(context, event) {
    context.simpledb.roomleveldata = {};
    MessageHandler(context, event);
}

// function ScriptHandler(context, event) {
//     var apikey = "";
//     // event.sender=8971823925;
//     var botconfigPath = path.join(__dirname, '.botconfig');
//     if (fs.existsSync(botconfigPath)) {
//         apiKey = PropertiesReader(botconfigPath).get('apikey');
//     }
//     var options = Object.assign({}, scr_config);
//     options.current_dir = __dirname;
//     options.apikey = apikey || '';
//     options.default_message = "Sorry I am unable to process your request.\nPlease *Type 99* to start again ";
//     // You can add any start point by just mentioning the <script_file_name>.<section_name>
//     // options.start_section = "default.main";
//     options.success = function (opm) {
//         sendToRocketChat(context, event, opm);
//     };
//     options.error = function (err) {
//         console.log(err.stack);
//         sendToRocketChat(context, event, ["Sorry I am unable to process your request.\nPlease *Type 99* to start again"]);
//         // console.log(context,event, ["Sorry I am unable to process your request.\nPlease type # to start again"]);
//         //context.sendResponse("Sorry Some Error Occurred");
//     };
//     // botScriptExecutor.execute(options, event, context);
// }

function sendToRocketChat(context, event, opm) {
    if (opm.length === 0) {
        return context.sendResponse("");
    }
    // console.log(`OPM Value => ${JSON.stringify(opm)}`);
    let messageToSend = opm.shift();
    if (messageToSend) {
        console.log(`Message Being Forwarded => ${messageToSend}`);

        context.sendToRocketChatConnector(event, agentconfig.agentDashboardWABANumber, messageToSend, () => {
            if (opm.length === 0) {
                return context.sendResponse("");
            } else {
                return sendToRocketChat(context, event, opm);
            }
        });
    }
    else {
        return sendToRocketChat(context, event, opm);
    }
}

function HttpResponseHandler(context, event) {
    if (event.geturl === "http://ip-api.com/json")
        context.sendResponse('This is response from http \n' + JSON.stringify(event.getresp, null, '\t'));
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
}

function DbPutHandler(context, event) {
    let values = JSON.stringify(event.dbval);
    if (values.mobileNumber == mobileNumber) {
        return;
    } else {
        return;
    }
}
/*
function HttpEndpointHandler(context, event) {
    context.sendResponse('This is response from http \n' + JSON.stringify(event, null, '\t'));
}
*/
function LocationHandler(context, event) {
    context.sendResponse("Got location");
};
exports.onMessage = MessageHandler;
exports.onEvent = EventHandler;
exports.onHttpResponse = HttpResponseHandler;
exports.onDbGet = DbGetHandler;
exports.onDbPut = DbPutHandler;
module.exports.sendToRocketChat = sendToRocketChat;
if (typeof LocationHandler == 'function') {
    exports.onLocation = LocationHandler;
}
if (typeof HttpEndpointHandler == 'function') {
    exports.onHttpEndpoint = HttpEndpointHandler;
}



