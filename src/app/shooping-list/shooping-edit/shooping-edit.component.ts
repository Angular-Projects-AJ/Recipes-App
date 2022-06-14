import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
    
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit(): void {
    }
    onAddItem(){
      const ingredientName = this.nameInputRef.nativeElement.value;
      const ingredientAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingredientName, ingredientAmount);
      this.ingredientAdded.emit(newIngredient); // This is like a return to the ingredient added.
    }
}
