const expect = require('chai/register-expect');
const AWS = require('aws-sdk-mock');
const MockResponse = require('./dynamodbMockResponse');
const handler = require('../src/handlers');

process.env.hazard_table = 'myTable';
process.env.region = 'ap-southeast-2';
process.env.hazard_table = 'myTable';
describe('Get Hazard tests', () => {

    it('it should return a all Hazard', done => {
      AWS.mock('DynamoDB.DocumentClient', 'scan', function(params, callback) {
            callback(null, MockResponse.getHazardsByIdMockResponse());
          });
        
          done();
      });
      var event = {
        queryParameters: {
            companyId: 123
        }
      }
      expect(handler.getHazardsByCompanyId(event, null)).toBe(MockResponse.getHazardsByIdMockResponse());
});