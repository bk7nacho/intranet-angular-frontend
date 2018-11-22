import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private _url = '/assets/data/empleados.json';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<empleadoInterface[]> {
    return this.http.get<empleadoInterface[]>(this._url);
  }

}

export interface empleadoInterface {
  id: number;
  name: string;
  age: number;
}
