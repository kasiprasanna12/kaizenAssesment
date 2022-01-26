import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryComponent } from './entry/entry.component';
import { AppRoutingModule } from './app-routing.module';
import { SelectBoxComponent } from './pages/select-box/select-box.component';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { TableComponent } from './pages/table/table.component';
import { CustomerService } from './pages/table/customerservice';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { DataFormatPipe } from './data-format.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    SelectBoxComponent,
    TableComponent,
    DataFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    TableModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [CustomerService]
})
export class AppModule { }
