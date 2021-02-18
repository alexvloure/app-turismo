import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  alojamientos: string = 'https://tripfy-5f183-default-rtdb.europe-west1.firebasedatabase.app/alojamientos.json';

  constructor(public httpClient: HttpClient) {}

  public sendGetRequest(){
    return this.httpClient.get(this.alojamientos);
  }
}
