import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { TableauComponent } from './tableau/tableau.component';
import { HttpClientModule} from "@angular/common/http";
import { CaracteristiqueService } from './services/caracteristique.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    ],
  providers: [CaracteristiqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
