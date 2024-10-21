import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  slug: string|undefined;
  producto: Producto[] =[];
  productoSub: Subscription | undefined;
constructor(private route:ActivatedRoute, private productoService: ProductoService){}

ngOnInit(): void {
  this.slug = this.route.snapshot.params['id']
  console.log(this.slug)

}
}
