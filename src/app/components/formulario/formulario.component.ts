import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  week_day = 0;
  day;
  month;
  year;

  actual_day;
  actual_month;
  actual_year;
  actual_date;


  dmy;
  date_picked = 0;
  horario_ocupado = 0;
  horario = -1;
  day_i;
  month_i;
  year_i;

  servicio = -1;
  servicio_contratacion = 0;
  servicio_actualizacion = 0;
  today: Date;
  date: Date;
  util: Date;

  correo;

  constructor(private ser: GeneralService, private router: Router) {
    this.actual_day = ((new Date().getDate()).toString());
    this.actual_month = ((new Date().getMonth() + 1).toString());
    this.actual_year = ((new Date().getFullYear()).toString());
    this.actual_date = this.actual_year + "-" + this.actual_month + "-" + this.actual_day;
    this.date = new Date();
  }

  formulario_completado=0;
  ingresarHora(Input_correo: String, Input_dia: number, Input_mes: number, Input_anio: number, Input_hora: number, Input_seleccion: number, Input_servicio_contratacion: number, Input_servicio_actualizacion: number) {
    this.ser.ingresarHora(Input_correo, Input_dia, Input_mes, Input_anio, Input_hora, Input_seleccion, Input_servicio_contratacion, Input_servicio_actualizacion).subscribe(x => this.formulario_completado = parseInt(x.toString()));
  }

  chequearHora(Input_hora: number, Input_dia: number, Input_mes: number, Input_anio: number) {
    this.ser.horaExiste(Input_hora, Input_dia, Input_mes, Input_anio).subscribe(x => this.horario_ocupado = parseInt(x.toString()));
  }

  getDate() {
    this.date_picked = 1;
    this.dmy = this.date.valueOf().toString();
    this.year = this.dmy.charAt(0) + this.dmy.charAt(1) + this.dmy.charAt(2) + this.dmy.charAt(3);
    this.year_i = parseInt(this.year);

    this.month = this.dmy.charAt(5) + this.dmy.charAt(6);
    this.month_i = parseInt(this.month);

    this.day = this.dmy.charAt(8) + this.dmy.charAt(9);
    this.day_i = parseInt(this.day);

  }

  cerrarSesionPorEliminación(){
    if (localStorage.getItem("correo") != null) {
      this.correo = localStorage.getItem("correo");
    }else{
      localStorage.removeItem("correo");
      localStorage.removeItem("pass");
            
      console.log("Sesion cerrada")
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit() {
    this.cerrarSesionPorEliminación();
  }

}



