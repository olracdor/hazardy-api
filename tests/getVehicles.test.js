const chai = require('chai');
const AWS = require('aws-sdk-mock');
const MockResponse = require('./dynamodbMockResponse');

describe('Get Vehicle tests', () => {

    it('it should return a all Vehicle', done => {
        AWS.mock('DynamoDB.DocumentClient', 'get', function(params, callback) {
            callback(null, MockResponse.getVehicleByIdMockResponse());
          });
        
          done();
      });
});