import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  items = ['gabriel', 'gabriela', 'gabrielle']
  addItem() {
    this.items.push(this.title)
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
