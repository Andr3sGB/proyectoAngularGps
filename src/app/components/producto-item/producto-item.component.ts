import { Producto } from './../../models/producto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent implements OnInit{

  @Input() producto: Producto | undefined;

  ngOnInit(): void {
      console.log(this.producto)
  }
}
