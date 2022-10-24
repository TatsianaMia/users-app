import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-post-comment',
  templateUrl: './user-post-comment.component.html',
  styleUrls: ['./user-post-comment.component.scss']
})
export class UserPostCommentComponent implements OnInit {

  @Input()
  comment!:IComment;

  constructor() { }

  ngOnInit(): void {
  }

}
