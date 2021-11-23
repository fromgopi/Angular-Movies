import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular-Movies';

	colorTheme = [
		{color: '#00897B', name: 'teal'},
		{color: '#E53935', name: 'red'},
		{color: '#43A047', name: 'green'}
	];

	// Selected color by default teal
	selectedColor = '#00897B';

	private isBrowser = isPlatformBrowser(this.platformId);
	constructor(
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: any
	) {};

	ngOnInIt() {
		this.router.events.subscribe((evt) => {
			if(!(evt instanceof NavigationEnd)) {
				return;
			}
			if(this.isBrowser) {
				window.scrollTo(0, 0);
			}
		});
	}

	changeColorTheme(color: string): void {
		this.selectedColor = color;
	}

	checkSelectedTheme(color: string) {
		return this.selectedColor === color;
	}
}
