import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
	selector: '[appHighlighted]',
})
export class HighlightedDirective {
	@Input('appHighlighted') isHighlighted = false;
	// @HostBinding('className')
	// get cssClases(): string {
	// 	return 'is-highlight';
	// }
	@HostBinding('class.is-highlight')
	get cssClases(): boolean {
		return this.isHighlighted;
	}
	constructor() {
		console.log('Highlighted Directive created');
	}
}
