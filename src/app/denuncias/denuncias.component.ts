import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss'],
})
export class DenunciasComponent {
  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }


   mostrarVideo = false;
  videoSeguro: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}


  abrirVideo(url: string) {
  const urlComAutoplay = url.includes('?') ? `${url}&autoplay=1&mute=1` : `${url}?autoplay=1&mute=1`;
  this.videoSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(urlComAutoplay);
  this.mostrarVideo = true;
}

  fecharVideo() {
    this.mostrarVideo = false;
    this.videoSeguro = '';
  }
}
