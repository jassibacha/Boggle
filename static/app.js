async function submitForm() {
    const $form = $('#guess-form');

    // add an empty set called words

    // Form submission listener
    $form.on('submit', async (event) => {
        event.preventDefault(); // Prevent page refresh

        const $word = $('.word');
        const word = $word.val(); // Get the guessed word
        if (!word) return; // if no word stop

        // check if words already has the word const, if so show an error message

        const resp = await axios.post('/check-word', { word: word });

        console.log(resp); // find the result in the data

        // if goes here
        // 'not-word'
        // 'not-on-board'
        // else add the word
    });
}

submitForm();
