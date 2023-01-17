let text = document.getElementById('textBody1')
let contactBtn = document.getElementById('contactBtn');
let homeBtn = document.getElementById('homeBtn');
contactBtn.addEventListener('click', () => {
    text.innerHTML = 'You can contact me via email at spurbey3@gatech.edu!'
})

homeBtn.addEventListener('click', () =>{
    text.innerHTML = 'My name is Saksham Purbey. I am a second-year student majoring in Computer Science with threads in Intelligence and Info Internetworks. Originally from Alpharetta, I now live in Cumming, Georgia. I am really pasionate about joining this club because I wish to use my technical skills to benefit my society. I believe that technology, if used in the right way, can greatly benefit people and improve their standard of liing; therefore, by joining this club, I wish to make a positive difference in the lives of other people. I am always excited to meet new people, so feel free to reach out!'
})