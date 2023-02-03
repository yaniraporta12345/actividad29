import { DataSource } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductonuevoComponent } from '../productonuevo/productonuevo.component';

//en lugar de dialogdata
export interface Producto {
  n_orden: number;
  nombre: string;
  codigo: string;
  precio: number;
  descuento: boolean;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  /* para la tabla */

  // dataSource:any;

  dataSource:any;


  productos = [
    {nombre: 'Papas', precio: 55},
    {nombre: 'Manzanas', precio: 35},
    {nombre: 'Naranjas', precio: 15 },
  ]

  displayedColumns: string[] = ['n_orden','nombre', 'precio','borrar'];


  ngOnInit(){
    this.dataSource =this.productos;
  }


  name = '';
  code = '';
  price = 0;
  discount = false;

  constructor(public dialog: MatDialog) {}

  openDialog(){
    // definimos que el n_orden es igual a la cantidad de items+1 (dataSource.length+1)
    const dialogRef = this.dialog.open(ProductonuevoComponent,{
      width:'400px',
      data:{nombre: this.name, codigo: this.code, precio: this.price, descuento: this.discount}
    });
    //para obtener el resultado en una variable
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      // this.productoNuevo =result;
      // console.log(this.productoNuevo)

      /* this.productos.push(result)
      console.log(this.dataSource) */

      /* creamos un nuevo array y alli incluimos el producto nuevo. asi la tabla se actualiza */

      /* debe tener al menos nombre */
      if(result.nombre.trim().length>0){
        let nuevoArray = this.dataSource;
        nuevoArray.push(result);
        this.dataSource = [...nuevoArray]
      }    

    });
  }



  /* para borrar */
  Borrar(rowId:number){
    let nuevoArray = this.dataSource;
    this.dataSource = [...nuevoArray]

    // confirm('¿Estás segur@ de borrar la fila '+(rowId+1)+'?'

    if (rowId > -1 && confirm('¿Estás segur@ de borrar la fila?')) {

      nuevoArray.splice(rowId, 1);
      this.dataSource = [...nuevoArray]

    } else{
      return
    }
  }
}

