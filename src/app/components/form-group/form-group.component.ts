import { Component, inject, OnInit } from '@angular/core';
import { ButtonExampleComponent } from '../../share/componentsUI/button-example/button-example.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Numeros } from '../../core/models/numeros.model';
import { ComponentsShareModule } from '../../share/componentsUI/components-share.module';
import { ProductsService } from '../productos/services/products.service';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    ComponentsShareModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent implements OnInit {

  savenewbutton:string = 'save--NgModel--entrada';
  tiemporeal:number =0;

  fb = inject(FormBuilder);

  contactForm!: FormGroup;

  numeros: Numeros = {
    uno: 'uno',
    dos: 'dos',
    tres: 'tres',
    cuatro: 'cuatro',
  };

  constructor() {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      city: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required, Validators.minLength(3)]],
      zip: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  onSubmit(): void {
    console.log('Form->' + JSON.stringify(this.contactForm.value));
  }

  public isValidField(name: string): boolean {
    const fieldName = this.contactForm.get(name);
    return fieldName!.invalid && fieldName!.touched;
  }

  onSetDefault(): void {
    const contact = {
      firstName: 'jesus',
      userName: 'jesus@hotmmail.com',
      city: 'Montrrey',
      state: 'Mexico',
      zip: '28001',
    };

    this.contactForm.setValue(contact);
  }

  onPatchValue(): void {
    this.contactForm.patchValue({ city: 'DF' });
  }

  onSetValue(): void {
    //error
    this.contactForm.setValue({ firstName: 'david' });
  }

  onReset(): void {
    this.contactForm.reset();
  }

  public testsave(event: any) {
    if (event === 'save1') {
      console.log('prueba' + event);

      console.log('NgModel->' + this.numeros.uno);
      console.log('NgModel->' + this.numeros.dos);
      console.log('NgModel->' + this.numeros.tres);
      console.log('NgModel->' + this.numeros.cuatro);
    }
  }
}
