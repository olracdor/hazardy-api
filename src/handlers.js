const vehicleService = require("./services/vehicleService");
const authenticationService = require("./services/authenticationService");

const uuid = require('uuid');

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
};

const errorBody = {
    'error': 'failed to get vehicles.'
};

module.exports.login = async (event, context) => {

    try {
        const result =  await vehicleService.getVehicles();
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

module.exports.getVehiclesByCompanyId = async (event, context) => {

    try {
        const result =  await vehicleService.getVehiclesByCompanyId(event.queryParameters.companyId);
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

module.exports.getVehicleById = async (event, context) => {

    try {

        const result = await vehicleService.getVehicleById(event.pathParameters.vehicleId)
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
        const result = await authenticationService.login(username, password)
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
