const carouselIndicators = document.querySelector('.carousel-indicators');
const carouselInner = document.querySelector('.carousel-inner');

// Replace 'path/to/imageX.jpg' with the actual paths to your images
const images = [
  '{% static "HKH1.JPG" %}',
  '{% static "HKH2.JPG" %}',
  '{% static "HKH3.JPG" %}',
  '{% static "HKH4.JPG" %}',
  '{% static "HKH5.JPG" %}',
  '{% static "HKH6.JPG" %}',
  '{% static "HKH7.JPG" %}',
  '{% static "HKH8.JPG" %}',
  '{% static "HKH9.JPG" %}',
  '{% static "HKH10.JPG" %}',
  '{% static "HKH11.JPG" %}',
  '{% static "HKH12.JPG" %}',
  '{% static "HKH13.JPG" %}',
];

images.forEach((image, index) => {
  // Create carousel indicators
  const indicator = document.createElement('li');
  indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
  indicator.setAttribute('data-bs-slide-to', index);
  if (index === 0) indicator.classList.add('active');
  carouselIndicators.appendChild(indicator);

  // Create carousel items
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) carouselItem.classList.add('active');

  const img = document.createElement('img');
  img.src = image;
  img.classList.add('d-block', 'w-100');
  img.alt = `Slide ${index + 1}`;

  carouselItem.appendChild(img);
  carouselInner.appendChild(carouselItem);
});
