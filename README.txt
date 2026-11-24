LETSFLASH — COMPLETE ANDROID SOURCE (FONT MANAGER + LOGO BUILD FIX)

This is the complete editable source project for LetsFlash. GitHub Actions can compile
it into an APK. The Android Studio instructions are included below.

PRESERVED FEATURES
- Offline-first IndexedDB storage; existing database is upgraded without deleting decks
- Separate decks; CSV, TXT and JSON imports
- Add, edit, delete and rename decks/cards
- Hanzi front, Pinyin, meaning, translation, explanation, example, grammar and notes
- Optional image/audio URLs or data URIs
- Reveal-answer study flow, previous/next, shuffle and restart
- Optional typing practice
- Again / Hard / Good / Easy ratings and configurable review intervals
- Dark/light themes and custom background colour
- Full backup export/restore and individual deck JSON export
- Native Android share/export bridge
- Developer/about information and responsible-use notice

NEW FONT FEATURES
- Independent Chinese (Hanzi) and English font selectors
- Chinese: Noto Sans SC (default), Noto Serif SC, Songti SC (system fallback)
- English: Roboto (default), bundled Inter and Lato, and Georgia (uses the device Georgia font when available, otherwise a serif fallback)
- Independent Hanzi and English/Pinyin size controls
- Custom TTF, OTF, WOFF and WOFF2 uploads, stored locally in IndexedDB
- Custom fonts are reloaded after app restart; delete and reset controls included
- Custom font files are stored separately from deck backup files
- Inter and Lato regular/bold font files are bundled for offline use under assets/fonts (with their license notices)
- Noto Sans SC / Noto Serif SC use the Android CJK system fonts and explicit CJK fallback stacks; no network is needed
- For Hanzi custom fonts, choose a font with Simplified Chinese glyph coverage

LOGO / ANDROID ICON FIX
The selected Neon Flashcard Orbit logo is included twice for two different purposes:
- letsflash-logo.png is copied into the offline web app and displayed in the app header.
- assets/icon-only.png is the source for Android launcher icon generation.
The GitHub workflow now generates launcher resources from assets/icon-only.png and checks
that both the launcher icon resources and bundled in-app logo exist before compiling.

GITHUB BUILD
1. Extract this ZIP.
2. Upload the CONTENTS of the extracted folder to the ROOT of your GitHub repository.
3. Confirm the workflow is at .github/workflows/main.yml.
4. Commit/push to the main branch, or open Actions and run “Build LetsFlash APK”.
5. Open the successful run and download the letsflash-debug-apk artifact.
6. Extract the artifact ZIP; install app-debug.apk on your Android device.

ANDROID STUDIO BUILD (WINDOWS)
Requirements: Android Studio, Android SDK, JDK 21, Node.js 22 and npm.
1. Extract this ZIP to a normal folder, for example C:\Projects\LetsFlash.
2. Open PowerShell in that folder.
3. Run: npm install
4. Run: npm run build
5. Run: npx esbuild native-bridge.js --bundle --format=iife --outfile=www/native-bridge.bundle.js
6. Run: npx cap add android
   If it says Android platform already exists, continue to the next step.
7. Run: npx capacitor-assets generate --android
8. Run: npx cap sync android
9. In Android Studio choose File > Open and select the generated android folder.
10. Wait for Gradle sync to finish. If prompted, install the required Android SDK components.
11. Choose Build > Build Bundle(s) / APK(s) > Build APK(s).
12. When the build finishes, click “locate” in the notification. The debug APK is normally at:
    android\app\build\outputs\apk\debug\app-debug.apk

If you replace the app logo later, replace BOTH letsflash-logo.png and assets/icon-only.png,
then rerun npm run build, npx capacitor-assets generate --android and npx cap sync android
before building. The app header logo and launcher icon are separate resources.

APP DATA
Study data and uploaded fonts are stored locally on each device. Export a backup before
uninstalling or clearing app data. Custom font files are local to the installation and are
not embedded in deck backups.

APP ID: com.surjo.letsflash
APP NAME: LetsFlash
