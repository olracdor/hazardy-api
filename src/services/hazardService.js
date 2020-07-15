'use strict';

const AWS = require('aws-sdk');
const dynamodbclient = new AWS.DynamoDB.DocumentClient();

module.exports.getHazardsByCompanyId = async (companyId) => {
  
  console.log(`Fetching all hazards for company ${companyId}`)

  const result = await dynamodbclient.scan({
    TableName: process.env.hazard_table,
    FilterExpression: '#companyId = :companyId',
    ExpressionAttributeNames: {
      '#companyId': 'companyId',
    },
    ExpressionAttributeValues: {
      ':companyId': companyId,
    },
  }).promise(); 
  return result.Items;
};

module.exports.getHazardById = async (id) => {

  console.log(`Fetching hazard details with id ${id}`)

  const result = await dynamodbclient.scan({
    TableName: process.env.hazard_table,
    FilterExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':id': id,
    },
  }).promise(); 

  return result.Items;

};


