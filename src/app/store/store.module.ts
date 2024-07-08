import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { GaleryComponent } from './galery/galery.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { ApistoreService } from './apistore.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent,
    GaleryComponent,
    IndexComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ContactComponent,
    GaleryComponent,
    IndexComponent 
  ],
  providers:[
    ApistoreService
  ]

})
export class StoreModule { }
