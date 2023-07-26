import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { log } from 'console';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-restaurantesnpag',
  templateUrl: './restaurantesnpag.component.html',
  styleUrls: ['./restaurantesnpag.component.css']
})
export class RestaurantesComponentPag implements OnInit {


  lista_restaurantes!: Array<Restaurante>;
  ruta_servicio_foto:string = RestauranteService.URL_ACTUAL + "/obtenerFoto";
  totalRegistros: number = 0;
  totalPorPagina: number = 2;
  opcionesTamanio: number[] = [2, 4, 6, 8];
  paginaActual: number = 0;


  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantesPorPaginas();
  }

  paginar(evento: PageEvent) {

    console.log("Evento Paginator");
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;

    this.getRestaurantesPorPaginas();

  }


  borrarRestaurante() {
    //TODO: obtener el id del restaurante y hacer el delete
    console.log("quiere borrar el restaurante");
  }

  getRestaurantesPorPaginas() {

    this.restauranteService.getPaginaRestaurantes(this.paginaActual, this.totalPorPagina).subscribe(
      {
        complete: () => console.log("Completo"),
        error: (errorRx) => console.log(errorRx),
        next: (pagina) => {
          //hago el casting
          this.lista_restaurantes = <Array<Restaurante>>pagina.content;
          this.totalRegistros = pagina.totalElements;
        }


      }
    )
  }
}
