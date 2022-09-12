import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.model';
import { Commune } from 'src/app/models/commune.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']

})
export class CommuneComponent implements OnInit {

  departements: Departement[] = [];//J'initialise un tableau pour stocker les infos de l'API
  departementsIsLoading: boolean = false;//Définir le chargement des infos
  departementsIsLoaded: boolean = false;//Si les départements sont chargés

  communes: Commune[] = [];
  communesForGraph: {name: string, value: number}[] =[];
  communesIsLoading: boolean = true;
  communesIsLoaded: boolean = true;
 


  //Pour réaliser un GET, on doit déclarer en PRIVATE les services HttpClient dans le constructeur
  constructor(private HttpClient: HttpClient, private toastr: ToastrService) { 
  }

//Fonction qui permet le chargement des départements
  
   
loadDepartements(): void{//pas de return
    this.departementsIsLoading = true;//Passé en true: lorsque l'on clique, permet de gérer l'état du spinner,
    //Récupération des données de l'API grâce à la requête GET
    this.HttpClient.get<Departement[]>("https://geo.api.gouv.fr/departements")//Ici, GET équivaut à un FETCH
    .subscribe (data =>{//On doit souscrire aux informations
      this.toastr.success('Liste des départements chargée', 'Chargement OK')
      this.departements = data//On transfère les données de l'API dans un tableau vide
      this.departementsIsLoaded = true;//Le bouton de chargement disparaît
      this.departementsIsLoading = false;//Une fois les données chargées, le chargement passe à false
    
    
    }
  )
}
    loadCommunes(codeDepartement:string): void{
    this.communesIsLoading = true 
    this.HttpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`) // ${} => Faire appel à une variable dans un texte
    .subscribe (data =>{
      this.toastr.success('Liste des communes chargée', 'Chargement OK')
      this.communes = data;
      
    
      
      
      
      
      
      this.communesForGraph = data
      .filter(commune => commune.population > 8_000)
      .map(commune => {
        return {
          name: commune.nom,//on met une  ,  car on est dans un objet
          value: commune.population
        }
      })
      this.communesIsLoaded = true;
      this.communesIsLoading = false;
  
    })
    }
  ngOnInit(): void {}

    // CommuneComponent(): 
  


}
