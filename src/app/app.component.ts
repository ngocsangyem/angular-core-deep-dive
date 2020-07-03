import { Component } from '@angular/core';
import { CARDS } from 'src/data';
import { Card } from './modals/card';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	cards = CARDS;
	angularCard = CARDS[0];
	rxJsCard = CARDS[1];
	ngRxCard = CARDS[2];

	onCardSelected(card: Card) {
		console.log(card);
	}
}
