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
	ContentChildren,
	AfterContentInit,
	QueryList,
} from '@angular/core';
import { Card } from 'src/app/modals/card';
import { CardImageComponent } from './card-image/card-image.component';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit, AfterContentInit {
	title: string;
	@Input() card: Card;
	@Input() cardIndex: number;
	@Output() cardSelected = new EventEmitter<Card>();

	@ViewChild('cardContainer')
	container: ElementRef;

	@ContentChildren(CardImageComponent, { read: ElementRef })
	images: QueryList<CardImageComponent>;
	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		// console.log(this.container);
	}

	ngAfterContentInit() {
		// console.log(this.images);
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
