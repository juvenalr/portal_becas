/**
 * Created by edgaguil on 2/09/2017.
 */
import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core'
import { JQ_TOKEN} from './jquery.service'

@Directive({
  selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
  private el : HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref : ElementRef, @Inject(JQ_TOKEN) private $ : any ){
    this.el = ref.nativeElement;
  }

  ngOnInit(){
    this.el.addEventListener('click', ev =>{
      //this.$('#simple-modal').modal({});
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
