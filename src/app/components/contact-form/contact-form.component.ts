import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  ContactData!: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.ContactData = this.builder.group({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(ContactData: any) {
    console.log(ContactData);
  }
}
