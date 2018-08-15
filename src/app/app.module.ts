import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { DoActionComponent } from './do-action/do-action.component';
import { PosterComponent } from './poster/poster.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WallpaperComponent,
    DoActionComponent,
    PosterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
