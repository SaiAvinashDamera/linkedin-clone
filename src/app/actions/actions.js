import { login } from "../../features/userSlice";
import { auth, db, storage } from "../../firebase";
import firebase from "firebase/compat/app";

export function signInAPI(email, password) {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => console.log(error));
  };
}

export function registerAPI(name, email, password) {
  return (dispatch) => {
    if (!name) {
      console.log("Please enter a full name");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                })
              );
            });
        })
        .catch((error) => console.log(error.message));
    }
  };
}

export const postArticleAPI = (payload) => {
  if (payload.image !== "") {
    const upload = storage
      .ref(`images/${payload.image.name}`)
      .put(payload.image);
    upload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`progress :${progress}%`);
        if (snapshot.state === "RUNNING") {
          console.log(`progress :${progress}%`);
        }
      },
      (error) => console.log(error.code),
      async () => {
        const downloadURL = await upload.snapshot.ref.getDownloadURL();
        db.collection("posts").add({
          name: payload.user.displayName,
          description: payload.user.email,
          message: payload.message,
          photoUrl: downloadURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    );
  } else {
    db.collection("posts").add({
      name: payload.user.displayName,
      description: payload.user.email,
      message: payload.message,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
};
