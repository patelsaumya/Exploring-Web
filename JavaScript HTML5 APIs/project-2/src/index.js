import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript HTML5 APIs</h1>`;

const init = async () => {
    const permission = await Notification.requestPermission();
    switch(permission) {
        case 'granted': {
            console.log('Permission was granted!');
            break;
        }
        case 'denied': {
            console.log('Permission was denied');
            break;
        }
        default: {
            console.log('Permission was not granted or denied');
        }
    }

    const showNotification = () => {
        const notification = notify('🔊 Now Playing', 'Mr. Brightside - The Killers');
        if (notification) {
            notification.addEventListener('click', (e) => {
                window.parent.focus();
                e.target.close();
            })
        }
    }

    setTimeout(showNotification, 2000);
}

const notify = (title, body) => {
    if (Notification.permission === 'granted') {
        return new Notification(title, {
            body,
            icon: 'https://i.imgur.com/2Qs6HQp.png'
        });
    }
    return null;
}

// Feature Detection
if ('Notification' in window) {
    init();
}