import { Controller, Get, Response, Query, Request, Param } from '@nestjs/common';
import { ElementCodeService } from './elementCode.service';

@Controller('elementCodes')
export class ElementCodeController {

  constructor(private readonly elementCodeService: ElementCodeService) { }

  @Get()
  get(@Query() query, @Response() res, @Request() req): void {
    this.elementCodeService.get(query).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Get(':pageCode')
  getByPageCode(@Param('pageCode') pageCode: string, @Response() res): void {
    this.elementCodeService.getByPageCode(pageCode).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

}
