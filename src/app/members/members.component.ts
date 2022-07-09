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
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.api.getMembers().subscribe((res) => {
      this.members = res;
      console.log(res);
    });
  }

  search() {
    if (this.firstName == '') {
      this.ngOnInit();
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
}
