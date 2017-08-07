import { SearchBoxComponent } from './shared/search-box';
import { SearchPipe } from './shared/pipe';
import { DataService } from './shared/data-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { MarketComponent } from './dashboard/market/market.component';
import { AddDataComponent } from './dashboard/add-data/add-data.component';
import { FilterPipe } from './filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AdminComponent,
    MarketComponent,
    AddDataComponent,
    SearchPipe,
    SearchBoxComponent,
    FilterPipe,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
