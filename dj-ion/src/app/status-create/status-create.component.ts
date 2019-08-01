import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {
  content: FormControl;
  statusForm: FormGroup;
  // status = {content: ''};
  constructor() { }

  ngOnInit() {
    this.content = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(280)
    ]);
    this.statusForm = new FormGroup({
      content: this.content
    });
  }

  handleSubmit(event: any, statusDir: NgForm, statusForm: FormGroup) {
    event.preventDefault();
    if (statusDir.submitted) {
      // interact with the server
      console.log(statusForm.value);

      statusDir.resetForm({content: 'Some new content'});
    }
  }

  // get content() {
  //   return this.statusForm.get('content');
  // }

}
