import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const REGION = 'us-east-1';

// Create an Amazon DynaomDB service client object.
const dynamoClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: import.meta.env.AWS_ACCESS_KEY || 'AKIA2EP4R3TZGYKBLZRE',
    secretAccessKey: import.meta.env.AWS_ACCESS_KEY || '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',
  },
});

export { dynamoClient };
