import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') ddStatus = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') onclick(eventData: Event) {
    this.ddStatus = !this.ddStatus;
  }
}
