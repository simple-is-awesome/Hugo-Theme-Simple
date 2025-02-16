$(document).ready(function() {
    $('.highlight').each(function() {
        var $this = $(this);
        var $button = $('<button class="copy-code-button" type="button">Copy</button>');

        $button.on('click', async function() {
            // 获取代码内容，排除行号
            var codeToCopy = '';
            
            // 检查是否使用了表格布局（带行号的情况）
            if ($this.find('table').length > 0) {
                // 从第二个单元格（代码内容）获取文本
                $this.find('td:not(.lntd:first-child)').each(function() {
                    codeToCopy += $(this).text();
                });
            } else {
                // 没有行号的情况，直接获取代码
                codeToCopy = $this.find('code').text();
            }
            
            try {
                await navigator.clipboard.writeText(codeToCopy);
                $button.text('Copied!');
                $button.addClass('copied');
                setTimeout(() => {
                    $button.text('Copy');
                    $button.removeClass('copied');
                }, 2000);
            } catch (err) {
                console.error('Error copying text: ', err);
                $button.text('Error!');
                setTimeout(() => $button.text('Copy'), 2000);
            }
        });

        $this.prepend($button); 
    });
});
