'use strict';

const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const urlDefault = "https://graph.instagram.com/me/media";

const fields = "?fields=media_type,media_url,caption,permalink&access_token=";

const access_token = "";

var url = urlDefault + fields + access_token;

fetch(url)
  .then(res => res.json())
  .then(data => CrearHtml(data.data));

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function CrearHtml(data) {
  for (const img of data) {
    galery.innerHTML += `
        <div class="image overflow">
            <img loading="lazy" src="${img.media_url}" alt="">
            <div class="opacity-hover">
                <a href="${img.permalink}" class="caption">
                    <p>
                        ${truncateText(img.caption || '', 100)}
                    </p>
                </a>
            </div>
        </div>
    `;
  }
}

next.addEventListener('click', moveGalery);
prev.addEventListener('click', moveGalery);

function moveGalery(e) {
  if (e.target.id === 'next' || e.target.parentElement.id === 'next') {
    feed.scrollLeft += feed.offsetWidth;
  } else {
    feed.scrollLeft -= feed.offsetWidth;
  }
}
