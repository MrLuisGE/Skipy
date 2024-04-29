window.addEventListener('load', () => {
    const steps = document.querySelectorAll('.step');
    console.log(steps.length); // This should output the number of step elements

    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('visible'); // Apply 'visible' class to trigger animation
        }, index * 400); 
    });
});
