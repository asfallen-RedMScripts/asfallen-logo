function rotateLogo() {
    const logo = document.querySelector('.logo');
    
    logo.style.animation = 'oldwest 6s ease-in-out infinite, doubleSpin 2s linear';
    
  
    setTimeout(() => {
        logo.style.animation = 'oldwest 6s ease-in-out infinite';
    }, 2000); 
}


document.addEventListener('DOMContentLoaded', () => {

    setTimeout(rotateLogo, 1000);
    
    setInterval(rotateLogo, 10000);
}); 