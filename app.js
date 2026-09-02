/* ==========================================================================
   UTKARSH × PARI — THE STORY (V3 PERFECT EDITION)
   Application Logic & 53 Real Photo Vault Integration
   ========================================================================== */

// --- 1. State & Constants ---
const TARGET_DATE = new Date('2021-10-16T00:00:00'); // Confession anniversary date

// Build complete Media Vault array with all 53 real photos of Utkarsh & Pari!
const mediaVault = [
    { type: 'image', url: 'assets/photo_53.jpg', title: 'Traditional Temple Date & Flowers 🌸' },
    { type: 'image', url: 'assets/photo_52.jpg', title: 'Shopping Mall Mirror Selfie' },
    { type: 'image', url: 'assets/photo_51.jpg', title: 'Sepia Mirror Hug' },
    { type: 'image', url: 'assets/photo_50.jpg', title: 'Sunglasses Filter Chill' },
    { type: 'image', url: 'assets/photo_49.jpg', title: 'Temple Wall Painting Date' },
    { type: 'image', url: 'assets/photo_48.jpg', title: 'Fairy Lights B&W Hug' },
    { type: 'image', url: 'assets/photo_47.jpg', title: 'Fairy Lights & Candles Heart ❤️' },
    { type: 'image', url: 'assets/photo_46.jpg', title: 'Cozy Candlelight Night' },
    { type: 'image', url: 'assets/photo_45.jpg', title: 'Bobi\'s Café Date & Helmet ☕' },
    { type: 'image', url: 'assets/photo_44.jpg', title: 'Romantic Kiss on Cheek' },
    { type: 'image', url: 'assets/photo_43.jpg', title: 'The Eyes, They Never Lie 👀' },
    { type: 'image', url: 'assets/photo_42.jpg', title: 'Utkarsh Head on Pari\'s Shoulder' },
    { type: 'image', url: 'assets/photo_41.jpg', title: 'Holding Hands Close-up' },
    { type: 'image', url: 'assets/photo_40.jpg', title: 'Galgotias College Signboard 🏛️' },
    { type: 'image', url: 'assets/photo_39.jpg', title: 'Hand Resting on Chest' },
    { type: 'image', url: 'assets/photo_38.jpg', title: 'Protective Hand Over Face' },
    { type: 'image', url: 'assets/photo_37.jpg', title: 'Cozy Bed Embrace' },
    { type: 'image', url: 'assets/photo_36.jpg', title: 'Retro Cam Filter "FEB 02 1987"' },
    { type: 'image', url: 'assets/photo_35.jpg', title: 'Funny Pen Video Call ✏️' },
    { type: 'image', url: 'assets/photo_34.jpg', title: 'Romantic Embrace in Yellow & Grey' },
    { type: 'image', url: 'assets/photo_33.jpg', title: 'Garden Walk & Smiles' },
    { type: 'image', url: 'assets/photo_32.jpg', title: 'Full Pose Together' },
    { type: 'image', url: 'assets/photo_31.jpg', title: 'Holi Colors Celebration 🎉' },
    { type: 'image', url: 'assets/photo_30.jpg', title: 'Eye to Eye Retro Filter' },
    { type: 'image', url: 'assets/photo_29.jpg', title: 'Winter Jacket Arm Hold' },
    { type: 'image', url: 'assets/photo_28.jpg', title: 'Piggyback Ride on Stairs 🎒' },
    { type: 'image', url: 'assets/photo_27.jpg', title: 'Elevator Flying T-Shirt Selfie' },
    { type: 'image', url: 'assets/photo_26.jpg', title: 'Shadow Selfie on Ground' },
    { type: 'image', url: 'assets/photo_25.jpg', title: 'Utkarsh & Pari Portrait' },
    { type: 'image', url: 'assets/photo_24.jpg', title: 'Red Rose Wall Confession 🌹' },
    { type: 'image', url: 'assets/photo_23.jpg', title: 'Ur Pati 🌻 Sleeping Photo' },
    { type: 'image', url: 'assets/photo_22.jpg', title: 'Galgotias Campus Walk 🏫' },
    { type: 'image', url: 'assets/photo_21.jpg', title: 'Funny Dog Filter Call 🐶' },
    { type: 'image', url: 'assets/photo_20.jpg', title: 'Late Night Call Inset' },
    { type: 'image', url: 'assets/photo_19.jpg', title: 'School Days Purple Uniform 💜' },
    { type: 'image', url: 'assets/photo_18.jpg', title: 'Polka Dot Dress Selfie' },
    { type: 'image', url: 'assets/photo_17.jpg', title: 'Pari Pointing at Video Call 📱' },
    { type: 'image', url: 'assets/photo_16.jpg', title: 'Cozy Blanket Snuggle' },
    { type: 'image', url: 'assets/photo_15.jpg', title: 'Amusement Park Carnival Selfie' },
    { type: 'image', url: 'assets/photo_14.jpg', title: '#JANAM Ink Tattoo on Arm' },
    { type: 'image', url: 'assets/photo_13.jpg', title: 'School Uniform Snapchat' },
    { type: 'image', url: 'assets/photo_12.jpg', title: 'Grey T-Shirt Snapchat Memory' },
    { type: 'image', url: 'assets/photo_11.jpg', title: 'School Days Memories' },
    { type: 'image', url: 'assets/photo_10.jpg', title: 'Black Hoodie Pose' },
    { type: 'image', url: 'assets/photo_09.jpg', title: 'Kalava Threads Hand Hold' },
    { type: 'image', url: 'assets/photo_08.jpg', title: 'Blue Shirt Mirror Flex' },
    { type: 'image', url: 'assets/photo_07.jpg', title: 'School Uniform & Hairband' },
    { type: 'image', url: 'assets/photo_06.jpg', title: 'Mirror Hug from Behind' },
    { type: 'image', url: 'assets/photo_05.jpg', title: 'Blushing Red T-Shirt Moment' },
    { type: 'image', url: 'assets/photo_04.jpg', title: 'School Days Memories' },
    { type: 'image', url: 'assets/photo_03.jpg', title: 'Brick Wall Love' },
    { type: 'image', url: 'assets/photo_02.jpg', title: 'Pen Filter Video Call' },
    { type: 'image', url: 'assets/photo_01.jpg', title: 'Utkarsh & Pari Forever' }
];

// Helper for playing sound effects safely
function playSynthBeep(freq, duration = 0.15) {
    try {
        if (!audioCtx) {
            const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
            if (AudioCtxClass) audioCtx = new AudioCtxClass();
        }
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
        // Silently ignore audio context errors
    }
}

// --- 2. Password Unlock Logic ---
function handleUnlock(e) {
    if (e) e.preventDefault();
    const inputEl = document.getElementById('passInput');
    const input = (inputEl ? inputEl.value : '').trim().toLowerCase();
    const errorDiv = document.getElementById('passError');
    const lockCard = document.querySelector('.lock-card');

    const validPasswords = ['16-10', '1610', '16/10', '16.10', '16 10', '16-10-2021', '16/10/2021', '16102021', '16-10-21', '16/10/21', '16 oct', '16 october'];

    if (validPasswords.includes(input) || (input.includes('16') && input.includes('10'))) {
        if (errorDiv) errorDiv.textContent = '';
        try { localStorage.setItem('up_unlocked', 'true'); } catch (err) {}
        
        playSynthBeep(440, 0.1);
        setTimeout(() => playSynthBeep(880, 0.2), 150);

        const pwScreen = document.getElementById('passwordScreen');
        if (pwScreen) {
            pwScreen.style.opacity = '0';
            pwScreen.style.transition = 'opacity 0.6s ease';
        }
        
        setTimeout(() => {
            if (pwScreen) pwScreen.classList.add('hidden');
            const appShell = document.getElementById('appShell');
            if (appShell) appShell.classList.remove('hidden');
            initApp();
        }, 600);
    } else {
        if (errorDiv) errorDiv.textContent = 'Incorrect password. (Hint: 16-10)';
        if (lockCard) lockCard.classList.add('shake');
        playSynthBeep(200, 0.3);
        setTimeout(() => {
            if (lockCard) lockCard.classList.remove('shake');
        }, 400);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('up_unlocked') === 'true') {
        document.getElementById('passwordScreen').classList.add('hidden');
        document.getElementById('appShell').classList.remove('hidden');
        initApp();
    }
});

// --- 3. App Initialization ---
async function initApp() {
    await initDB(); // Initialize IndexedDB persistent storage
    startLiveCounter();
    initScrollEffects();
    initCanvasParticles();
    initSlideshow();
    initDropzone();
    initAudioSystem();
    initQuiz();
}

// --- 4. Live Relationship Counter ---
function startLiveCounter() {
    function updateCounter() {
        const now = new Date();
        const diff = now - TARGET_DATE;

        if (diff > 0) {
            const seconds = Math.floor(diff / 1000) % 60;
            const minutes = Math.floor(diff / (1000 * 60)) % 60;
            const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
            const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
            
            const years = Math.floor(daysTotal / 365);
            const months = Math.floor((daysTotal % 365) / 30);
            const days = (daysTotal % 365) % 30;

            document.getElementById('cYears').textContent = years;
            document.getElementById('cMonths').textContent = months;
            document.getElementById('cDays').textContent = days;
            document.getElementById('cHours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('cMins').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('cSecs').textContent = seconds.toString().padStart(2, '0');
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}

// --- 5. Scroll Progress Bar & Reveal Animations ---
function initScrollEffects() {
    const progressBar = document.getElementById('progressBar');
    const reveals = document.querySelectorAll('.reveal');

    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const progress = (currentScroll / totalScroll) * 100;
        progressBar.style.width = `${progress}%`;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    });
}

function scrollToSection(id) {
    const sec = document.getElementById(id);
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

// --- 6. Ambient Floating Canvas Particles ---
function initCanvasParticles() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = `rgba(229, 9, 20, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// --- 7. Slideshow Theatre & Soft Music Engine ---
let currentSlideIdx = 0;
let slideshowTimer = null;
let isSlideshowPlaying = true;
let isSoftMusicPlaying = true;

// Get photos-only array for the Slideshow Theatre
function getPhotoVault() {
    return mediaVault.filter(m => m.type === 'image');
}

function initSlideshow() {
    renderThumbnails();
    showSlide(0);
    startSlideshowTimer();
}

function showSlide(idx) {
    const photos = getPhotoVault();
    if (photos.length === 0) return;

    if (idx < 0) idx = photos.length - 1;
    if (idx >= photos.length) idx = 0;
    currentSlideIdx = idx;

    const item = photos[idx];
    const imgEl = document.getElementById('slideImg');
    const badgeEl = document.getElementById('slideBadge');
    const titleEl = document.getElementById('slideTitle');

    if (imgEl) {
        imgEl.style.opacity = '0';
        imgEl.style.transform = 'scale(0.96)';
        setTimeout(() => {
            imgEl.src = item.url;
            imgEl.style.opacity = '1';
            imgEl.style.transform = 'scale(1)';
        }, 200);
    }

    if (badgeEl) badgeEl.textContent = `Photo ${idx + 1} of ${photos.length}`;
    if (titleEl) titleEl.textContent = item.title;

    // Update active thumbnail
    document.querySelectorAll('.thumb-item').forEach((thumb, i) => {
        if (i === idx) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlideIdx + 1);
}

function prevSlide() {
    showSlide(currentSlideIdx - 1);
}

function toggleSlideshow() {
    isSlideshowPlaying = !isSlideshowPlaying;
    const btn = document.getElementById('slideshowPlayBtn');
    if (isSlideshowPlaying) {
        btn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Slideshow`;
        startSlideshowTimer();
    } else {
        btn.innerHTML = `<i class="fa-solid fa-play"></i> Play Slideshow`;
        clearInterval(slideshowTimer);
    }
}

function startSlideshowTimer() {
    clearInterval(slideshowTimer);
    slideshowTimer = setInterval(() => {
        if (isSlideshowPlaying) {
            nextSlide();
        }
    }, 3800);
}

function renderThumbnails() {
    const strip = document.getElementById('slideThumbs');
    if (!strip) return;
    strip.innerHTML = '';

    const photos = getPhotoVault();

    photos.forEach((m, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `thumb-item ${idx === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
            showSlide(idx);
        };

        thumb.innerHTML = `<img src="${m.url}" alt="${m.title}" loading="lazy">`;
        strip.appendChild(thumb);
    });
}

function toggleSoftMusic() {
    isSoftMusicPlaying = !isSoftMusicPlaying;
    const label = document.getElementById('musicBtnLabel');
    const eq = document.getElementById('eqBars');
    
    if (isSoftMusicPlaying) {
        if (label) label.textContent = 'Soft Music: ON';
        if (eq) eq.classList.add('playing');
        isAudioPlaying = true;
        startSoftMusic();
    } else {
        if (label) label.textContent = 'Soft Music: OFF';
        if (eq) eq.classList.remove('playing');
        isAudioPlaying = false;
        stopSoftMusic();
    }
}

// --- IndexedDB Persistent Storage for User Uploaded Videos & Photos ---
let db = null;

function initDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open('FiveYearsVaultDB', 1);
        
        req.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('userMedia')) {
                database.createObjectStore('userMedia', { keyPath: 'id', autoIncrement: true });
            }
        };

        req.onsuccess = (e) => {
            db = e.target.result;
            loadSavedMediaFromDB().then(resolve);
        };

        req.onerror = (e) => {
            console.error('IndexedDB error:', e);
            resolve();
        };
    });
}

function saveMediaToDB(file) {
    if (!db) return;
    const tx = db.transaction('userMedia', 'readwrite');
    const store = tx.objectStore('userMedia');
    
    const record = {
        name: file.name,
        type: file.type.startsWith('video') ? 'video' : 'image',
        blob: file,
        timestamp: Date.now()
    };
    
    store.add(record);
}

function loadSavedMediaFromDB() {
    return new Promise((resolve) => {
        if (!db) return resolve();
        
        const tx = db.transaction('userMedia', 'readonly');
        const store = tx.objectStore('userMedia');
        const req = store.getAll();

        req.onsuccess = () => {
            const savedItems = req.result || [];
            savedItems.forEach(item => {
                const url = URL.createObjectURL(item.blob);
                mediaVault.unshift({
                    type: item.type,
                    url: url,
                    title: item.name + ' (Saved)'
                });
            });
            renderThumbnails();
            renderVideoGrid();
            if (savedItems.length > 0) showSlide(0);
            resolve();
        };

        req.onerror = () => resolve();
    });
}

function initDropzone() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');

    if (!dropzone) return;

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });
}

function renderVideoGrid() {
    const grid = document.getElementById('videoGrid');
    if (!grid) return;

    const videos = mediaVault.filter(m => m.type === 'video');

    // Remove old video tiles, keep default upload slot
    grid.querySelectorAll('.video-card-tile').forEach(el => el.remove());

    videos.forEach(v => {
        const tile = document.createElement('div');
        tile.className = 'video-card-tile';
        tile.onclick = () => openLightbox(v);

        tile.innerHTML = `
            <video src="${v.url}"></video>
            <div class="video-card-overlay">
                <div class="video-play-badge"><i class="fa-solid fa-play"></i></div>
                <div class="video-card-title">${v.title}</div>
            </div>
        `;
        grid.prepend(tile);
    });
}

function handleFiles(files) {
    Array.from(files).forEach(file => {
        saveMediaToDB(file); // Save to persistent IndexedDB storage
        const url = URL.createObjectURL(file);
        const type = file.type.startsWith('video') ? 'video' : 'image';
        mediaVault.unshift({ type, url, title: file.name });
    });
    renderThumbnails();
    renderVideoGrid();
    showSlide(0);
    triggerFireworks();
}

// Lightbox Controls
function openLightbox(item) {
    const modal = document.getElementById('lightboxModal');
    const container = document.getElementById('lightboxContent');
    
    if (item.type === 'image') {
        container.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            <div class="lightbox-caption">${item.title}</div>
        `;
    } else {
        container.innerHTML = `<video src="${item.url}" controls autoplay></video>`;
    }
    
    modal.classList.add('open');
}

function closeLightbox(e) {
    if (!e || e.target.id === 'lightboxModal' || e.target.classList.contains('lightbox-close')) {
        document.getElementById('lightboxModal').classList.remove('open');
    }
}

// --- 8. Ambient Soft Romantic Music Synthesizer & Audio Engine ---
let audioCtx = null;
let isAudioPlaying = false;
let ambientInterval = null;
let customAudioEl = null;

function initAudioSystem() {
    const btn = document.getElementById('audioToggleBtn');
    const eq = document.getElementById('eqBars');
    customAudioEl = document.getElementById('customAudio');

    btn.addEventListener('click', () => {
        isAudioPlaying = !isAudioPlaying;
        if (isAudioPlaying) {
            eq.classList.add('playing');
            startSoftMusic();
        } else {
            eq.classList.remove('playing');
            stopSoftMusic();
        }
    });
}

function startSoftMusic() {
    if (customAudioEl && customAudioEl.src) {
        customAudioEl.play().catch(e => console.log('Audio play blocked:', e));
        return;
    }

    // Play soft romantic arpeggios continuously
    stopSoftMusic();
    playRomanticArpeggio();
    ambientInterval = setInterval(() => {
        if (isAudioPlaying) playRomanticArpeggio();
    }, 4500);
}

function stopSoftMusic() {
    if (ambientInterval) clearInterval(ambientInterval);
    if (customAudioEl) customAudioEl.pause();
}

function playSynthNote(freq, duration, gainVal = 0.04) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle'; // Soft warm tone
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (err) {}
}

function playRomanticArpeggio() {
    // Beautiful soft romantic chord progression (Cmaj7 -> Am7 -> Fmaj7 -> G)
    const chordProgressions = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 349.23], // Fmaj7
        [196.00, 246.94, 293.66, 392.00]  // G
    ];

    const chosenChord = chordProgressions[Math.floor(Math.random() * chordProgressions.length)];
    chosenChord.forEach((note, i) => {
        setTimeout(() => {
            if (isAudioPlaying) playSynthNote(note, 3.0, 0.035);
        }, i * 350);
    });
}

// --- 9. Love Quiz Logic ---
const quizData = [
    {
        q: "What was the date of Pari's love confession?",
        opts: ["30 Nov 2020", "16 Oct 2021", "14 Feb 2022", "11 Nov 2021"],
        ans: 1
    },
    {
        q: "Where did Utkarsh see Pari for the first time?",
        opts: ["Ambika Marriage Hall", "College Library", "Tuition Center", "Front Door"],
        ans: 0
    },
    {
        q: "What secret ritual do we share every single day?",
        opts: ["11:11 Messages", "5:00 AM Call", "Snapchat Streak", "Late Night Movies"],
        ans: 0
    }
];

let currentQ = 0;
let score = 0;

function initQuiz() {
    loadQuestion();
}

function loadQuestion() {
    if (currentQ >= quizData.length) {
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('quizResult').classList.remove('hidden');
        document.getElementById('resultText').textContent = `You scored ${score}/${quizData.length}! You remember every single detail of our 5 years! ❤️`;
        triggerFireworks();
        return;
    }

    const q = quizData[currentQ];
    document.getElementById('qNum').textContent = `Question ${currentQ + 1} of ${quizData.length}`;
    document.getElementById('qText').textContent = q.q;

    const optsContainer = document.getElementById('qOptions');
    optsContainer.innerHTML = '';

    q.opts.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx, q.ans);
        optsContainer.appendChild(btn);
    });
}

function selectOption(selected, correct) {
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach((b, i) => {
        b.disabled = true;
        if (i === correct) b.classList.add('correct');
        if (i === selected && selected !== correct) b.classList.add('wrong');
    });

    if (selected === correct) {
        score++;
        playSynthBeep(600, 0.2);
    } else {
        playSynthBeep(250, 0.3);
    }

    setTimeout(() => {
        currentQ++;
        loadQuestion();
    }, 1200);
}

function restartQuiz() {
    currentQ = 0;
    score = 0;
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    loadQuestion();
}

// --- 10. Fireworks Celebration Trigger ---
function triggerFireworks() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}
