import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleSolicitanteComponent} from "./solicitante/detalle-solicitante/detalle-solicitante.component";
import {FormularioSolicitanteComponent} from "./solicitante/formulario-solicitante/formulario-solicitante.component";
import {ListadoSolicitanteComponent} from "./solicitante/listado-solicitante/listado-solicitante.component";
import {LoginBecasComponent} from "./login-becas/login-becas.component";
import {FormularioOferenteComponent} from "./oferente/formulario-oferente/formulario-oferente.component";
import {ConfirmacionCreacionOferenteComponent} from "./oferente/confirmacion-creacion-oferente/confirmacion-creacion-oferente.component";
import {BuscarOferenteComponent} from "./oferente/buscar-oferente/buscar-oferente.component";
import {CrearFormularioComponent} from "./formulario/crear-formulario/crear-formulario.component";
import {GestionarFormularioComponent} from "./formulario/gestionar-formulario/gestionar-formulario.component";
import {FormularioSolicitanteReactivoComponent} from "./solicitante/formulario-solicitante-reactivo/formulario-solicitante-reactivo.component";
import {FormularioAdministradorComponent} from "./administrador/formulario-administrador/formulario-administrador.component";
import {CreacionOfertaComponent} from "./oferente/creacion-oferta/creacion-oferta.component";
import {ConfirmacionCreacionSolicitanteComponent} from "./solicitante/confirmacion-creacion-solicitante/confirmacion-creacion-solicitante.component";
import {ConfirmacionCreacionAdministradorComponent} from "./administrador/confirmacion-creacion-administrador/confirmacion-creacion-administrador.component";
import {ConfirmacionCreacionOfertaComponent} from "./oferente/confirmacion-creacion-oferta/confirmacion-creacion-oferta.component";
import {ConsultarOferta} from "./oferta/consultar-oferta/consultar-oferta.component";
import {DetalleOfertaSolicitanteComponent} from "./oferta/detalle-oferta-solicitante/detalle-oferta-solicitante.component";
import {EtapasOfertaSolicitanteComponet} from "./oferta/etapas-oferta-solicitante/etapas-oferta-solicitante.component";
import {DetalleOfertaOferenteComponent} from "./oferta/detalle-oferta-oferente/detalle-oferta-oferente.component";
import {EtapasOfertaOferenteComponent} from "./oferta/etapas-oferta-oferente/etapas-oferta-oferente.component";
import {EditarEtapaOfertaComponent} from "./oferta/editar-etapa-oferta/editar-etapa-oferta.component";
import {FormularioEtapaComponent} from "./oferta/formulario-etapa/formulario-etapa.component";
import {ConsultarOfertaSolicitanteComponent} from "./oferta/consulta-oferta-solicitante/consulta-oferta-solicitante.component";
import {ConsultarOfertaOferenteComponent} from "./oferta/consulta-oferta-oferente/consulta-oferta-oferente.component";
import {AgregarEtapaOfertaComponent} from "./oferta/agregar-etapa-oferta/agregar-etapa-oferta.component";

const routes: Routes = [
  {
    path: 'login-becas',
    component : LoginBecasComponent
  },
  {
    path: 'listado-solicitante',
    component : ListadoSolicitanteComponent
  },
  {
    path: 'formulario-solicitante',
    component : FormularioSolicitanteComponent
  },
  {
    path: 'login',
    component : LoginBecasComponent
  },
  {
    path: 'oferente/formulario-oferente',
    component : FormularioOferenteComponent
  },
  {
    path: 'oferente/confirmacion-creacion-oferente',
    component : ConfirmacionCreacionOferenteComponent
  },

  {
    path: 'oferente/buscar-oferente',
    component : BuscarOferenteComponent
  }
  ,
  {
    path: 'formulario/crear-formulario',
    component : CrearFormularioComponent
  },
  {
    path: 'solicitante/formulario-solicitante-old',
    component : FormularioSolicitanteComponent
  }
  ,
  {
    path: 'formulario/gestionar-formulario',
    component : GestionarFormularioComponent
  },
  {
    path: 'solicitante/formulario-solicitante',
    component : FormularioSolicitanteReactivoComponent
  }
  ,
  {
    path: 'administrador/formulario-administrador',
    component : FormularioAdministradorComponent
  },
  {
    path: 'oferente/creacion-oferta',
    component : CreacionOfertaComponent
  },
  {
    path: 'solicitante/confirmacion-creacion-solicitante',
    component : ConfirmacionCreacionSolicitanteComponent
  },
  {
    path: 'administrador/confirmacion-creacion-administrador',
    component : ConfirmacionCreacionAdministradorComponent
  },
  {
    path: 'oferta/confirmacion-creacion-oferta',
    component : ConfirmacionCreacionOfertaComponent
  },
  {
    path: 'oferta/consultar-oferta',
    component : ConsultarOferta
  },
  {
    path: 'oferta/detalle-oferta-solicitante/:id',
    component :DetalleOfertaSolicitanteComponent
  },
  {
    path: 'oferta/etapas-oferta-solicitante/:idOferta',
    component : EtapasOfertaSolicitanteComponet
  },
  {
    path: 'oferta/detalle-oferta-oferente/:id',
    component : DetalleOfertaOferenteComponent
  },
  {
    path: 'oferta/etapas-oferta-oferente/:idOferta',
    component : EtapasOfertaOferenteComponent
  },
  {
    path: 'oferta/editar-etapa-oferta/:idOferta/:idEtapa',
    component : EditarEtapaOfertaComponent
  },
  {
    path: 'oferta/formulario-etapa/:idOferta/:idEtapa/:idFormulario',
    component : FormularioEtapaComponent
  },
  {
    path: 'oferta/consulta-oferta',
    component : ConsultarOfertaSolicitanteComponent
  },
  {
    path: 'oferta/consulta-oferta-oferente',
    component : ConsultarOfertaOferenteComponent
  },
  {
    path: 'oferta/agregar-etapa-oferta/:idOferta',
    component : AgregarEtapaOfertaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
