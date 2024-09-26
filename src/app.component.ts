import { Component, ViewChild, ElementRef, inject } from '@angular/core';

/*
***************** Angular full screen sample application ************************
Please use the "Open Preview in new tab" button to run the app in full screen with overlay menus

Example demonstrates,
1. Full screen in angular for a particular element inside a component.
2. Employs prescribed solution for overlays (menu, dialog etc,.) not working in fullscreen mode. Which is to override the OverlayContainer with FullscreenOverlayContainer in the module file providers section.
*/

@Component({
  selector: 'app-root',
  template: `  
  <div style="background-color: black">   
  <button class="btn" (click)="toggleFullscreen()">Fullscreen</button>
  <div style="z-index:-1" #Content> 
  <button class="btn" (click)="isOpen = !isOpen" type="button" cdkOverlayOrigin #trigger="cdkOverlayOrigin"><i class="fa fa-bars"></i>
  {{this.show}}
</button>

  <div *ngIf="show == 'ClownFish Playing'" style="width:100%;height:0;padding-bottom:56%;position:relative;pointer-events: none;"><iframe src="https://giphy.com/embed/26u47309v8SiMoiKk" width="100%" height="100%"  style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
  <div *ngIf="show == 'Home'" style="width:100%;height:0;padding-bottom:56%;position:relative;pointer-events: none;"><iframe src="https://giphy.com/embed/dYdbOC4jmNLaeYbv4J" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
  <div *ngIf="show == 'Ocean Floor'" style="width:100%;height:0;padding-bottom:56%;position:relative;pointer-events: none;"><iframe src="https://giphy.com/embed/MF6ftI1Ge4mApyyauo" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
  <div *ngIf="show == 'Jelly Fish'" style="width:100%;height:0;padding-bottom:56%;position:relative;pointer-events: none;"><iframe src="https://giphy.com/embed/LtwGskeJs0psQ" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> 
</div> 
</div>   

<ng-template
  cdkConnectedOverlay
  [cdkConnectedOverlayOrigin]="trigger"
  [cdkConnectedOverlayOpen]="isOpen"
>
  <ul class="example-list">
    <li (click)="onAquaSelect('ClownFish Playing')">ClownFish Playing</li>
    <li (click)="onAquaSelect('Home')">Home</li>
    <li (click)="onAquaSelect('Ocean Floor')">Ocean Floor</li>
    <li (click)="onAquaSelect('Jelly Fish')">Jelly Fish</li>    
  </ul>
</ng-template>    
  `,
})
export class App {
  @ViewChild('Content') content: ElementRef = <any>undefined;
  name = 'Angular';
  isOpen = false;
  show = 'ClownFish Playing';

  toggleFullscreen() {
    const element = this.content.nativeElement;

    if (document.fullscreenElement === null) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // IE/Edge
        element.msRequestFullscreen();
      }
    } else {
      const doc = document as any;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        // Firefox
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        // IE/Edge
        doc.msExitFullscreen();
      }
    }
  }

  onAquaSelect(id: string) {
    this.show = id;
    this.isOpen = false;
  }
}
