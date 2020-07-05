import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardImageComponent } from './components/card/card-image/card-image.component';

@NgModule({
	declarations: [AppComponent, CardComponent, CardImageComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
