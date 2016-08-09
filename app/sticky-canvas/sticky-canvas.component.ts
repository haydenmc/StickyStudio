import { Component, HostBinding, HostListener } from '@angular/core';
import { StickyComponent } from '../sticky/sticky.component';
import { StickyModel } from '../models/sticky.model';

@Component({
    selector: 'my-sticky-canvas',
    templateUrl: './sticky-canvas.component.html',
    styleUrls: ['./sticky-canvas.component.scss'],
    directives: [ StickyComponent ]
})
export class StickyCanvasComponent {
    stickies: StickyModel[];
}