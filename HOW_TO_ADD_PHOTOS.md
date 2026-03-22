# How to Add Photos to the Journey Page

## Step 1 — Prepare your photos

- Rename your photos clearly, e.g.:
  - `chandubi.jpg`
  - `physics_day.jpg`
  - `sem2_gang.jpg`
  - `shillong.jpg`
  - `wish_program.jpg`
  - `bangalore.jpg`
  - `first_hangout.jpg`
  - `bhutan.jpg`
  - `krishnashtami.jpg`
  - `aug22.jpg`
  - `aug25.jpg`

- Recommended format: `.jpg` or `.webp` (smaller file size = faster load)
- Recommended size: max 1–2 MB per photo

---

## Step 2 — Place photos in the right folder

Copy all your photos into this folder:

```
website/
  frontend/
    public/
      photos/       ← PUT YOUR PHOTOS HERE
        chandubi.jpg
        physics_day.jpg
        ...
```

> If the `photos` folder doesn't exist inside `public/`, create it.

---

## Step 3 — Update the timeline data

Open `frontend/src/data/content.ts` and find the `timelineContent` array.

For each milestone, update the `image` field from `''` to the path of your photo.

### Example — before:
```ts
{ date: "9th February 2024", title: "The Day It All Started", description: "...", image: '' },
```

### Example — after:
```ts
{ date: "9th February 2024", title: "The Day It All Started", description: "...", image: '/photos/chandubi.jpg' },
```

---

## Full reference — which image goes where

| # | Milestone | Suggested filename | image value |
|---|---|---|---|
| 1 | Chandubi Trip | `chandubi.jpg` | `'/photos/chandubi.jpg'` |
| 2 | Physics Explanation Day | `physics_day.jpg` | `'/photos/physics_day.jpg'` |
| 3 | Sem 2 Gang | `sem2_gang.jpg` | `'/photos/sem2_gang.jpg'` |
| 4 | Shillong Trip | `shillong.jpg` | `'/photos/shillong.jpg'` |
| 5 | WISH Program | `wish_program.jpg` | `'/photos/wish_program.jpg'` |
| 6 | Bangalore Meetup | `bangalore.jpg` | `'/photos/bangalore.jpg'` |
| 7 | First Hangout (30 July) | `first_hangout.jpg` | `'/photos/first_hangout.jpg'` |
| 8 | Bhutan Trip (15 Aug) | `bhutan.jpg` | `'/photos/bhutan.jpg'` |
| 9 | Krishnashtami (16 Aug) | `krishnashtami.jpg` | `'/photos/krishnashtami.jpg'` |
| 10 | 22nd August | `aug22.jpg` | `'/photos/aug22.jpg'` |
| 11 | 25th August | `aug25.jpg` | `'/photos/aug25.jpg'` |

---

## Step 4 — Save and check

After updating `content.ts`, just save the file.

The dev server will hot-reload automatically.

Open `http://localhost:5173/journey` and your photos should appear alongside each milestone card!

> **Note:** If a photo is left as `image: ''`, the card shows a soft 📸 placeholder automatically — no broken images.

---

## For the backend (optional)

If you also want the backend to serve photos (for production deployment), also update `backend/server.js` the same way — find the `timeline` array and set the same `image` values.
