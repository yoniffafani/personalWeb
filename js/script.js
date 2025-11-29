// DIAGNOSTIC SCRIPT
const updateConsole = (id, message) => {
    const el = document.getElementById(id);
    if(el) {
        el.innerText = `[OK] ${message}`;
        el.classList.add('pass');
        const list = document.getElementById('console-list');
        list.scrollTop = list.scrollHeight;
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const id = entry.target.id;
            
            if(id === 'stats') updateConsole('log-stats', 'Metrics Loaded');
            if(id === 'experience') updateConsole('log-exp', 'Work History Verified');
            if(id === 'skills') updateConsole('log-skills', 'Stack Verified');
            if(id === 'contact') {
                const list = document.getElementById('console-list');
                const li = document.createElement('li');
                li.innerText = "READY FOR CONTACT...";
                li.classList.add('pass');
                list.appendChild(li);
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

window.onload = () => {
    setTimeout(() => {
        document.getElementById('log-init').innerText = '[OK] System Initialized';
        document.getElementById('log-init').classList.add('pass');
    }, 800);
};