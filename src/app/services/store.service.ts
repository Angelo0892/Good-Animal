import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(file: File): Promise<string> {
    const filePath = `images/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    return new Promise((resolve, reject) => {
      uploadTask.snapshotChanges().pipe(
        finalize(async () => {
          const downloadURL = await fileRef.getDownloadURL().toPromise();
          resolve(downloadURL);
        })
      ).subscribe();
    });
  }
}
