/**
 * Created by edgaguil on 26/10/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'siNo'})
export class SiNoPipe implements PipeTransform {
  transform(value) {
    return value ? 'Si' : 'No';
  }
}
