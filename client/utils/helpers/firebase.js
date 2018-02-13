//assets
import { CONFIG } from '../../assets/config';

//library
import firebase from 'firebase'

let fire = firebase.initializeApp(CONFIG.LIBRARY.FIREBASE.CONFIG);

export default fire;