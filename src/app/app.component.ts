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

	@ViewChild('card1')
	card1: CardComponent;
	@ViewChild('card2')
	card2: CardComponent;

	onCardSelected(card: Card) {
		console.log('card 1', this.card1);
		console.log('card 2', this.card2);
	}
}
