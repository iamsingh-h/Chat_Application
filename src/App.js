import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/Chat";

function App() {

  const [user] = useAuthState(auth)
  //console.log(user)

  return (
    <div className="mx-auto text-center max-w-[728px]">
      <section className="flex flex-col bg-gray-100 mt-10 shadow-xl border relative h-[90vh]">
        <Navbar/>
        {user? <Chat/> :null}

      </section>
    </div>
  );
}

export default App;
