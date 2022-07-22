import { Controller, Get, Param, Response, Post, Body, Put, Delete, Query, Request, HttpCode, ParseArrayPipe } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { CreateTutorialDto, UpdateTutorialDto, BulkUpdateTutorialDto, DeleteTutorialDto } from 'src/dto/tutorial.dto';

@Controller('tutorial')
export class TutorialController {

  constructor(private readonly tutorialService: TutorialService) { }

  @Get()
  get(@Query() query, @Response() res, @Request() req): void {
    this.tutorialService.get(query).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Get(':id')
  getById(@Param('id') id: number, @Response() res): void {
    this.tutorialService.getById(id).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Post()
  @HttpCode(200)
  create(@Body() dto: CreateTutorialDto, @Response() res): void {
    res.set('Content-Type', 'application/json');
    this.tutorialService.create(dto).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Post('/bulkInsert')
  bulkInsert(@Body(new ParseArrayPipe({ items: CreateTutorialDto })) tutorials: CreateTutorialDto[], @Response() res): void {
    res.set('Content-Type', 'application/json');
    this.tutorialService.bulkInsert(tutorials).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateTutorialDto, @Response() res): void {
    res.set('Content-Type', 'application/json');
    this.tutorialService.update(id, body).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Put()
  bulkUpdate(@Body(new ParseArrayPipe({ items: BulkUpdateTutorialDto })) body: BulkUpdateTutorialDto[], @Response() res): void {
    res.set('Content-Type', 'application/json');
    this.tutorialService.bulkUpdate(body).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

  @Delete()
  delete(@Body() body: DeleteTutorialDto, @Response() res): void {
    res.set('Content-Type', 'application/json');
    this.tutorialService.delete(body).subscribe(data => {
      return res.json(data);
    }, err => {
      return res.status(err.status).json(err.body);
    })
  }

}
