import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import {Button} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [
    StepperModule,
    Button,
    CardModule,
    DividerModule,
  ],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent {

}
