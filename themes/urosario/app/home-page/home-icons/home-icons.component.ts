import { Component,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'ds-home-icons',
  styleUrls: ['./home-icons.component.scss'],
  templateUrl: './home-icons.component.html',
  encapsulation: ViewEncapsulation.None 
})

/**
 * Component to render the news section on the home page
 */
export class HomeIconsComponent extends Component {

  iconos = [
    { nombre: 'Tesis y disertaciones', url: 'https://repository.urosario.edu.co/handle/10336/562', rutaImagen: '/recursos/icono-tesis.jpg' },
    { nombre: 'Trabajos de grado', url: 'https://repository.urosario.edu.co/handle/10336/561', rutaImagen: '/recursos/icono-grado.jpg' },
    { nombre: 'Investigación y creación', url: 'https://repository.urosario.edu.co/handle/10336/563', rutaImagen: '/recursos/icono-investigacion.jpg' },
    { nombre: 'Recursos educativos abiertos', url: 'https://repository.urosario.edu.co/handle/10336/32134', rutaImagen: '/recursos/icono-reas.jpg' },
    { nombre: 'Editorial', url: 'https://repository.urosario.edu.co/handle/10336/4', rutaImagen: '/recursos/icono-editorial.jpg' },
    { nombre: 'Memoria Institucional', url: 'https://repository.urosario.edu.co/handle/10336/561', rutaImagen: '/recursos/icono-memoria.jpg' },
  ];

}

