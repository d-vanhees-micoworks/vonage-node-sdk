/**
 * Represents the response data for a media item.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type MediaItemResponse = {
  /**
   * The filename of the object as it was originally uploaded.
   */
  originalFileName: string;

  /**
   * The IETF MIME type of the file.
   */
  mimeType: string;

  /**
   * The ID of your Nexmo account. This is the same as your API key.
   */
  accountId: string;

  /**
   * An internal identifier of how the file is stored.
   */
  storeId: string;

  /**
   * The maximum number of times the file may be downloaded.
   */
  maxDownloadsAllowed: number;

  /**
   * The number of times the file has been downloaded.
   */
  timesDownloaded: number;

  /**
   * The size of the file in bytes.
   */
  mediaSize: number;

  /**
   * A timestamp for the time that the file was created.
   */
  timeCreated: string;

  /**
   * A timestamp for the time that the file was last modified.
   */
  timeLastUpdated: string;

  /**
   * Whether the item is available for download without authentication.
   */
  public: boolean;

  /**
   * A user-set string containing metadata about the media file.
   */
  metadataPrimary: string;

  /**
   * A user-set string containing further metadata about the media file.
   */
  metadataSecondary: string;

  /**
   * A UUID representing the object.
   */
  id: string;

  /**
   * An identifier for the content. This will change if the content of the file has been changed
   * (i.e., if you upload a new version of the file). For more information, see Wikipedia: HTTP ETag.
   */
  etag: string;
};
