document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cta-button').addEventListener('click', () => {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      e.target.reset();
    });
  });