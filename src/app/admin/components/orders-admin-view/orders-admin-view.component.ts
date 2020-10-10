import { Component, OnInit } from '@angular/core';
import { Order } from '../../../orders/models/order';
import { OrderService } from '../../../orders/services/order.service';

@Component({
  selector: 'app-orders-admin-view',
  templateUrl: './orders-admin-view.component.html',
  styleUrls: ['./orders-admin-view.component.scss']
})
export class OrdersAdminViewComponent {

  constructor(private orderService: OrderService) { }

  getOrders(): Order[] {
    return this.orderService.getOrders();
  }

}
