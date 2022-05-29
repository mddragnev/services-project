import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxCardComponent } from 'igniteui-angular';
import { Post } from '../services/post';
import { PostsService } from '../services/posts.service';
import { TranslateRESTService } from '../services/translate-rest.service';
import { TranslateSoapService } from '../services/translate-soap.service';


@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  @ViewChildren(IgxCardComponent)
  public cards!: QueryList<IgxCardComponent>;
  public travelAppDestinations: any = null;
  public posts: any = null;
  private language = '';

  constructor(
    private postsService: PostsService,
    private translateSoap: TranslateSoapService,
    private translateRest: TranslateRESTService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => this.posts = data);
  }

  public changeLanguage(event: any) {
    event.preventDefault();
    event.stopPropagation();

    let srcLang = '';
    let span = event.target;
    if (span.tagName === 'BUTTON') {
      span = span.firstChild;
    }
    const post = this.posts.find((post: Post) => post.id === parseInt(span.id));
    const text = post.description;
    const classList = span.classList.value;

    if (classList.includes('bg')) {
      this.language = 'en';
      srcLang = 'bg';
      span.classList.remove('fi-bg');
      span.classList.add('fi-us');
    } else {
      this.language = 'bg';
      srcLang = 'en';
      span.classList.remove('fi-us');
      span.classList.add('fi-bg');
    }

    if (this.language === 'bg') {
      this.translateSoap.translate(text, this.language, srcLang).subscribe((data: any) => post.description = data.data);
    } else {
      this.translateRest.translate(text, this.language, srcLang).subscribe((data: any) => post.description = data);
    }


  }
}
