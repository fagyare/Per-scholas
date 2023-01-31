let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.querySelector("#main-title")
  mainTitle.innerHTML = "I'm KING, Welcome to my KINGDOM"

    // Part 2
  this.body.style.backgroundColor = 'skyblue'

    // Part 3
  let favThings = document.getElementById('favorite-things')
  favThings.removeChild(favThings.lastElementChild)

    // Part 4
  const specialTitles = document.getElementsByClassName("special-title");

  for (let title of specialTitles) {
    title.style.fontSize = "2rem";
  }

  // Part 5
  const pastRaceContainer = document.getElementById('past-races');
  const pastRaces = pastRaceContainer.children
  for (let race of pastRaces) {
    if (race.innerText.toLowerCase() === 'chicago') race.remove();
  }


    // Part 6
  const accra = document.createElement('li');
  accra.innerHTML = 'Accra';
  pastRaceContainer.append(accra);

    // Part 7
  const blogPost = document.createElement('div');
  const blogPostTitle = document.createElement('h2');
  const blogPostBody = document.createElement('p');
  blogPost.classList.add('blog-post', 'peachpuff'); // assignment didnt ask for color but i thought it would be more consistent to have one as the rest
  blogPostTitle.innerText = 'Accra';
  blogPostBody.innerText = 'I drove my whip all over Dansoman'

  blogPost.append(blogPostTitle, blogPostBody);
  document.getElementsByClassName('main')[0].append(blogPost);


    // Part 8
  document.getElementById('quote-title').addEventListener('click', randomQuote);

    // Part 9
  const blogPosts = document.getElementsByClassName('blog-post');

  for (let post of blogPosts) {
    post.addEventListener('mouseout', (e) => e.target.classList.toggle('purple'));
    post.addEventListener('mouseenter', (e) => e.target.classList.toggle('red'));
  }

});
