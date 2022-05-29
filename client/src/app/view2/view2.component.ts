import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../services/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {
  public title!: string;
  public description!: string;
  private post!: Post;
  private update = false;

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit() {
    this.update = false;
    const url = this.router.parseUrl(this.router.url);
    if (Object.keys(url.queryParams).length > 0) {
      this.update = true;
      this.postService.getPost(url.queryParams.id).subscribe(result => {
        this.post = result
        this.title = this.post.title;
        this.description = this.post.description;
      });
    }


  }

  public createPost() {
    if (this.update) {
      this.post.title = this.title;
      this.post.description = this.description;
      this.postService.updatePost(this.post);
    } else {
      this.postService.addPost(this.title, this.description);
    }
    this.router.navigateByUrl('/view1')
  }
}
