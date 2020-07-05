import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
	ViewChild,
	ElementRef,
	ContentChild,
} from '@angular/core';
import { Card } from 'src/app/modals/card';
import { CardImageComponent } from './card-image/card-image.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
	title: string;
	@Input() card: Card;
	@Input() cardIndex: number;
	@Output() cardSelected = new EventEmitter<Card>();

	@ViewChild('cardContainer')
	container: ElementRef;

	@ContentChild(CardImageComponent)
	image: CardImageComponent;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		// console.log(this.container);
		console.log(this.image);
	}

	onCardViewed() {
		this.cardSelected.emit(this.card);
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
