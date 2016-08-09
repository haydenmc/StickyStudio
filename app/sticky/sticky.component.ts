import { Component, HostBinding, HostListener } from '@angular/core';
import { StickyModel } from '../models/sticky.model';

@Component({
    selector: 'my-sticky',
    templateUrl: './sticky.component.html',
    styleUrls: ['./sticky.component.scss']
})
export class StickyComponent {
    sticky: StickyModel;
    @HostBinding('style.left.px')
    posX: number = 0;
    @HostBinding('style.top.px')
    posY: number = 0;

    private isMouseDown: boolean = false;
    private originX: number = 0;
    private originY: number = 0;

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent) {
        this.isMouseDown = true;
        this.originX = this.posX + event.clientX;
        this.originY = this.posY + event.clientY;
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (this.isMouseDown) {
            this.posX = event.clientX - this.originX;
            this.posY = event.clientY - this.originY; 
        }
    }

    @HostListener('mouseup')
    onMouseUp() {
        this.isMouseDown = false;
    }
}