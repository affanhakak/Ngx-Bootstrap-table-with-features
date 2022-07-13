import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})

export class MembersComponent implements OnInit {
  members: Member[] = [];
  firstName: any;
  pageIndex: number = 1;
  key: string = 'id';
  reverse: boolean = false;
  tableSize: number = 4;
  tableSizes: any = [4, 8, 12, 16, 20];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.api.getMembers().subscribe((res) => {
      this.members = res;
      // console.log(res);
    });
  }

  search() {
    if (this.firstName == '') {
      this.getMembers();
    } else {
      this.members = this.members.filter((res) => {
        return res.firstName
          .toLocaleLowerCase()
          .match(this.firstName.toLocaleLowerCase());
      });
    }
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onTableDataChange(event: any) {
    this.pageIndex = event;
    this.getMembers();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.pageIndex = 1;
    this.getMembers();
  }
}
