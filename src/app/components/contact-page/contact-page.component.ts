import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-contact-page',
  styleUrl: './contact-page.component.css',
  templateUrl: './contact-page.component.html',
})
export class ContactPage {
  protected submitted = false;

  protected readonly contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(15)],
    }),
  });

  protected sendMessage(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.submitted = false;
      return;
    }

    this.submitted = true;
    this.contactForm.reset();
  }
}
