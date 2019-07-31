import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {
  detailId: any;
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.detailId = this.route.snapshot.paramMap.get('id');
    const num = parseInt(this.detailId, 10);
    if (!num) {
      alert('Hey, not a valid route!')
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }

}
