import {Component, OnInit} from '@angular/core';
import {ServicioMenu} from "./services/menu.servicio";
import {AutenticacionService} from "./services/autenticacion.service";
import {CookieService} from "angular2-cookie/services";
import { GlobalEventsManager } from "./GlobalEventsManager";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'app1111';
  menus;
  perfil : string;

  constructor(private globalEventsManager: GlobalEventsManager, private servicioMenu: ServicioMenu
    , private autenticacionService: AutenticacionService) {

      this.globalEventsManager.showNavBar.subscribe(() => {
        this.actualizarMenu();
    });
  }


  ngOnInit() {
    this.actualizarMenu();
  }

  cerrarSesion()
  {
    this.autenticacionService.cerrarSesion();
    this.actualizarMenu();
  }

  actualizarMenu(){
    this.perfil = this.autenticacionService.obtenerCookie('perfil');
    this.menus = this.servicioMenu.obtenerMenu(this.perfil);
  }
}
