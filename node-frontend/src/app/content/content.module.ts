import { NgModule }      from '@angular/core';
import { ContentComponent }   from './content.component'
import {ProductModule} from '../product/product.module';

@NgModule({
  imports:      [ ProductModule ],
  declarations: [ ContentComponent ]
})
export class AppModule { }