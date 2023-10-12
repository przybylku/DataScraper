import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { scrapperDTO } from './types/scrapper.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public async getInfoAbout(@Body() body: scrapperDTO, @Res() res : Response){
    const data = await this.appService.getInfoAbout(body)
    res.send(data)
  }
}
