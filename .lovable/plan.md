# Jumoke's 35th Floor Birthday Experience

## Overview
Build a polished, mobile-first birthday journey at `/` that opens with a gift reveal, moves through 35 swipeable tribute cards, and ends with Bisola's prayer and letter. Jumoke's uploaded portrait will be used throughout, with changing illustrated accessories and celebratory details layered around her.

## Experience
- Create a full-screen "Lobby" entrance with the exact birthday headline, an interactive wrapped gift, subtle sparkles, and a clear "Open Me" action.
- Animate the gift opening, trigger a confetti burst, then transition smoothly into Floor 1.
- Build one focused card view for Floors 1 through 35 with the supplied word, part of speech, and definition preserved exactly.
- Add a distinct playful visual treatment per floor using lightweight SVG and CSS overlays such as crowns, glasses, hearts, flowers, stars, champagne, and party accessories.
- Add large, thumb-friendly Back and Next controls, a sleek "Floor X of 35" indicator, swipe gestures, and left/right keyboard controls.
- After Floor 35, reveal the complete prayer and letter from Bisola on delicate luxury stationery with a celebratory transition.
- Add Restart and Share Birthday Card actions. Sharing will use the device share sheet where supported and copy a celebratory message as a fallback.

## Visual Direction
- Chic editorial celebration using blush pink, rose, champagne gold, warm cream, berry accents, and dark plum text.
- Elegant display serif paired with a clean rounded sans-serif, loaded in the document head.
- Portrait-first composition with refined framing, layered paper textures, restrained metallic details, and subtle sparkle motion.
- Use semantic theme tokens for all colors and shadows, with compact corners and responsive spacing.
- Respect reduced-motion preferences while keeping the default experience joyful and tactile.

## Technical Details
- Store the uploaded portrait through the project asset system and reference its generated asset pointer.
- Keep the experience entirely client-side with no account, database, or external service required.
- Implement progress state, pointer swipe handling, keyboard events, confetti particles, transitions, and share fallback in React.
- Add route-specific title, description, Open Graph metadata, and Twitter card metadata.
- Validate the final experience in the live preview at phone and laptop sizes, including gift opening, navigation, swipe, keyboard controls, final letter, restart, and sharing fallback.
