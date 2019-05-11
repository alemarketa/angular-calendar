/** Returns weather for next five days
 *  For authorized request Add API KEY into
 * https://api.openweathermap.org/data/2.5/forecast?q=Barcelona,es&units=metric&APPID=<HERE YOU API KEY>
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForecast() {
    const observable =
      this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=Barcelona,es&units=metric&APPID=`);
    return observable;
  }

}
