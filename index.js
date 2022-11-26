const menuBtn = document.querySelector('.bars');
const menuItems = document.querySelector('.itemslist');
const listItems = document.querySelectorAll('.listitem');
const navBar = document.querySelector('.navbarcontainer');
const crossButton = document.querySelectorAll('.bar');

let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuItems.classList.add('show');
    navBar.classList.add('show');
    crossButton.forEach((item) => item.classList.add('show'));

    listItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuItems.classList.remove('show');
    navBar.classList.remove('show');
    crossButton.forEach((item) => item.classList.remove('show'));
    listItems.forEach((item) => item.classList.remove('show'));

    showMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

function closeMenu() {
  menuBtn.classList.remove('close');
  menuItems.classList.remove('show');
  navBar.classList.remove('show');
  crossButton.forEach((item) => item.classList.remove('show'));
  listItems.forEach((item) => item.classList.remove('show'));

  showMenu = false;
}

listItems.forEach((item) => item.addEventListener('click', closeMenu));

const speakers = [
  {
    id: 1,
    image: './images/firstspeaker.jpg',
    name: 'KARASIRA CLARISSE',
    jop: 'Expert guest in music industry',
    speech: 'Experiences in leading different music studios.',

  },
  {
    id: 2,
    image: './images/secondspeaker.jpeg',
    name: 'ALYN SINGER',
    jop: 'Media CEO at New studios',
    speech: 'Starting a studio making music',

  },
  {
    id: 3,
    image: './images/thirdspeaker.jpg',
    name: 'Ineza Singer',
    jop: 'Upcoming artist',
    speech: 'The upside and downsides of beiing a singer',
  },
  {
    id: 4,
    image: './images/fourthspeaker.jpeg',
    name: 'LOUIS singer',
    jop: 'Award winer 2021',
    speech: 'How to make sure your music is heard',

  },
  {
    id: 5,
    image: './images/fifthspeaker.jpg',
    name: 'Bwiza Singer',
    jop: 'UNITED for Intercultural actions, Rwanda',
    speech: 'Making music that have impact on society',

  },
  {
    id: 6,
    image: './images/sixthspeaker.jpeg',
    name: 'Knowless singer',
    jop: 'Chairman of the Executive Board ',
    speech: 'New ways of making music that have better results',
  },
];
const speakerss = document.querySelector('.thirdsectionspeakers');

speakers.forEach((speaker) => {
  speakerss.innerHTML += `
   <div class="">
   <div class="thirdsectionspeaker">
     <div
       class="sectionthree__container__speakers__speaker__aside__left"
     >
       <div
         class="thirdsectionspeakeritem"
       >
         <img
           src="${speaker.image}"
           alt="speaker1"
           class="responsive thirdsectionspeakerimage"
         />
       </div>
     </div>
     <div
       class="thirdsectioncontent"
     >
       <h3>${speaker.name}</h3>
       <span
         >${speaker.jop}
       </span>
       <p>
         ${speaker.speech}
       </p>
     </div>
   </div>
  </div>
   `;
});
