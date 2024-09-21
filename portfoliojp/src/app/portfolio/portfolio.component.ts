import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { ElPolloLocComponent  } from './el-pollo-loc/el-pollo-loc.component'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, ElPolloLocComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
