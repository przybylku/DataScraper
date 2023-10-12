import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { scrapperDTO } from './types/scrapper.dto';
import axios from 'axios';

@Injectable()
export class AppService {
  async getInfoAbout(data: scrapperDTO){
    try{
      const web = axios.create({baseURL: data.url})

      const res = await web.get("/")
      return res.data;
    }catch(e){
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
