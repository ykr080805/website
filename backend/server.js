import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Centralized database for easy editing
const db = {
  hero: {
    greeting: 'To my favorite person, Manvitha',
    subtitle: 'A little corner of the internet, completely dedicated to you.',
    description: 'I built this website because I wanted to create something special that perfectly captures why you mean so much to me. Take a look around—this is our journey, my absolute favorite things about you, and all the reasons I love you.'
  },
  qualities: [
    { id: 1, title: 'Your Cuteness', description: 'The little things you do that instantly melt my heart.', memory: 'Literally every single day. There is always some tiny adorable thing you do that makes me stop and just admire you.', icon: 'sparkles' },
    { id: 2, title: 'Your Empathy', description: 'The fiercely beautiful way you protect and care for the people you love.', memory: 'You care so deeply about the people you consider yours. If someone is in your circle, you will go to the ends of the earth for them.', icon: 'heart' },
    { id: 3, title: 'Your Unwavering Support', description: 'How you are always the light in my darkest moments.', memory: 'Whenever I feel low and come to you, you instantly give me a spark of hope. Thank you for always staying by my side during my lowest moments.', icon: 'sun' },
    { id: 4, title: 'Your Smile', description: 'The only thing I need to see to instantly make a bad day better.', memory: 'Our unofficial date in Bangalore (iykyk). I had never seen you laugh that comfortably, and that was the first hint 👀👀', icon: 'smile' },
    { id: 5, title: 'Your Patience', description: 'The calm and gentle way you navigate my chaotic moments without ever losing your cool.', memory: 'Whenever I was going through something chaotic, you were always so patient and calm. Even regarding the whole "no reply" part, you were incredibly patient and still talked to me. Thank you for that—you know I am trying to change.', icon: 'anchor' },
    { id: 6, title: 'Your Independence', description: 'How fiercely capable you are of handling the world entirely on your own.', memory: 'Watching you confidently navigate life leaves me in awe. But the best part is that all of that independence is for when you are not with me—because when you are with me, you are my stupid Labubu 😊.', icon: 'star' },
    { id: 7, title: 'Your Humour', description: 'The effortless way we sync up and just get each other.', memory: 'Remember before we were even together, how we used to just look at each other 👀 and know exactly what the other was thinking? We were literally in sync for every single word. We would just lock eyes and burst out laughing. We\'ve always had that magic.', icon: 'laugh' },
    { id: 8, title: 'Your Jealousy', description: 'The cute, subtle way we both get protective over each other.', memory: 'Whenever I see you talking to someone else, I admit I get a little jealous. I know you feel the exact same way about me even when you try to hide it—I completely sensed it during our hangout time 👀👀. It just reminds me how much we care.', icon: 'flame' },
    { id: 9, title: 'Your Fragrance', description: 'The sweet scent that makes me love being around you.', memory: 'I genuinely love being around you, especially because you always wear that vanilla body mist. Even though you know my absolute favorite is chocolate 🍫, and you deliberately never wear it just to tease me 🙄... I wouldn\'t trade your vanilla scent for the world.', icon: 'flower' },
    { id: 10, title: 'Your Responsibility', description: 'The seamless way you take ownership of things and complete them perfectly.', memory: 'I am always in awe of the way you take up things and see them through to the very end.', icon: 'shield-check' },
    { id: 11, title: 'Your Accountability', description: 'How you never run away from hard moments and always take total ownership.', memory: 'When our chat turned into an argument, you immediately came to visit me so we could fix it together. And on your birthday, you took full responsibility for the bill without ever hiding from your parents. You face things head on.', icon: 'target' }
  ],
  prosAndCons: [
    { pro: 'Even the smallest moments with you feel like something I want to hold on to forever — a laugh, a look, a quiet second.', con: 'Which means time moves annoyingly fast whenever I am with you. It\'s unfair, honestly.' },
    { pro: 'You make home feel less like a place and more like a feeling — and that feeling is you.', con: 'Missing you between every hangout is genuinely painful. You have completely ruined my alone time.' },
    { pro: 'We always find our way back to each other, no matter how bad the fight gets. Always.', con: 'But we really need to stop fighting over text. It makes everything ten times worse and you know it.' },
    { pro: 'The first hug when we hang out sometimes makes the entire week worth waiting for — it instantly resets everything.', con: 'Which also means the goodbye is absolutely the hardest part of every single day.' },
    { pro: 'Because of you, I even started throwing my chocolate wrappers in the dustbin 😊 — you are quietly making me a better person without even trying.', con: 'But you still refuse to wear chocolate scent, so the discipline is completely one-sided. 😑' },
    { pro: 'The way we just lock eyes and already know what the other is thinking — I have never had that with anyone else, ever.', con: 'Except when I genuinely cannot tell if you are joking or are actually annoyed. That one always gets me.' },
    { pro: 'The silence between us is never actually silent. It is warm and comfortable and somehow says everything.', con: 'That said, we are both still absolutely terrible at saying sorry first. We just sit in the silence instead.' },
    { pro: 'Every single memory we make together somehow feels like the best memory of my life so far.', con: 'We are still figuring out the whole "no reply" thing — but honestly, we are getting there. 😅' }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop'
  ],
  birthday: {
    message: "Happy Birthday manu! I hope this year brings you as much joy as you've brought into my life. I love you endlessly. ❤️",
  },
  timeline: [
    { date: "9th February 2024", title: "The Day It All Started", description: "The Chandubi trip. We didn't exchange a single word — not one. But something in that silence told me there was going to be something between us. I just knew.", image: '/photos/chandubi.jpeg' },
    { date: "Early 2024", title: "The Physics Explanation Day", description: "From that day, I started going to the library hoping you'd be there. Most of the time, I was disappointed. But I kept going anyway.", image: null },
    { date: "End of Sem 2", title: "The Gang — Veena & The Four of Us", description: "The last day of Sem 2. Being part of our so-called gang with Veena and the others. I started slowly realising we were becoming closer, and I didn't mind at all.", image: null },
    { date: "2024", title: "The Unexpected Shillong Trip", description: "We were both on the same scooty and then — you left. I understood the reason, I really did. But I was genuinely disappointed 😔. Still, it was the kind of disappointment that makes you realise you care more than you thought.", image: '/photos/shillong.jpeg' },
    { date: "Sem 4", title: "The Confusion & The WISH Moment", description: "By Sem 4, I could feel us getting closer. But I had no idea what you were feeling and that confusion was very real. The one thing I was sure of — I had never seen you that genuinely happy as when you found out you got selected for the WISH program. I was so happy for you. Also, thanks for the BR party. ", image: null },
    { date: "2024", title: "The Bangalore Coincidence", description: "I still don't know if it was coincidence or destiny — probably both. Of all the places and all the people, there you were. I still think about why I didn't say it that day. It was so romantic, the setting was perfect. But the best part always comes last, iykyk. We should have stayed longer. And yes — that dessert. What was it called again? 👀", image: '/photos/banglore.jpeg' },
    { date: "30th July 2025", title: "The First Hangout", description: "Genuinely did not expect you to show up alone that day. And then we just... didn't stop. Six hours straight — roaming, talking, laughing — non-stop till 4 or 5 in the morning. I don't think I was ever that present in a moment before.", image: null },
    { date: "15th August", title: "Bhutan, Stars & A Kinder Joy", description: "I was waiting for your call after the parade. Then out of nowhere you asked me to come along to Bhutan — and you already knew I'd say yes. (Not for Bhutan. For you.) We had our first accident together, survived it, and on the way back the road was quiet and the stars were out and I gave you a Kinder Joy. iykyk 🌟", image: '/photos/bhutan.jpeg' },
    { date: "16th August", title: "Krishnashtami — Rain, a Bus Stop & Truth or Dare", description: "I was literally around you the whole day. Even fell on the road going to the temple — smooth 😅. Inside the temple everyone was pairing up and I was trying not to look as obvious as I felt. Then after, we sat by the lake. Rain started. We moved to the bus stop. The weather was perfect, the silence was comfortable, and I kept my hand on your shoulder. We played truth or dare and I just kept learning more about you.", image: null },
    { date: "22nd August", title: "4:45 PM — Only Whom I Love", description: "I was so nervous I almost didn't show up. I had rehearsed it a hundred times in my head — how to say it, when to say it. We roamed, talked about random things, sat by the lake with odomos 👀. Then you moved to my left and rested your head on my shoulder, and asked would you let anybody rest on your shoulder. My whole body was shaking. At 4:45 PM, I said it — 'Only whom I love.' And that was it.", image: null },
    { date: "25th August", title: "The Beginning of Us", description: "We were walking around, figuring out what we were to each other. I was sure. You were thinking. We stopped at a bus stop — the serpentine one 👀 — and in the silence between the words, we just looked at each other. And then our first kiss. We said we'd count them. We lost count a long time ago 👀...", image: null }
  ],
  bucketList: [
    { title: "6-month world trip — Bali, Switzerland, Japan in spring... and everywhere else", done: false },
    { title: "Go on a proper long drive in full biker gear", done: false },
    { title: "Get a dog (preferably)", done: false },
    { title: "Grow old together", done: false },
    { title: "Fall in love every day", done: true }
  ]
};

// API Endpoint to get all content
app.get('/api/content', (req, res) => {
  // Simulating a real network delay for the aesthetic loading screen
  setTimeout(() => {
    res.json(db);
  }, 1500);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Serve frontend in production automatically
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`[Server] API is running and serving content on http://localhost:${PORT}`);
});
