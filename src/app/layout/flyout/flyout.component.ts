import { Component } from '@angular/core';

@Component({
  selector: 'app-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.scss']
})
export class FlyoutComponent {
  isFlyoutOpen: boolean = true;

  toggleFlyout(): void {
    this.isFlyoutOpen = !this.isFlyoutOpen;
  }
}
