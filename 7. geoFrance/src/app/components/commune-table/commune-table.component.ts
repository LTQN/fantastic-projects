import { Component, OnInit, Input } from '@angular/core';
import { Commune } from 'src/app/models/commune.model';



@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})


export class CommuneTableComponent implements OnInit {

 

  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;

currentPage: number = 1;
search: string = "";


constructor() { 

}

  ngOnInit(): void {
  }


 

 
  getLength(): number{
    return this.communes
    .filter(commune =>

     commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
     commune.code.includes(this.search)
)

    .length;
  }


  getCommunes(): Commune[]{
    return this.communes
    .filter(commune =>

      commune.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      commune.code.includes(this.search)
 )
    
    .slice((this.currentPage - 1)*10, this.currentPage *10)
    //La pagination commence à 1  ---cf l17---, rappel, un tableau commence à 0, on ajoute -1
  }
  triCommunes(): Commune[]{//
    return this.communes
    .sort((a,b) => {//La méthode sort permet de trier les éléments d'un tableau
    return a.population - b.population// a et b sont directement déclarés ici , pas besoin de déclarer ailleurs
  })
  .reverse()
}



}


