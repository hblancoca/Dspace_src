import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFormComponent as BaseComponent } from '../../../../../app/shared/search-form/search-form.component';
import { SearchService } from '../../../../../app/core/shared/search/search.service';
import { PaginationService } from '../../../../../app/core/pagination/pagination.service';
import { SearchConfigurationService } from '../../../../../app/core/shared/search/search-configuration.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DSpaceObjectDataService } from '../../../../../app/core/data/dspace-object-data.service';
import { DSONameService } from '../../../../../app/core/breadcrumbs/dso-name.service';

@Component({
  selector: 'ds-search-form',
  styleUrls: ['../../../../../app/shared/search-form/search-form.component.scss'],
  templateUrl: './search-form.component.html',
})

export class SearchFormComponent extends BaseComponent {
  selectedSearchType: string = '';
  showDropdown: boolean = false;

  constructor(
    protected router: Router,  // Pasa las dependencias al constructor
    protected searchService: SearchService,
    protected paginationService: PaginationService,
    protected searchConfig: SearchConfigurationService,
    protected modalService: NgbModal,
    protected dsoService: DSpaceObjectDataService,
    public dsoNameService: DSONameService,
  ) {
    super(router, searchService, paginationService, searchConfig, modalService, dsoService, dsoNameService);
    this.checkRoute();
  }

  /**
   * Verifica la ruta actual para determinar si estamos en la página principal
   */
  checkRoute(): void {
    const currentRoute = this.router.url;
    this.showDropdown = (currentRoute === '/' || currentRoute === '/home');
  }

  /**
   * Actualiza la búsqueda cuando se envía el formulario
   * @param data Valores enviados en el formulario
   */
  onSubmit(data: any) {
    let query = `"${data.query}"`; // Encierra la consulta en comillas dobles

    if (this.showDropdown) {
      // Modifica la consulta solo si el desplegable está visible
      switch (this.selectedSearchType) {
        case 'author':
          data = { query: ``, 'dc.creator:': `${query},query` };
          break;
        case 'title':
          data = { query: `dc.title:${query}` };
          break;
        case 'subject':
          data = { query: `dc.subject:${query}` };
          break;
        case 'director':
          data = { query: `dc.contributor.advisor:${query}` };
          break;
        /* case 'doi':
          data = { query: ``, 'dc.identifier.doi:': `${query},query` };
          break; */
        default:
          data = { query: query }; // En caso de que no se seleccione un tipo específico
          break;
      }
    } else {
      data = { query: query }; // Comportamiento normal sin desplegable
    }

    data = Object.assign(data, { 'spc.sf': 'dc.title', 'spc.sd': 'ASC' });

    // Llamada al método del componente base
    super.onSubmit(data);
  }
}

