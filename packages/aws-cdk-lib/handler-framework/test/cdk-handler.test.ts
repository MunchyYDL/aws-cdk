import * as path from 'path';
import { Runtime } from '../../aws-lambda';
import { CdkHandler } from '../lib/cdk-handler';

describe('code from asset', () => {
  test('correctly sets compatibleRuntimes property', () => {
    // GIVEN
    const compatibleRuntimes = [Runtime.NODEJS_16_X, Runtime.NODEJS_18_X];

    // WHEN
    const handler = CdkHandler.fromAsset(path.join(__dirname, 'test-handler'), {
      entrypoint: 'index.handler',
      compatibleRuntimes,
    });

    // THEN
    expect(handler.compatibleRuntimes).toEqual(compatibleRuntimes);
  });

  test('correctly sets entrypoint property', () => {
    // GIVEN
    const compatibleRuntimes = [Runtime.NODEJS_16_X, Runtime.NODEJS_18_X];

    // WHEN
    const handler = CdkHandler.fromAsset(path.join(__dirname, 'test-handler'), {
      entrypoint: 'index.handler',
      compatibleRuntimes,
    });

    // THEN
    expect(handler.entrypoint).toEqual('index.handler');
  });
});
