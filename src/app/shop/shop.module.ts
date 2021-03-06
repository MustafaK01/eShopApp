import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { ShopComponent } from './shop/shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
@NgModule({
    imports:[ModelModule,BrowserModule,FormsModule,RouterModule],
    declarations: [
      ShopComponent,
      NavbarComponent,
      CartSummaryComponent,
      CartDetailsComponent,
      CheckOutComponent,
      ProductListComponent,
      CategoryListComponent
        ],
    exports: [
      ShopComponent,
      CartDetailsComponent,
      CheckOutComponent
     ]
})
export class ShopModule{

}
