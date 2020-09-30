import { Component, Renderer2, Input, ViewChild, ElementRef, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'NgxMat-NgxMatImageShimmer',
  template: `
  <ng-container class="card">
  <div #shimmerImage class="loading" [ngStyle]="{'width': imageWidth, 'height': imageHeight}"></div>
  </ng-container>


  <style> 
  .card {
    background-color: #fff;
    overflow: hidden;
    margin: 12px;
    border-radius: 5px;
    box-shadow: 9px 17px 45px -29px rgba(0, 0, 0, 0.44);
  }
  
  /* The loading Class */
  .loading {
    position: relative;
    background-color: #e2e2e2;
  }
  
  /* The moving element */
  .loading::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.2)),
      to(transparent)
    );
  
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  
    /* Adding animation */
    animation: loading 0.8s infinite;
  }
  
  /* Loading Animation */
  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
  </style>
  `,
  styles: [
  ]
})
export class NgxMatImageShimmerComponent {

  constructor(private renderer: Renderer2) { }
  @Input() imageSrc: string;
  @Input() imageHeight: string;
  @Input() imageWidth: string;
  /**
   * @example ['margin-top: 5%']
   */
  @Input() imageStyle: any[] = [];
  @ViewChild('shimmerImage') imageDiv: ElementRef;
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const inputkey in changes) {
      if (inputkey === 'imageSrc') {
        if (this.imageDiv.nativeElement.style.backgroundImage === '') {
          const _this = this;
          _this.imageStyle.forEach((o: string) => {
            // the image style array consists of style key and the value of the style
            _this.renderer.setStyle(_this.imageDiv.nativeElement, o.split(':')[0], o.split(':')[1]);
          });
          this.getImage(this.imageSrc).then(function (successUrl) {
            _this.renderer.removeClass(_this.imageDiv.nativeElement, 'loading');
            _this.renderer.setStyle(_this.imageDiv.nativeElement, 'background-image', `url(${successUrl})`);

          }).catch(function (errorUrl) {
            _this.renderer.removeClass(_this.imageDiv.nativeElement, 'loading');
            _this.renderer.setStyle(_this.imageDiv.nativeElement, 'background-image', `url(${errorUrl})`);


          });
        }
      }
    }




  }
  private getImage(url) {

    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        resolve(url);
      };
      img.onerror = function () {
        reject('../assets/images/user.png');
      };
      img.src = url;
    });
  }

}

