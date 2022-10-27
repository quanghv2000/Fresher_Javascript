export class ApiError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string, stack = "") {
    super();
    this.statusCode = statusCode;
    this.message = message;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
