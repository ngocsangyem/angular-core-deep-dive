import {
	Component,
	ViewChild,
	ElementRef,
	ViewChildren,
	QueryList,
	AfterViewInit,
} from '@angular/core';
import { CARDS } from 'src/data';
import { Card } from './modals/card';
import { CardComponent } from './components/card/card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	cards = CARDS;

	@ViewChildren(CardComponent)
	cardList: QueryList<CardComponent>;

	ngAfterViewInit() {
		console.log(this.cardList);
	}

	onCardSelected(card: Card) {
		// console.log(this.card);
	}
}
