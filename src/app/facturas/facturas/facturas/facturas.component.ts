import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any [] = [];
  cargando = true;

  constructor( private facturaService: FacturasService ) {
    this.facturaService.getFacturas ()
      .subscribe ( facturas => {
        for ( const id$ in facturas ) {
          const f = facturas [id$];
          f.id$ = id$;
          this.facturas.push ( facturas [id$] );
        }
      });
  }

  ngOnInit() {
  }

  eliminarFactura ( id$ ) {
    this.facturaService.delFactura (id$ )
      .subscribe ( res => {
        this.facturas = [];
        this.facturaService.getFacturas()
          .subscribe ( facturas => {
            for ( const id$ in facturas ) {
              const f = facturas [id$];
              f.id$ = id$;
              this.facturas.push ( facturas [id$] );
            }
          } );
      } );
  }

}
