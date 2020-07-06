import {
	Directive,
	HostBinding,
	Input,
	HostListener,
	Output,
	EventEmitter,
} from '@angular/core';

@Directive({
	selector: '[appHighlighted]',
})
export class HighlightedDirective {
	@Input('appHighlighted') isHighlighted = false;
	@Output() toggleHighlight = new EventEmitter();
	// @HostBinding('className')
	// get cssClases(): string {
	// 	return 'is-highlight';
	// }
	@HostBinding('class.is-highlight')
	get cssClases(): boolean {
		return this.isHighlighted;
	}

	@HostListener('mouseover', ['$event'])
	mouseOver($event: Event) {
		this.isHighlighted = true;
		this.toggleHighlight.emit(this.isHighlighted);
	}
	@HostListener('mouseleave')
	mouseLeave() {
		this.isHighlighted = false;
		this.toggleHighlight.emit(this.isHighlighted);
	}
	constructor() {
		console.log('Highlighted Directive created');
	}
}
