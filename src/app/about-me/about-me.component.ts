import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('containerAboutR') containerAboutR!: ElementRef<HTMLElement>;
  @ViewChild('containerAboutC') containerAboutC!: ElementRef<HTMLElement>;
  @ViewChild('containerAboutL') containerAboutL!: ElementRef<HTMLElement>;
  @ViewChild('InfoContainerAboutC')
  InfoContainerAboutC!: ElementRef<HTMLElement>;
  @ViewChild('InfoContainerAboutL')
  InfoContainerAboutL!: ElementRef<HTMLElement>;
  @ViewChild('InfoContainerAboutR')
  InfoContainerAboutR!: ElementRef<HTMLElement>;
  @ViewChild('h4aboutMe') h4aboutMe!: ElementRef<HTMLElement>;

  // Este método se ejecuta después de que la vista se haya cargado
  ngAfterViewInit() {
    console.log(this.containerAboutC);
    let InfoContainerAboutR = this.InfoContainerAboutR.nativeElement;
    InfoContainerAboutR.style.display = 'none';
    let InfoContainerAboutC =
      (this.InfoContainerAboutC.nativeElement.style.display = 'none');
    let InfoContainerAboutL =
      (this.InfoContainerAboutL.nativeElement.style.display = 'none');
  }
  carrerTraining() {
    event?.preventDefault();
    if (this.containerAboutR) {
      const hiddenC = this.containerAboutC.nativeElement;
      const hiddenL = this.containerAboutL.nativeElement;
      const h4aboutMe = this.h4aboutMe.nativeElement;
      hiddenC.style.display = 'none';
      hiddenL.style.display = 'none';
      h4aboutMe.style.display = 'none';
      this.InfoContainerAboutR.nativeElement.style.display = 'flex';

      this.containerAboutR.nativeElement.style.width = '75%';
    }
  }
  technicalSkill() {
    event?.preventDefault();
    if (this.containerAboutC) {
      const styleContainerC = this.containerAboutC.nativeElement;
      const hiddenR = this.containerAboutR.nativeElement;
      const hiddenL = this.containerAboutL.nativeElement;
      const h4aboutMe = this.h4aboutMe.nativeElement;
      hiddenR.style.display = 'none';
      hiddenL.style.display = 'none';
      h4aboutMe.style.display = 'none';
      this.InfoContainerAboutC.nativeElement.style.display = 'flex';

      this.containerAboutC.nativeElement.style.width = '75%';
    }
  }
  motivationsInterest() {
    event?.preventDefault();
    if (this.containerAboutL) {
      const hiddenR = this.containerAboutR.nativeElement;
      const hiddenC = this.containerAboutC.nativeElement;
      const h4aboutMe = this.h4aboutMe.nativeElement;
      hiddenR.style.display = 'none';
      hiddenC.style.display = 'none';
      h4aboutMe.style.display = 'none';
      this.InfoContainerAboutL.nativeElement.style.display = 'flex';
      this.containerAboutL.nativeElement.style.width = '75%';
    }
  }

  backAbout() {
    event?.preventDefault();
    const hiddenC = this.containerAboutC.nativeElement;
    const hiddenL = this.containerAboutL.nativeElement;
    const hiddenR = this.containerAboutR.nativeElement;
    const h4aboutMe = this.h4aboutMe.nativeElement;
    hiddenC.style.display = 'block';
    hiddenC.style.width = '30%';
    hiddenL.style.display = 'block';
    hiddenL.style.width = '30%';
    hiddenR.style.display = 'block';
    hiddenR.style.width = '30%';
    h4aboutMe.style.display = 'block';
    // this.containerAboutR.nativeElement.style.width = '100%';
    this.InfoContainerAboutR.nativeElement.style.display = 'none';
    this.InfoContainerAboutC.nativeElement.style.display = 'none';
    this.InfoContainerAboutL.nativeElement.style.display = 'none';
  }
}
