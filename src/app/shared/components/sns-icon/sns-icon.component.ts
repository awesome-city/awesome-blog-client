import { Component, Input } from '@angular/core';
import { ProfileSNSType } from '../../../models/entity/site';

@Component({
  selector: 'app-sns-icon',
  templateUrl: './sns-icon.component.html',
  styleUrls: ['./sns-icon.component.scss'],
})
export class SnsIconComponent {
  @Input()
  set snsType(value: ProfileSNSType) {
    this._snsType = value;
    this.iconClass = this.iconClassMap[value];
  }
  private _snsType?: ProfileSNSType;

  iconClass?: string;

  private readonly iconClassMap: { [key in ProfileSNSType]: string } = {
    facebook: 'bi bi-facebook',
    twitter: 'bi bi-twitter',
    github: 'bi bi-github',
    instagram: 'bi bi-instagram',
    amazon_wishlist: 'fa-brands fa-amazon',
    mail: 'bi bi-envelope',
    rss: 'bi bi-rss',
  };
}
