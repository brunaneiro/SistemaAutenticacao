import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css']
})
export class RegistrarusuarioComponent implements OnInit {

  logo = 'https://media1.giphy.com/media/jUEuQU7RGyYsdnXHvF/200.gif'

  constructor() { }

  ngOnInit(): void {
  }

  confirmaRegistro(){
    document.getElementById("alert")!.style.display = "block";
    setTimeout(function(){ window.location.href='/login'; }, 3000);
  } 
}
