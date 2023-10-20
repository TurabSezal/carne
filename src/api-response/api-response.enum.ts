/* eslint-disable prettier/prettier */
/**
 * Enum for API response messages
 */
export enum ApiResponseMessage {
  SUCCESS = 'Success',
  CREATED = 'Created',
  NO_CONTENT = 'No Content',
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  NOT_ACCEPTABLE = 'Not Acceptable',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  GATEWAY_TIMEOUT = 'Gateway Timeout',
}
