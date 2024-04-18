$(document).ready(function() {
    $('.highlight').each(function() {
        var $this = $(this);
        var $button = $('<button class="copy-code-button" type="button">Copy</button>');

        $button.on('click', async function() {
            var codeToCopy = $this.find('code').text(); // 获取代码文本
            try {
                await navigator.clipboard.writeText(codeToCopy);
                $button.text('Copied!');
                setTimeout(() => $button.text('Copy'), 2000);
            } catch (err) {
                console.error('Error copying text: ', err);
            }
        });

        $this.prepend($button); 
    });
});
