import { Directive, EventEmitter, HostBinding, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; //the class of this component
    

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}