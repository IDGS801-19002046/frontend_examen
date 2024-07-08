import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApistoreService {

  private _endpoint: string = environment.endPoint;
  private apiUrl: string = this._endpoint + "Productos/";


  constructor(private _http: HttpClient) { }
  //Metodo para invocar al endpoint de listaTareas
  getList(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.apiUrl}ListProductos`);
  }
}
