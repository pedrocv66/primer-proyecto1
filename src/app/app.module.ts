import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

//firebase
import {enviroment} from 'src/enviroments/enviroment';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule, AngularFireStoreModle} from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
