import { Component } from '@angular/core';
import { IProduct } from '../interfaces/Product';
import { ApistoreService } from '../apistore.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  email: string = 'ceciliam.rodriguezt@gmail.com';
  listaProductos: IProduct[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  constructor(private _apistoreService: ApistoreService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this._apistoreService.getList().subscribe({
      next: (data) =>  {
        this.listaProductos = data;
        this.isResultLoaded = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
