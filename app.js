'use strict';
// const request = new XMLHttpRequest;
// request.open('GET', './data.json');
// request.send();
// request.addEventListener('load', function() {
//     // console.log(this.responseText);
//     const data = JSON.parse(this.response);
//     console.log(data);
// })
const main = document.querySelector('main');
const mainCommentsContainers = document.querySelectorAll(
  '.main__comment-container'
);
const allComments = document.querySelector('.comments');
const userLogin = document.getElementById('usernameInput');
const passwordLogin = document.getElementById('passwordInput');
const btnLogin = document.querySelector('.login__btn');
const btnsPlusVote = document.querySelectorAll('.plus__vote');
const btnsMinusVote = document.querySelectorAll('.minus__vote');
const votingCounters = document.querySelectorAll('.voting__counter');
const btnsReply = document.querySelectorAll('.reply-btn');
const textarea = document.querySelector('textarea');
const btnSendComment = document.querySelector('.send__comment');
const loggedAvatar = document.querySelector('.logged__avatar');
console.log(btnsMinusVote);

const Account = function (username, password, avatarSrc) {
  this.username = username;
  this.password = password;
  this.avatarSrc = avatarSrc;
};
const juliusomo = new Account(
  'juliusomo',
  1111,
  './images/avatars/image-juliusomo.png'
);
console.log(juliusomo);
const amyrobson = new Account(
  'amyrobson',
  2222,
  './images/avatars/image-amyrobson.png'
);
const ramsesmiron = new Account(
  'ramsesmiron',
  3333,
  './images/avatars/image-ramsesmiron.png'
);
const maxblagun = new Account(
  'maxblagun',
  4444,
  './images/avatars/image-maxblagun.png'
);
const accounts = [juliusomo, amyrobson, ramsesmiron, maxblagun];
console.log(accounts);

class Comment {
  replies = [];
  constructor(id, username, avatar, date, text, votes) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.date = date;
    this.text = text;
    this.votes = votes;
  }
  //   _addText() {
  //     this.text = textarea.value;
  //   }
}
class App {
  currentUser;
  comments = [];
  constructor() {
    btnLogin.addEventListener('click', this._Login.bind(this));
    btnSendComment.addEventListener('click', this._newComment.bind(this));
    btnsPlusVote.forEach(btn => {
      btn.addEventListener('click', () => {
        this._plusVote(2)
        console.log(btn.closest(document.querySelectorAll('.comment')));
      })
    })
  }

  _Login(e) {
    e.preventDefault();
    this.currentUser = accounts.find(acc => acc.username === userLogin.value);
    if (this.currentUser.password === +passwordLogin.value) {
      this._LoginInputsClear();
      this._changeLoggedAvatar();
      console.log(this.currentUser);

      //   main.style.opacity = 100;
    }
  }
  _LoginInputsClear() {
    passwordLogin.blur();
    userLogin.blur();
    passwordLogin.value = userLogin.value = '';
  }
  _changeLoggedAvatar() {
    loggedAvatar.src = this.currentUser.avatarSrc;
  }
  _newComment(e) {
    e.preventDefault();
    if(!this.currentUser) return;
    const id = Math.trunc(Math.random() * 100) + 1;
    const username = this.currentUser.username;
    const avatar = this.currentUser.avatarSrc;
    const date = new Date();
    const text = textarea.value;
    const votes = 0;
    let comment;

    if (!text) return;
    comment = new Comment(id, username, avatar, date.toISOString(), text, votes);
    

    // Add comment to all comments array
    this.comments.push(comment);

    // Adding comment
    this._addComment(comment);
    console.log(this.comments);

    // Clear textarea
    textarea.value = '';
  }
  _addComment(comment) {
    let html = `<div class="main__comment" data-id=${comment.id}>
    <div class="voting-wrapper">
      <div class="voting-box">
        <button class="plus__vote voting--btn">
          <img src="images/icon-plus.svg" alt="plus-vote-button" />
        </button>
        <span class="voting__counter">${comment.votes}</span>
        <button class="minus__vote voting--btn">
          <img src="images/icon-minus.svg" alt="minus-vote-button" />
        </button>
      </div>
    </div>
    <div class="comment__info-wrapper">
      <div class="comment__row1-box">
        <div class="row1__column1-box">
          <img src="${comment.avatar}" />
          <h1 class="nick">${comment.username}</h1>
          <h1 class="comment__created__at">${comment.date}</h1>
        </div>
        <button class="reply-btn">
          <img src="images/icon-reply.svg" alt="reply-icon" />
          <h1 class="Reply">Reply</h1>
        </button>
      </div>
      <div class="comment__row2-box">
        <p class="comment__text">
          ${comment.text}
        </p>
      </div>
    </div>
  </div>`;
    allComments.insertAdjacentHTML('beforeend', html);
  }
  _plusVote(id) {
    votingCounters.forEach(vote => {
      console.log(`jdfgfgj ${id}`);
    })
  }
}
const app = new App();