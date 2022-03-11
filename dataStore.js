const instructorData = [
  {
    imgUrl: 'avatar.svg',
    title: 'Yochai Benkler',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    imgUrl: 'avatar1.svg',
    title: 'Maji Makaa Moto',
    role: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    imgUrl: 'avatar2.svg',
    title: 'Kichwa Maji',
    role: 'Berkman Professor of Regional Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    imgUrl: 'avatar3.svg',
    title: 'Quuen Elizabeth',
    role: 'Berkman Professor of Computer Science at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
];

const grid = document.querySelector('.speaker-section');
function createGridItem({
  imgUrl, title, role, info,
}) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('speaker-bar');
  gridItem.innerHTML = `
    <div class="speaker-image">
      <img src="general-assets/${imgUrl}" alt="${title}" />
    </div>
    <div class="speaker-info">
      <h3>${title}</h3>
      <h5>${role}</h5>
      <p class="italic text_primary styled_text">
      ${role}
      </p>
      <p>
      ${info}
      </p>
    </div>
    `;

  grid.appendChild(gridItem);
}

if (grid) {
  instructorData.forEach((instr) => {
    createGridItem(instr);
  });
}
