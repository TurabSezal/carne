/* eslint-disable prettier/prettier */
/**
 * This is the interface for the response that we get from the API. We can use this interface to define the response that we get from the API.
 * This will help us to avoid any errors in the future.
 */
export interface IApiResponse<T> {
  data: T;
  message: string;
}
