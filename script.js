function selectMentor(mentorName) {
    sessionStorage.setItem('selectedMentor', mentorName);
    window.location.href = 'mentor.html';
  }

  const mentorList = document.getElementById('mentor-list');
const selectedMentor = sessionStorage.getItem('selectedMentor');

const mentors = [
  'B.Tech',
  'BE',
  'M.Tech',
  'MS',
  'ECE',
  'Mechanical'
  // Add more mentors as needed
];

mentors.forEach(mentor => {
  const mentorItem = document.createElement('li');
  mentorItem.textContent = mentor;
  if (mentor === selectedMentor) {
    mentorItem.classList.add('selected');
  }
  mentorList.appendChild(mentorItem);
});




