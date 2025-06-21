const form = document.getElementById('reservation-form');
const message = document.getElementById('message');
const listSection = document.getElementById('reservations-list');
let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
function render() {
  if (!reservations.length) return;
  const html = reservations.map(r =>
    `<div class="res-card"><strong>${r.name}</strong><br>${r.room_type} | od ${r.checkin} do ${r.checkout}</div>`
  ).join('');
  listSection.innerHTML = html;
  document.querySelectorAll('.res-card').forEach(card => card.style.display='block');
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const newRes = { name: data.get('name'), email: data.get('email'), checkin: data.get('checkin'), checkout: data.get('checkout'), room_type: data.get('room_type'), created_at: new Date().toISOString() };
  reservations.push(newRes);
  localStorage.setItem('reservations', JSON.stringify(reservations));
  message.textContent = 'Rezerwacja zakończona sukcesem!'; message.classList.remove('hidden');
  form.reset(); render();
});
render();

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const btn  = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });
</script>
