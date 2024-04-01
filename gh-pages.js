var ghpages = require('gh-pages');

ghpages.publish('dist', {
    repo: 'https://github.com/Poul-Peter/broens-ing.git',
    remote: 'origin-github'
  },(err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Published!');
    }
  })