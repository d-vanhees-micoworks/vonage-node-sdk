import { SIPEndpoint } from '../../types';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the SIPEndpoint type',
);

/**
 * @deprecated This interface is deprecated. Please update to use the SIPEndpoint type
 */
export type SIPEndpointObject = SIPEndpoint;
