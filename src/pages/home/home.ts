import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Blog } from '../../types';
import { BlogPage } from '../blog/blog';
import { CreateBlogPage } from '../create-blog/create-blog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  blogs: Blog[];

  constructor(private navCtrl: NavController, private http: HttpClient) {
  }
  
  ionViewDidLoad(): void {
    this.http.get('db/blogs.json').subscribe((db: any) => this.blogs = db.blogs);
  }


  goToPost(blog): void {
    this.navCtrl.push(BlogPage, { blog });
  }

  createBlog() {
    this.navCtrl.push(CreateBlogPage);
  }

}
