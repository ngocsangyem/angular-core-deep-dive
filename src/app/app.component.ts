import { Component, ViewChild, ElementRef } from '@angular/core';
import { CARDS } from 'src/data';
import { Card } from './modals/card';
import { CardComponent } from './components/card/card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	cards = CARDS;

	@ViewChild(CardComponent, { read: ElementRef })
	card: CardComponent;

	onCardSelected(card: Card) {
		console.log('card', this.card);
	}
}
