'use strict';

const AWS = require('aws-sdk');
const dynamodbclient = new AWS.DynamoDB.DocumentClient();

module.exports.getVehiclesByCompanyId = async (companyId) => {
  
  console.log(`Fetching all vehicles for company ${company}`)

  const result = await dynamodbclient.scan({
    TableName: process.env.vehicle_table,
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

module.exports.getVehicleById = async (id) => {

  console.log(`Fetching vehicle with id ${id}`)

  const result = await dynamodbclient.scan({
    TableName: process.env.vehicle_table,
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


