import { ScanCommand, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { dynamoClient } from './dynamoClient';

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export const fetchData = async () => {
  const command = new ScanCommand({
    TableName: 'Conversations',
    FilterExpression: '#aimodel = :aimodelA OR #aimodel = :aimodelB',
    ExpressionAttributeNames: {
      '#aimodel': 'aimodel',
    },
    ExpressionAttributeValues: {
      ':aimodelA': 'bedrock',
      ':aimodelB': 'vertexai',
    },
    ConsistentRead: true,
  });

  const data = await docClient.send(command);
  data.Items.sort((a, b) => {
    return new Date(a.inserted_timestamp) - new Date(b.inserted_timestamp);
  });
  console.log(data);
  return data;
};

export const triggerLambda = async () => {
  const data = await fetch('https://v7c7msn25e.execute-api.us-east-1.amazonaws.com/trigger-lambda');
  console.log(data);
  return data;
};
