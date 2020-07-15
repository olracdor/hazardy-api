'use strict';

const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.login = async (username, password) => {

  var poolData = {
    UserPoolId: process.env.cognito_identity_pool_id,
    ClientId: process.env.amazon_client_secret
  };

  var userPool = cognito.CognitoUserPool(poolData);
  var authData = {
    Username: username,
    Password: password
  };

  var authDetails = cognito.AuthenticationDetails(authData);
  var userData = {
    Username: params.Email,
    Pool: userPool
  };
  var auth = cognito.CognitoUser(userData);

  return auth.authenticateUser(authDetails).promise();


};
