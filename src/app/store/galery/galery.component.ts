import { Component } from '@angular/core';
import { IProduct } from '../interfaces/Product';
import { ApistoreService } from '../apistore.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {
  email: string = 'ceciliam.rodriguezt@gmail.com';
  listaProductos: IProduct[] = [];
  isResultLoades = false;
  isUpdateFormActive = false;
  searchValue: string = '';

  constructor(private _productService: ApistoreService){
    this.allProducts();
  }

  allProducts(){
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoades = true;
      }, error:(e) => {
        console.log(e);
      }
    });
  }

  filterProducts(word: string) {
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data.filter(producto => {
          return producto.nombre.toLowerCase().includes(word.toLowerCase());
        });
        this.isResultLoades = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  searchChange(event: any): void {
    if (event.target) {
      this.searchValue = event.target.value;
      this.filterProducts(this.searchValue);
    }
  }

  filterProductsCategory(event: any){
    this._productService.getList().subscribe({
      next: (data) => {
        this.listaProductos = data.filter(producto => {
          return producto.categoria.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.isResultLoades = true;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
