/**
 * Created by edgaguil on 2/09/2017.
 */
import {Component, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from "./jquery.service";

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  // styles: ['.modal-body { height : 250px; overflow-y: scroll;  width : 600px; }'  ]
})

export class SimpleModalComponent{

  @Input() title : string;
  @Input() elementId: string;
  //@ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }
}
