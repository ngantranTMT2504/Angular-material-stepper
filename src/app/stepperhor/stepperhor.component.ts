import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepperhor',
  templateUrl: './stepperhor.component.html',
  styleUrls: ['./stepperhor.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperhorComponent implements OnInit {
  formName!: FormGroup;
  formLastName!: FormGroup;
  formFirstName!: FormGroup;
  formMajor!: FormGroup;
  formDog!:FormGroup;
  haveADog!: FormGroup;
  nameDog!: FormGroup
  
  informationForm!: FormGroup;
  
  completed: boolean = false;
  state?: string;
  isLinear = true;

  constructor(private form: FormBuilder) {
    this.formFirstName = new FormGroup({
      firstName: new FormControl(null, Validators.required)
    });
    this.formLastName = new FormGroup({
      lastName: new FormControl(null, Validators.required)
    })
    this.formName = new FormGroup({
      formFirstName: this.formFirstName,
      formLastName: this.formLastName
    });
    this.formMajor = new FormGroup({
      major : new FormControl(null, Validators.required)
    })
    this.formDog = new FormGroup({
      haveADog: new FormControl(null, Validators.required),
      nameDog: new FormControl('')
    })
    this.informationForm = new FormGroup({
      formName: this.formName,
      formMajor : this.formMajor,
      formDog : this.formDog
    });

    this.formDog.get('haveADog')?.valueChanges.subscribe(value => {
      console.log(value);
   
      if(value === 'yes'){
        this.formDog.get('nameDog')?.setValidators([Validators.required]);
        this.formDog.get('nameDog')?.updateValueAndValidity()
      } else{
        this.formDog.get('nameDog')?.clearValidators();
        this.formDog.get('nameDog')?.updateValueAndValidity()
      } }) ;
  }
  ngOnInit(): void {
    // this.formName = this.form.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required]
    // })
    // this.formMajor = this.form.group({
    //   major: ['', Validators.required]
    // })
  }
  done() {
    this.completed = true;
    this.state = 'done';
    console.log(this.formName.value);
    console.log(this.formMajor.value);
    console.log(this.formDog.value);
  }

  change(){
    let valueButton : string ='';
    this.formDog.get('haveADog')?.valueChanges.subscribe(value => {
      console.log(value);
    }) ;
      if(valueButton === 'yes'){
        this.formDog.get('nameDog')?.setValidators([Validators.required]);
      } else{
        this.formDog.get('nameDog')?.clearValidators();
        this.formDog.get('nameDog')?.updateValueAndValidity()
      }
  }
}
