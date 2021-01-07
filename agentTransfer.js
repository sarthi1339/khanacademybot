const agentconfig = require('./agentDashbordconfig');
const request = require('request');
const moment = require('moment');


module.exports.transferToAgent = (phoneNumber, callback) => {
    console.log(`Started Getting AgentDashboard (` + agentconfig.agentDashboardDepartment + `) Token for ` + phoneNumber);

    var options = {
        'method': 'POST',
        'url': agentconfig.agentDashboardUrl,
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'type': 'getToken'
        },
        form: {
            'userId': agentconfig.agentDashboardUserid,
            'password': agentconfig.agentDashboardPassowrd,
            'phoneNo': phoneNumber,
            'waNumber': agentconfig.agentDashboardWABANumber
        }
    };
    request.post(options, (error, response, body) => {
        if (error) {
            console.log(`Error while fetching AgentDashboard Token for ${phoneNumber} due to ${error}`);
            callback('Error', phoneNumber);
        } else {
            if (response.statusCode !== 200) {
                console.log(`Non 200 response : ${JSON.stringify(body)}`)
                callback('Error', phoneNumber);
            } else {
                console.log('Responce from Token Api===============>'+JSON.stringify(response));
                console.log('Responce body from Token Api===============>'+JSON.stringify(response.body,null,2));
                var obj = JSON.parse(response.body);
                var token = obj.token;
                console.log(`Generated AgentDashboard (` + agentconfig.agentDashboardDepartment + `) Token PhoneNumber: ${phoneNumber}, Token: ${token}`);
                

                this.callTransferApi(token,phoneNumber, () =>{
                    console.log(`Transfer call completed for ${phoneNumber}`);
                    callback(token, phoneNumber);
                });
            }
        }
    })    
}

module.exports.callTransferApi =  (token, phoneNumber,callback) => {
    console.log(`Started Calling AgentDashboard (` + agentconfig.agentDashboardDepartment + `) transfer PhoneNumber: ` + phoneNumber + ` Token: ` + token);

    var options = {
        'method': 'POST',
        'url': agentconfig.agentDashboardUrl,
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'type': 'TransferRequestToAgent'
        },
        form: {
            'phoneNo': phoneNumber,
            'token': token,
            'deptName': agentconfig.agentDashboardDepartment,
            'waNumber':agentconfig.agentDashboardWABANumber
        }
    };
    
    request.post(options, (error, response, body) => {
        if (error) {
            console.log(`Error while transfering PhoneNumber: ${phoneNumber} To Agent. Error: ${error}`);
            // callback('');
        } else {
            if (response.statusCode !== 200) {
                console.log(`Error while transfering PhoneNumber: ${phoneNumber} To Agent. Error: Non 200 response, ${JSON.stringify(body)}`);
                // callback('');
            } else {
                console.log(`PhoneNumber: ${phoneNumber} Transfered to AgentDashboard (` + agentconfig.agentDashboardDepartment + `) Status: ${JSON.stringify(body)}`);
                // callback('');
            }
        }
        callback();
    })    

};

module.exports.workinghour_ended_check = () => {
    if(Number(moment().utcOffset("+05:30").format('HH')) >= Number(agentconfig.AfterWorkingHourMsg_StartTime) && Number(moment().utcOffset("+05:30").format('HH'))< Number(agentconfig.AfterWorkingHourMsg_EndTime) ) {
        console.log(`After Workinh Hour Logic Check(is after working hour?) =======>Current_Hour: ${moment().utcOffset("+05:30").format('HH')}  > After_workingHour_Start : ${agentconfig.AfterWorkingHourMsg_StartTime} && Current_Hour: ${moment().utcOffset("+05:30").format('HH')} <  After_workingHour_End : ${agentconfig.AfterWorkingHourMsg_EndTime}==================>true`)
        return true;
    } else {
        console.log(`After Workinh Hour Logic Check(is after working hour?) =======>Current_Hour: ${moment().utcOffset("+05:30").format('HH')}  > After_workingHour_Start : ${agentconfig.AfterWorkingHourMsg_StartTime} && Current_Hour: ${moment().utcOffset("+05:30").format('HH')} <  After_workingHour_End : ${agentconfig.AfterWorkingHourMsg_EndTime}==================>false`)
        return false;
    }
}
