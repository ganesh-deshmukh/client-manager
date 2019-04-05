service cloud.firestore {
	match /database/{database}/documents {
		match /{documents=**}{
    allow read, write: if request.auth.uid != null;
    }
	}
}