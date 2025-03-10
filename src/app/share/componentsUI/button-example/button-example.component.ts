import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-example',
  imports: [],
  templateUrl: './button-example.component.html',
  styleUrl: './button-example.component.scss'
})
export class ButtonExampleComponent {

  @Input()
  public name: string = 'default';

  @Output()
  public saveInfo: EventEmitter<string> = new EventEmitter<string>();



  public save(){

     this.saveInfo.emit('save1');
  }

}
