import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutPlansRoutingModule } from './workout-plans-routing.module';
import { WorkoutPlansComponent } from './workout-plans.component';


@NgModule({
  declarations: [
    WorkoutPlansComponent
  ],
  imports: [
    CommonModule,
    WorkoutPlansRoutingModule
  ]
})
export class WorkoutPlansModule { }
