'use strict';

const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const urlDefault = "https://graph.instagram.com/me/media";

const campos = "?fields=media_type,media_url,caption,permalink&access_token=";

const token = "IGQWRQd09nZA3lkaVROY1ZA2VlBjTnlXc2NORjVSdkVaM3FCYVFmSTlOdV95aTBfTnJNYm0wbS1mRmluSk9RNjhPaHhnd3hTcDhVbGY0c282djlWb3MtTTlzNXlYSEl5VG9venhEb0R0YUdBQ2NHck94aEx3ZAmYtNTQZD";

var url = urlDefault + campos + token;

fetch(url)
  .then(res => res.json())
  .then(data => CrearHtml(data.data));

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

function CrearHtml(data) {
  for (const img of data) {
    // insertarndo html
    galery.innerHTML += `
        <div class="image overflow">
            <img loading="lazy" src="${img.media_url}" alt="">
            <div class="opacity-hover">
                <a href="${img.permalink}" class="caption" target="_blank">
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
