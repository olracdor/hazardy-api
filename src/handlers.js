const hazardService = require("./services/hazardService");
const authenticationService = require("./services/authenticationService");

const uuid = require('uuid');

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
};

const errorBody = {
    'error': 'failed to get hazards.'
};

module.exports.getHazardsByUserId = async (event, context) => {

    try {
        const result =  await hazardService.getHazardsByUserId(event.queryParameters.userId);
        if (result)
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(result),
            }

        return {
            statusCode: 404,
            headers: headers,
            body: '',
        }
    }
    catch (error) {
        console.log(error);

        return {
            statusCode: error.statusCode || 501,
            headers: headers,
            body: errorBody,
        };
    }
};

module.exports.getHazardById = async (event, context) => {

    try {

        const result = await hazardService.getHazardById(event.pathParameters.hazardId)
        if (result)
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(result),
            }

        return {
            statusCode: 404,
            headers: headers,
            body: '',
        }

    }
    catch (error) {
        console.log(error);

        return {
            statusCode: error.statusCode || 501,
            headers: headers,
            body: errorBody,
        };
    }
};

module.exports.authenticate = async (event, context) => {

    try {
        const data = JSON.parse(event.body);
        const username = data.username
        const password = data.password
        const result = await authenticationService.authenticate(username, password)
        if (result)
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(result),
            }

        return {
            statusCode: 404,
            headers: headers,
            body: '',
        }

    }
    catch (error) {
        console.log(error);

        return {
            statusCode: error.statusCode || 501,
            headers: headers,
            body: errorBody,
        };
    }
};
