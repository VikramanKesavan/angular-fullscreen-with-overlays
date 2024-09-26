import { CommonModule } from '@angular/common';

import {
  FullscreenOverlayContainer,
  OverlayContainer,
  OverlayModule,
} from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './src/app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    OverlayModule,
    MatButtonModule,
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
  bootstrap: [App],
})
export class MainModule {}
