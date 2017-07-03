import { Component } from '@angular/core';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent{
	public titulo: string;

	constructor(){
		this.titulo = 'webapp de productos con angular4';
	}

	ngOnInit(){
		console.log('Se ah Cargado el componente home.component');
	}
}