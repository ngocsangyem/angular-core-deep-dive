import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/modals/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	title: string;
	@Input() card: Card;
	@Input() cardIndex: number;
	@Output() cardSelected = new EventEmitter<Card>();
	constructor() {}

	ngOnInit(): void {}

	onCardViewed() {
		this.cardSelected.emit(this.card);
	}

	isImageVisible() {
		return this.card && this.card.thumnailUrl;
	}

	cardClasses() {
		// if (this.card.category === 'Beginner') {
		// 	// return 'is-beginner';
		// 	return ['is-beginner'];
		// }
		return {
			'is-beginner': this.card.category === 'Beginner',
		};
	}

	cardStyles() {
		return {
			'text-decoration': 'underline',
		};
	}
}
