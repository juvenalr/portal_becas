import {Injectable} from "@angular/core";
import {FormArray} from "@angular/forms";
/**
 * Created by edgaguil on 20/08/2017.
 */

@Injectable()
export class ValidadorPersonalizado {
  static checkBoxRequerido(fa: FormArray) {
    let valid = false;

    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }
    return valid ? null : {
      checkBoxRequerido: true
    };
  }
}
