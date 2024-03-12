import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCenovnikComponent } from './generic-cenovnik.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [GenericCenovnikComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
        {path: 'generic', component: GenericCenovnikComponent}
        ])
    ]
})
export class GenericCenovnikModule{
    
}
