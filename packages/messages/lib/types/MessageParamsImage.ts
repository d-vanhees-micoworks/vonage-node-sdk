import { MessageParams } from './MessageParams';
import { MessageImageType } from './MessageImageType';

/**
 * Represents the parameters for a message with an image attachment.
 */
export type MessageParamsImage = {
  /**
   * The image attachment content.
   */
  image: MessageImageType;
} & MessageParams;
