import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy{

  producto: Producto[] =[];
  productoSub: Subscription | undefined;

  constructor(private ProductoService: ProductoService){}

  ngOnInit(): void {
    this.productoSub = this.ProductoService.getProducto()
    .subscribe({
      next: ( producto: Producto[]) =>{
        this.producto=producto
        console.log(this.producto)
      },
      error: ( err: any) =>{
        console.error(err)
      },
      complete:() =>{
        console.log('completado')
      }
    })

  }

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }

}
