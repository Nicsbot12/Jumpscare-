document.getElementById('startButton').addEventListener('click', function() {
    // Show the jumpscare elements
    const jumpscare = document.getElementById('jumpscare');
    jumpscare.classList.remove('hidden');

    // Play the sound
    const scarySound = document.getElementById('scarySound');
    scarySound.play();

    // Optionally, hide the jumpscare after a few seconds
    setTimeout(() => {
        jumpscare.classList.add('hidden');
    }, 5000); // Change 5000 to the desired duration in milliseconds
});
