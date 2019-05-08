import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'activite1';

  post=[
    {
      title:"Mon premier post",
      content:"knkgn  jb  fuebeo e jgegkeg kg",
      loveIts:0,
      created_at:new Date()
    },
    {
      title:"Mon second post",
      content:"ibieg i ekneg ke gonge gel leng",
      loveIts:0,
      created_at:new Date()
    },
    {
      title:"Mon troisième post",
      content:"ineg ke ek gng ekegong goenge",
      loveIts:0,
      created_at:new Date()
    }
  ]
}
