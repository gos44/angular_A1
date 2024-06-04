import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome  = 'hola';
  tasks = [
'instalar el angular',
'crear proyec',
'crear componentes'
  ]
  name = 'gustavo';
  age = '18';
  disabled = true;
  img='https://i.pinimg.com/originals/14/88/65/14886576f2a17f4671ea5ad4375a7e4f.png';
  persona = {
    name: 'gustavo',
    age:18,
    avatar: 'https://i.pinimg.com/originals/14/88/65/14886576f2a17f4671ea5ad4375a7e4f.png'
  };
}
