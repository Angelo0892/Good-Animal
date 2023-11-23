import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AgregarAnimalComponent } from './agregar-animal/agregar-animal.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { NovedadAnimalComponent } from './novedad-animal/novedad-animal.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoAnimalComponent } from './catalogo-animal/catalogo-animal.component';
import { NoticiaAnimalComponent } from './noticia-animal/noticia-animal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnimalComponent } from './animal/animal.component';

const appRoutes:Routes=[
  {path:'', component:IndexComponent},
  {path:'catalogo', component:CatalogoAnimalComponent},
  {path:'datosAnimal/:id', component:AnimalComponent},
  {path:'noticias', component:NoticiaAnimalComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'agregar_animal', component:AgregarAnimalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AgregarAnimalComponent,
    NovedadAnimalComponent,
    FooterComponent,
    NavBarComponent,
    IndexComponent,
    CatalogoAnimalComponent,
    NoticiaAnimalComponent,
    ContactoComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),

    AngularFireModule.initializeApp({"apiKey": "AIzaSyB3UnXfZlYmTHpD26pSYgCMjewS9gv-DSc",
    "authDomain": "goodanimal-808a3.firebaseapp.com",
    "databaseURL": "https://goodanimal-808a3-default-rtdb.firebaseio.com",
    "projectId": "goodanimal-808a3",
    "storageBucket": "goodanimal-808a3.appspot.com",
    "messagingSenderId": "959609258843",
    "appId": "1:959609258843:web:fc89a2a74217b1afd7d07e",
    "measurementId": "G-2GP0CY46NB"}),
    
    provideFirebaseApp(() => initializeApp({"apiKey": "AIzaSyB3UnXfZlYmTHpD26pSYgCMjewS9gv-DSc",
    "authDomain": "goodanimal-808a3.firebaseapp.com",
    "databaseURL": "https://goodanimal-808a3-default-rtdb.firebaseio.com",
    "projectId": "goodanimal-808a3",
    "storageBucket": "goodanimal-808a3.appspot.com",
    "messagingSenderId": "959609258843",
    "appId": "1:959609258843:web:fc89a2a74217b1afd7d07e",
    "measurementId": "G-2GP0CY46NB"})),

    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
