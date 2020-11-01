import { Response, Request, NextFunction } from "express";

interface Error {
  status?: number;
  message?: string;
  stack?: string;
  messageFormat?: any;
  stringValue?: string;
  kind?: string;
  value?: string;
  path?: string;
  name?: string;
  code?: number;
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route not found. => ${req.originalUrl}`);
  error.name = "RouteError";

  res.status(404);
  next(error);
};

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const response = {
    sucess: false,
    message: err.message,
  };
  const optional = {
    stack: err.stack,
    messageFormat: err.messageFormat,
    stringValue: err.stringValue,
    kind: err.kind,
    value: err.value,
    path: err.path,
    name: err.name,
    code: err.code,
  };

  res.status(statusCode).json(process.env.NODE_ENV === "production" ? response : { ...response, ...optional });

  // // Mongoose duplicate key - MongoError - 11000
  // if (err.code === 11000) {
  // 	const message = 'Duplicate field value entered.';
  // 	error = new ErrorResponse(message, 400);
  // }

  // // Mongoose validation error - ValidationError
  // if (err.name === 'ValidationError') {
  // 	const message = Object.values(err.errors).map((value) => value.message);
  // 	error = new ErrorResponse(message, 400);
  // }
};
