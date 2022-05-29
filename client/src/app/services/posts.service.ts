import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private URL:string = "http://localhost:8080";
    constructor(private http: HttpClient, private router: Router) { }

    public getPosts(): Observable<any> {
        return this.http.get<Post[]>(this.URL + '/posts');
    }

    public addPost(title: string, description: string) {
        const post = new Post;
        post.title = title;
        post.description = description;
        this.http.post(this.URL + '/posts', post)
            .subscribe(response => console.log(response));
    }

    public getPost(id:string):Observable<Post> {
        return this.http.get<Post>(this.URL + `/posts/${id}`)
    }

    public updatePost(newPost: Post) {
       this.http.put(this.URL + '/posts', newPost).subscribe(response => console.log(response));
    }
}
