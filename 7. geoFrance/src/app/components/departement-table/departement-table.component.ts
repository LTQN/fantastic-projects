
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-departement-table',
  templateUrl: './departement-table.component.html',
  styleUrls: ['./departement-table.component.css']
})


export class DepartementTableComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;


  //Permet de gérer les entrées et sorties dans la balise HTML de commune.component.html
@Input() departements: Departement[] = [];
@Input() departementsIsLoading: boolean = false;
@Input() departementsIsLoaded: boolean = false;
@Output() loadDepartements: EventEmitter<{}> = new EventEmitter();
@Output() loadCommunes: EventEmitter<string> = new EventEmitter(); 


currentPage: number = 1;//Pour la pagination, l'état de la page actuelle qui commence à 1
search: string = "";//l'input de la barre de recherche qu'on met à vide


  constructor() { }

  ngOnInit(): void {
  }

  //Cette fonction permet d'obtenir la longueur du tableau et de convertir en lowerCase
  //les données pour faire fonctionner la barre de recherche
  getLength(): number{
    return this.departements
    .filter(departement =>

     departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
     departement.code.includes(this.search)
)

    .length;
  }


  getDepartements(): Departement[]{
    return this.departements
    .filter(departement =>

      departement.nom.toLowerCase().includes(this.search.toLowerCase()) ||
      departement.code.includes(this.search)
 )
    
    .slice((this.currentPage - 1)*10, this.currentPage *10)
    //La pagination commence à 1  ---cf l17---, rappel un tableau commence à 0, on ajoute -1
  }

}