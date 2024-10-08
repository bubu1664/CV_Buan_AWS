import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import des modules PrimeNG nécessaires
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CvPageComponent} from './cv-page/cv-page.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,  // Importer les modules PrimeNG ici
    CardModule,
    CvPageComponent
  ],
  exports: [
    CvPageComponent  // Exporter le composant pour qu'il soit utilisé ailleurs
  ]
})
export class CvModule { }
