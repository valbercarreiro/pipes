import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FitroArrayPipe } from './fitro-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FitroArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
