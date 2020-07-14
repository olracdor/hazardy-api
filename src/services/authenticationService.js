'use strict';

const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.login = async (email, password) => {

  var poolData = {
    UserPoolId: conf.AWSConfig.UserPoolId,
    ClientId: conf.AWSConfig.ClientId
  };

  var userPool = cognito.CognitoUserPool(poolData);
  var authData = {
    Username: email,
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
