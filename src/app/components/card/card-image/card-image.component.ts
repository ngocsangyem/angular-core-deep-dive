import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/modals/card';

@Component({
	selector: 'app-card-image',
	templateUrl: './card-image.component.html',
	styleUrls: ['./card-image.component.scss'],
})
export class CardImageComponent implements OnInit {
	@Input() card: Card;
	constructor() {}

	ngOnInit(): void {}

	isImageVisible() {
		return this.card;
	}
}
