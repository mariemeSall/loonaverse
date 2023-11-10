import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './templates/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './templates/footer/footer.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyButtonModule } from "@angular/material/legacy-button";
import { MatLegacyListModule } from "@angular/material/legacy-list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatLegacyButtonModule,
    MatLegacyListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
