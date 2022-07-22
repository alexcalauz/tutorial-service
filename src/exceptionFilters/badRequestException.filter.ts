import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";

// Not Used for now
@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const body = exception.getResponse();

    (response as any).status(418)
      // you can manipulate the response here
      .json({
        status,
        body,
      });
  }
}