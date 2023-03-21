import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-fields',
  templateUrl: './step-fields.component.html',
  styleUrls: ['./step-fields.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepFieldsComponent implements OnInit {
  formName!: FormGroup;
  formMajor!: FormGroup
  completed: boolean = false;
  state?: string ;
  isLinear = true;

  constructor(private form : FormBuilder) { }

  ngOnInit(): void {
    this.formName = this.form.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      middleName: [''],
    });

    this.formMajor = this.form.group({
      major: ['', [Validators.required]]
    })
  }

  done() {
    this.completed = true;
    this.state = 'done';
    console.log(this.formName.value);
    console.log(this.formMajor.value);
  }

}
