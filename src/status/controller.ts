import { Controller, Get, Query, Route } from 'tsoa';
import { BadStatus, BadStatusRequest, Status } from './model';

@Route('/mystatus')
export class MyStatusController extends Controller {
  @Get('/')
  public getMyStatus(@Query() mystatus: Status): string {
    return mystatus;
  }

  /*
    Generate routes error.
    GenerateMetadataError: Maximum call stack size exceeded 
  */
  @Get('/bad')
  public getMyBadStatus(@Query() mystatus1: BadStatus): string {
    return mystatus1;
  }

  /*
    There was a problem resolving type of 'Uppercase<BadStatus>'.
    There was a problem resolving type of 'BadStatusRequest'.
    Generate routes error.
    GenerateMetadataError: Unknown type: IntrinsicKeyword
  */
  @Get('/uppercase-bad')
  public getMyBadStatusMixedCase(@Query() mystatus2: BadStatusRequest): string {
    return mystatus2;
  }
}
