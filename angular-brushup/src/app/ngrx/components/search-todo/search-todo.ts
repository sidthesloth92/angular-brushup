import { Component, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-todo',
  imports: [FormsModule],
  templateUrl: './search-todo.html',
  styleUrl: './search-todo.scss'
})
export class SearchTodo implements OnInit {
  placeholder = input<string>('');
  initialValue = input<string>('');

  protected searchTerm = signal<string>('');

  ngOnInit() {
    if (this.initialValue()) {
      this.searchTerm.set(this.initialValue());
    } 
  }

  searchChange = output<string>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Search value changed to:', target.value);
    this.searchTerm.set(target.value);
    this.searchChange.emit(target.value);
  }
}
