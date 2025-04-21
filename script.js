const signUpButton = document.getElementById('signUp');
const signInButton = document.querySelector('#signIn');
const container = document.getElementById('container');
const scrollBox = document.querySelector('section');
// const breakPoint = document.querySelector('footer')
// const maxScroll = 800;
// let lastScroll = 0;

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

    scrollBox.addEventListener('scroll', function() {
        if (this.scrollTop > 900) {
          this.scrollTop = 900; // Prevents scrolling beyond 500px
        }
      });