import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spin'
})
export class SpinPipe implements PipeTransform {

  transform(value: string): string {
    const min = 220; // Minimum RGB value
    const range = 35; // Range of variation
    const red = min + Math.floor(Math.random() * range);
    const green = min + Math.floor(Math.random() * range);
    const blue = min + Math.floor(Math.random() * range);

    if (value.startsWith('#')) {
      return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    } else if (value.startsWith('rgb(')) {
      return `rgb(${red}, ${green}, ${blue})`;
    } else if (value.startsWith('rgba(')) {
      const alpha = Math.random().toFixed(2);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    } else {
      return `rgb(${red}, ${green}, ${blue})`;
    }
  }

}
