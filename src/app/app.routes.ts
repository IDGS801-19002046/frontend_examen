import { Routes } from "@angular/router";
import { IndexComponent } from "./store/index/index.component";
import { GaleryComponent } from "./store/galery/galery.component";
import { ContactComponent } from "./store/contact/contact.component";


export const routes: Routes = [
    {path: 'Inicio', component: IndexComponent},
    {path: 'Galeria', component: GaleryComponent},
    {path: 'Contacto', component: ContactComponent},
    {path: '', redirectTo: '/Inicio', pathMatch: 'full'}
];
