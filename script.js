let displays = document.getElementById('display');
let btns = Array.from(document.getElementsByClassName('btn'));

btns.map(btn => {

    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'RESET':
                displays.innerText = '';
                break;
            case 'Del':
                displays.innerText = displays.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    displays.innerText = eval(displays.innerText);
                } catch {
                    displays.innerText = 'Error!';
                }
                break;
            default:
                displays.innerText += e.target.innerText;
        }
    });
});