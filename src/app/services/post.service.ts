export class PostService{
  posts = [
    {
      title: 'Mon premier post',
      content: 'Ce post est blablabla',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Ce post est blablabla',
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon post',
      content: 'GHHhh0',
      loveIts: 12,
      createdAt: Date.now()
    }

  ];
  likeAll(){
    for (let post of this.posts){
      post.loveIts = 1;
    }
  }
  dislikeAll(){
    for (let post of this.posts){
      post.loveIts = 0;
    }
  }
}
