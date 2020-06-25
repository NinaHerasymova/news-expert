const block = document.getElementById('block');
const sidebar = document.getElementById('sidebar-news');

const showNews = (data, root) => {
  for (const i of data) {
    let item = document.createElement('div');
    let title = document.createElement('h2');
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

    subData.appendChild(date);
    subData.appendChild(arrow);
    subData.appendChild(author);

    item.appendChild(category);
    item.appendChild(title);
    item.appendChild(subData);
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

