import { Component, forwardRef, input, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInput),
      multi: true,
    },
  ],
})
export class SearchInput implements ControlValueAccessor {
  placeholder = input('')

  // internal value
  value = '';
  disabled = false;

  // callbacks provided by forms API
  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  // ControlValueAccessor API
  writeValue(obj: any): void {
    this.value = obj ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = !!isDisabled;
  }

  // UI handlers
  onInput(value: string) {
    this.value = value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }
}
