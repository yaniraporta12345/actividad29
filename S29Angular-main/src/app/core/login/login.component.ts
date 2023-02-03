import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { UsuarioserviceService } from 'src/app/servicios/usuarioservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hidePass = true;

  constructor(private authService: AutenticacionService, private router: Router, private servicio: UsuarioserviceService) { }

  listado: Usuario[] = [];
  listadoCopia = [...this.listado];
 
  ngOnInit(){ 
    this.servicio.getUsuarios().subscribe({
      next: (UserAll: Usuario[]) => 
        {
          this.listado = UserAll,
          console.log(this.listado);
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }


  routeRedirect = '';

  nom = '';
  pass = '';

  login() {

    let usuarioConUsername = this.listado.filter((x)=> x.username.toLowerCase() == this.nom.toLowerCase()); 

    let usuarioEmail = usuarioConUsername[0].email.toLowerCase();


    console.log(usuarioConUsername);

    if(usuarioConUsername.length>0 && this.pass.toLowerCase() == usuarioEmail){
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      this.authService.urlUsuarioIntentaAcceder = '';
      this.router.navigate(['/usuarios']);
    }
    else{
      alert('datos de acceso incorrectos')
    }
  }  

}
