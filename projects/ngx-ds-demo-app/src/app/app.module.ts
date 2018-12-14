import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import {OpenCvConfig} from 'ngx-document-scanner';
import {NgxDocumentScannerModule} from 'ngx-document-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RoutingModule } from './routing.module';
import { DemoComponent } from './components/demo/demo.component';

const OpenCvConfig: OpenCvConfig = {
  openCvDirPath: '/assets/opencv'
};

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxDocumentScannerModule.forRoot(OpenCvConfig),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }