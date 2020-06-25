const block = document.getElementById('block');
const sidebar = document.getElementById('sidebar-news');
const showMore = document.getElementById('showMore');
let pageCounter = 1;

const showNews = (data, root) => {
  for (const i of data) {
    let item = document.createElement('div');
    let description = document.createElement('div');
    let title = document.createElement('h4');
    let link = document.createElement('a');
    let subData = document.createElement('div');
    let date = document.createElement('span');
    let author = document.createElement('span');
    let arrow = document.createElement('p');
    let category = document.createElement('span');

    if (root === block) {
      fetch(`https://renemorozowich.com/wp-json/wp/v2/media/${i.featured_media}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        item.style.backgroundImage = `url(${data.guid.rendered})`;
      });
    }

    fetch(`https://renemorozowich.com/wp-json/wp/v2/categories/${i.categories[0]}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      category.className = 'category';
      category.innerText = data.name;
    });

    item.className = 'item';
    link.href = i.link;
    link.innerText = i.title.rendered;
    title.appendChild(link);

    subData.className = "subData";

    arrow.className = 'arrow';
    date.innerText = i.date.substring(0, 10);
    author.innerText = 'Evgeny Tretyak';

    description.className = 'description';

    subData.appendChild(date);
    subData.appendChild(arrow);
    subData.appendChild(author);

    description.appendChild(title);
    description.appendChild(subData);
    item.appendChild(category);
    item.appendChild(description);
    root.appendChild(item);

  }
}

fetch('https://renemorozowich.com/wp-json/wp/v2/posts')
.then((response) => {
  return response.json();
})
.then((data) => {
  showNews(data, block);
});


fetch('https://renemorozowich.com/wp-json/wp/v2/posts?categories=33')
.then((response) => {
  return response.json();
})
.then((data) => {
  showNews(data, sidebar);
});

const loadPosts = () => {
  fetch(`https://renemorozowich.com/wp-json/wp/v2/posts?page=${pageCounter}`)
  .then((response) => {
    if(response.status===200){
      return response.json();
    }
    else{
      alert(23456789)
    }
  })
  .then((data) => {
      showNews(data, block);
  });

  pageCounter++;
}

showMore.addEventListener('click', loadPosts)
