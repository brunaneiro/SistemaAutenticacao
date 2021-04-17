import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.css']
})
export class RecuperarsenhaComponent implements OnInit {

  logo = 'https://media2.giphy.com/media/yxF4HmDIXw83S/giphy.gif';

  constructor() { }

  ngOnInit(): void {
  }

  senhaRecuperada(){
    document.getElementById("alert")!.style.display = "block";
    setTimeout(function(){ window.location.href='/login'; }, 1500);
  } 

}
