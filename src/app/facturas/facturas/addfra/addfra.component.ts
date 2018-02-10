import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturasService } from '../../facturas.service';


@Component({
  selector: 'app-addfra',
  templateUrl: './addfra.component.html',
  styleUrls: ['./addfra.component.css']
})
export class AddfraComponent implements OnInit {

  facturaForm: FormGroup;
  factura: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  proveedores: any [] = [];

  constructor(  private pf: FormBuilder,
                private router: Router,
                private activatedRouter: ActivatedRoute,
                private facturaService: FacturasService) { }

  ngOnInit() {
    this.facturaForm = this.pf.group ( {
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [Validators.required, Validators.minLength(10)] ],
      base:  ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
    } );
    this.onChanges ();
  }

  onChanges (): void {
    this.facturaForm.valueChanges.subscribe ( valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.facturaForm.value.iva = this.base * this.tipo;
      this.facturaForm.value.total = this.base + (this.base * this.tipo);
    } );
  }

  onSubmit () {
    this.factura = this.saveFactura ();
    this.facturaService.postFactura ( this.factura )
        .subscribe ( newfra => {
        } );
        this.facturaForm.reset ();
  }

  saveFactura () {
    const saveFactura = {

      proveedor: this.facturaForm.get ( 'proveedor' ).value,
      fecha: this.facturaForm.get ( 'fecha' ).value,
      concepto: this.facturaForm.get ( 'concepto' ).value,
      base: this.facturaForm.get ( 'base' ).value,
      tipo: this.facturaForm.get ( 'tipo' ).value,
      iva: this.facturaForm.get ( 'iva' ).value,
      total: this.facturaForm.get ( 'total' ).value
    };
    return saveFactura;
  }

}
