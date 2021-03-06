import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StatusAPIService } from '../status/status.service';
import { Status } from '../status/status';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {
  detailId: any;
  statusItem: Status;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private statusAPI: StatusAPIService
  ) { }

  ngOnInit() {
    this.detailId = this.route.snapshot.paramMap.get('id');
    const num = parseInt(this.detailId, 10);
    if (!num) {
      alert('Hey, not a valid route!')
      this.goBack();
    } else {
      this.statusAPI.get(num).subscribe(data => {
        console.log(data);
        this.statusItem = data;
      });
    }
  }

  goBack() {
    this.location.back();
  }

}
