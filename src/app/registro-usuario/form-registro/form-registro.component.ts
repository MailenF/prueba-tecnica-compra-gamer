import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit{
  formulario: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup<any>([]);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{7,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      validarPassword: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  enviarFormulario(): void {
    if (this.formulario.valid && this.formulario.value.password === this.formulario.value.validarPassword) {
      this.usuariosService.registrarUsuario(this.formulario.value).then((value => {
        alert(value);
      }));
      this.router.navigate(['/inicio-sesion'])
    } else {
      alert('La contraseña y su validación no coinciden, intente nuevamente');
    }
  }

}
