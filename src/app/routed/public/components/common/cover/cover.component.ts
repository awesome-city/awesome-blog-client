import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {
  @Input()
  display: boolean = true;

  @Input()
  filterType: 'dot' | 'none' = 'dot';

  @Input()
  imageUrl?: string;

  @Input()
  videoUrl?: string;

  @Input()
  height: number = 250;
}
