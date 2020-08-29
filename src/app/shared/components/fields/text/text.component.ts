import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {

  @Input() public name: string;
  @Input() public title: string;
  @Input() public required: boolean = false;
  @Input() public placeholder: string;
  @Input() public value: string;
  @Input() public type: string = 'text';

  public wdacState: any;

  constructor() { }

  requiredClass() {
    if (this.required) {
      return "required";
    }
    return "not-required";
  }

  ngOnInit() {
    console.log(this.wdacState);
  }

}
