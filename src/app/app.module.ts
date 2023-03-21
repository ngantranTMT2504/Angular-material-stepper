import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material/material.module';
import { StepperhorComponent } from './stepperhor/stepperhor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepFieldsComponent } from './step-fields/step-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperhorComponent,
    StepFieldsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
