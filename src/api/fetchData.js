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
