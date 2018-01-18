import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule],
  exports: [MatButtonModule,MatToolbarModule,MatInputModule,MatCardModule],
})
export class MaterialModule { }