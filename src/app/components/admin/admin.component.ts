import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorasReservadas } from 'src/app/interfaces/horas-reservadas';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Horas: HorasReservadas[];
  HorasAceptadas: HorasReservadas[];
  
  constructor(private ser: GeneralService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerHoras();
    this.obtenerHorasAceptadas();
  }

  obtenerHoras() {
    this.ser.obtenerHoras().subscribe(a => this.Horas=a);
  }
  
  obtenerHorasAceptadas() {
    this.ser.obtenerHorasAceptadas().subscribe(a => this.HorasAceptadas=a);
  }

  h=0;
  aceptarHora(hora:number,dia: number,mes: number, anio: number){
    this.ser.aceptarHora(hora,dia,mes,anio).subscribe(y => this.h = parseInt(y.toString()));
    this.router.navigateByUrl('/welcome');
  }
}
