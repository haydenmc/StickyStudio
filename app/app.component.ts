import { Component } from '@angular/core';
import { StickyModel } from './models/sticky.model';
import { StickyCanvasComponent } from './sticky-canvas/sticky-canvas.component';
import { StickyComponent } from './sticky/sticky.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    directives: [ StickyCanvasComponent ]
})
export class AppComponent {
    title = 'Sticky Studio';
    stickies: StickyModel[] = [
        { content: "Hello!" }
    ];
}