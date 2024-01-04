function BlogEngine(title, body, author){
  this.title = title,
  this.body = body,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isLive = false
}

const post = new BlogEngine('a', 'b', 'c')

console.log(post)