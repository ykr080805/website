# Journey Page — Update Instructions

This file contains the real milestones for the Journey page.
Each section maps to one timeline card in the website.

Update the `timeline` array in:
- `backend/server.js` → inside `const data = { timeline: [...] }`
- `frontend/src/data/content.ts` → `export const timelineContent = [...]`

Each entry follows this shape:
```ts
{ date: "string", title: "string", description: "string", image: '' }
```

Replace `image: ''` with the actual photo URL/path once you have the photos.

---

## Milestones

### 1. February 9, 2024 — Chandubi Trip
```ts
{
  date: "9th February 2024",
  title: "The Day It All Started",
  description: "The Chandubi trip. We didn't exchange a single word — not one. But something in that silence told me there was going to be something between us. I just knew.",
  image: ''
}
```
📸 *Add a photo from the Chandubi trip here.*

---

### 2. The Physics Explanation Day
```ts
{
  date: "Early 2024",
  title: "The Physics Explanation Day",
  description: " From that day, I started going to the library hoping you'd be there. Most of the time, I was disappointed. But I kept going anyway.",
  image: ''
}
```
📸 *Library photo or any candid from that period.*

---

### 3. Last Day of Sem 2 — The Gang
```ts
{
  date: "End of Sem 2",
  title: "The Gang — Veena & The Four of Us",
  description: "The last day of Sem 2. Being part of our so-called gang with Veena and the others. I started slowly realising we were becoming closer, and I didn't mind at all.",
  image: ''
}
```
📸 *Group photo from Sem 2 / last day.*

---

### 4. The Shillong Trip
```ts
{
  date: "2024",
  title: "The Unexpected Shillong Trip",
  description: "We were both on the same scooty and then — you left. I understood the reason, I really did. But I was genuinely disappointed 😔. Still, it was the kind of disappointment that makes you realise you care more than you thought.",
  image: ''
}
```
📸 *Shillong trip photo.*

---

### 5. Sem 4 — The WISH Program
```ts
{
  date: "Sem 4",
  title: "The Confusion & The WISH Moment",
  description: "By Sem 4, I could feel us getting closer. But I had no idea what you were feeling and that confusion was very real. The one thing I *was* sure of — I had never seen you that genuinely happy as when you found out you got selected for the WISH program. I was so happy for you. Also, thanks for the BR party. You didn't have to, but you did. 🥹",
  image: ''
}
```
📸 *WISH program or BR party photo.*

---

### 6. The Bangalore Meetup
```ts
{
  date: "2024",
  title: "The Bangalore Coincidence",
  description: "I still don't know if it was coincidence or destiny — probably both. Of all the places and all the people, there you were. I still think about why I didn't say it that day. It was so romantic, the setting was perfect. But the best part always comes last, iykyk. We should have stayed longer. And yes — that dessert. What was it called again? 👀",
  image: ''
}
```
📸 *Bangalore meetup photo — the dessert place if you have one!*

---

### 7. July 30, 2025 — The First Hangout
```ts
{
  date: "30th July 2025",
  title: "The First Hangout",
  description: "Genuinely did not expect you to show up alone that day. And then we just... didn't stop. Six hours straight — roaming, talking, laughing — non-stop till 4 or 5 in the morning. I don't think I was ever that present in a moment before.",
  image: ''
}
```
📸 *July 30th hangout photo.*

---

### 8. August 15 — The Bhutan Trip
```ts
{
  date: "15th August",
  title: "Bhutan, Stars & A Kinder Joy",
  description: "I was waiting for your call after the parade. Then out of nowhere you asked me to come along to Bhutan — and you already knew I'd say yes. (Not for Bhutan. For you.) We had our first accident together, survived it, and on the way back the road was quiet and the stars were out and I gave you a Kinder Joy. iykyk 🌟",
  image: ''
}
```
📸 *Bhutan trip photo — the starry road or Kinder Joy moment.*

---

### 9. August 16 — Krishnashtami
```ts
{
  date: "16th August",
  title: "Krishnashtami — Rain, a Bus Stop & Truth or Dare",
  description: "I was literally around you the whole day. Even fell on the road going to the temple — smooth 😅. Inside the temple everyone was pairing up and I was trying not to look as obvious as I felt. Then after, we sat by the lake. Rain started. We moved to the bus stop. The weather was perfect, the silence was comfortable, and I kept my hand on your shoulder. We played truth or dare and I just kept learning more about you.",
  image: ''
}
```
📸 *Krishnashtami / lake / bus stop photo.*

---

### 10. August 22 — 4:45 PM
```ts
{
  date: "22nd August",
  title: "4:45 PM — Only Whom I Love",
  description: "I was so nervous I almost didn't show up. I had rehearsed it a hundred times in my head — how to say it, when to say it. We roamed, talked about random things, sat by the lake with odomos 👀. Then you moved to my left and rested your head on my shoulder, and asked what you were to me. My whole body was shaking. At 4:45 PM, I said it — *'Only whom I love.'* And that was it.",
  image: ''
}
```
📸 *Aug 22nd — the lake, or any photo from that day.*

---

### 11. August 25 — The Beginning
```ts
{
  date: "25th August",
  title: "The Beginning of Us",
  description: "We were walking around, figuring out what we were to each other. I was sure. You were thinking. We stopped at a bus stop — the serpentine one 👀 — and in the silence between the words, we just looked at each other. And then our first kiss. We said we'd count them. We lost count a long time ago 👀...",
  image: ''
}
```
📸 *Aug 25th — the bus stop or any photo from that day.*

---

## How to Update

1. Open `backend/server.js` and replace the `timeline` array with the entries above.
2. Open `frontend/src/data/content.ts` and replace `timelineContent` with the same entries.
3. For photos: place the image files in `frontend/public/photos/` and set `image: '/photos/filename.jpg'` for each entry.
4. Once all photos are added, the Journey page will display them automatically alongside each milestone card.
