import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Blog } from '../../types';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {

  blog: Blog;

  constructor(navParams: NavParams) {
    this.blog = navParams.get('blog');
  }

}
