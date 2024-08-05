import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router :Router){}

about(){
this.router.navigateByUrl('about')
}
project(){
  this.router.navigateByUrl('project')
  }
  skill(){
    this.router.navigateByUrl('skill')
    }
    contect(){
      this.router.navigateByUrl('about')
      }

  resumeDownloads() {
    const link = document.createElement('a');
    link.href = 'assets/Resume.jpg';
    link.download = 'Resume.jpg';
    link.click();
  }

  experience(){
    this.router.navigateByUrl('about')
  }

  education(){
    this.router.navigateByUrl('about')
  }
}
