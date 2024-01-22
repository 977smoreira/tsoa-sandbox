import { Controller, Get, Query, Route } from 'tsoa';
import { BadStatus, BadStatusRequest, Status } from './model';

@Route('/status')
export class MyStatusController extends Controller {
  @Get('/')
  public getMyStatus(@Query() status: Status): string {
    return status;
  }

  /*
    Generate routes error.
    GenerateMetadataError: @Query('status') Can't support 'refAlias' type.
  */
  @Get('/bad')
  public getMyBadStatus(@Query() status: BadStatus): string {
    return status;
  }

  /*
    There was a problem resolving type of 'Uppercase<BadStatus>'.
    There was a problem resolving type of 'BadStatusRequest'.
    Generate routes error.
    GenerateMetadataError: Unknown type: IntrinsicKeyword
  */
  @Get('/uppercase-bad')
  public getMyBadStatusMixedCase(@Query() status: BadStatusRequest): string {
    return status;
  }
}
