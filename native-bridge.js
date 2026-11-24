import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

window.NativeFiles = {
  async saveAndShare(filename, text) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    }
    const data = btoa(binary);
    const saved = await Filesystem.writeFile({
      path: filename,
      data,
      directory: Directory.Cache,
      recursive: true
    });
    return Share.share({
      title: filename,
      text: 'Export from LetsFlash',
      url: saved.uri,
      dialogTitle: 'Save or share your flashcard file'
    });
  }
};
