import{db} from 'libs/firebase'
import{useEffect, useState} from 'react'
import{doc, getDoc} from 'firebase/firestore'


function useUserProfile(path){
    const [userProfile, setUserProfile] = useState(null)
    const [output, setOutput] = useState('is working')

    useEffect(() =>{
    async function getFirebaseDoc() {
        const docRef = await doc(db, path)
        const docData = await getDoc(docRef)


        console.log(docData.exists())
        console.log(docData.data())
        setUserProfile(docData.data())

    }
    getFirebaseDoc()
    }, [])

    return userProfile


}

export {useUserProfile}