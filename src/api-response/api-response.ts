/* eslint-disable prettier/prettier */
import { IApiResponse } from './api-response.interface';
import { ApiResponseMessage } from './api-response.enum';
import { HttpStatus, HttpException } from '@nestjs/common';

/**
 * This is the class that we will use to create the response that we get from the API.
 *
 * If you want to create a new response, we can create a new class that extends this class.
 */
export class ApiResponse<T> extends HttpException implements IApiResponse<T> {
  data: T;
  message: string;

  constructor(data: T, message: string, status: number) {
    super({ data, message }, status);
    this.data = data;
    this.message = message;
  }
}

/**
 * ! Success Responses (2xx) !
 * This is the class that we will use to create the response that we get from the API when the request is successful.
 */
export class SuccessResponse<T> extends ApiResponse<T> {
  constructor(data: T, message: string = ApiResponseMessage.SUCCESS) {
    super(data, message, HttpStatus.OK);
    // Hide the properties from the response object
    Object.defineProperty(this, 'name', {
      enumerable: false,
      configurable: true,
      writable: false,
      value: '',
    });

    Object.defineProperty(this, 'response', {
      enumerable: false,
      configurable: true,
      writable: false,
      value: '',
    });
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is successful and a new resource is created.
 */
export class CreatedResponse<T> extends ApiResponse<T> {
  constructor(data: T, message: string = ApiResponseMessage.CREATED) {
    super(data, message, HttpStatus.CREATED);
    // Hide the properties from the response object
    Object.defineProperty(this, 'name', {
      enumerable: false,
      configurable: true,
      writable: false,
      value: '',
    });

    Object.defineProperty(this, 'response', {
      enumerable: false,
      configurable: true,
      writable: false,
      value: '',
    });
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is successful and the resource is updated.
 */
export class NoContentResponse extends ApiResponse<null> {
  constructor() {
    super(null, '', HttpStatus.NO_CONTENT);
    throw this;
  }
}

/**
 * ! Client Error Responses (4xx) !
 */

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful.
 */
export class ErrorResponse<T> extends ApiResponse<T> {
  constructor(data: T, message: string = ApiResponseMessage.BAD_REQUEST) {
    super(data, message, HttpStatus.BAD_REQUEST);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the user is not authorized.
 */
export class UnauthorizedResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.UNAUTHORIZED) {
    super(null, message, HttpStatus.UNAUTHORIZED);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the user is not authorized
 */
export class ForbiddenResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.FORBIDDEN) {
    super(null, message, HttpStatus.FORBIDDEN);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the resource is not found.
 */
export class NotFoundResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.NOT_FOUND) {
    super(null, message, HttpStatus.NOT_FOUND);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the resource is not found.
 */
export class NotAcceptableResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.NOT_ACCEPTABLE) {
    super(null, message, HttpStatus.NOT_ACCEPTABLE);
    throw this;
  }
}

/**
 * ! Server Error Responses (5xx) !
 */

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the server is not available.
 */
export class InternalServerErrorResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.INTERNAL_SERVER_ERROR) {
    super(null, message, HttpStatus.INTERNAL_SERVER_ERROR);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the server is not available.
 */
export class ServiceUnavailableResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.SERVICE_UNAVAILABLE) {
    super(null, message, HttpStatus.SERVICE_UNAVAILABLE);
    throw this;
  }
}

/**
 * This is the class that we will use to create the response that we get from the API when the request is not successful because the server is not available.
 */
export class GatewayTimeoutResponse extends ApiResponse<null> {
  constructor(message: string = ApiResponseMessage.GATEWAY_TIMEOUT) {
    super(null, message, HttpStatus.GATEWAY_TIMEOUT);
    throw this;
  }
}
