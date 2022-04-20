import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../../components/ui/Form";
import { auth } from "../../Firebase";
import SignIn from "../../components/layout/SignIn";

function FormPage() {
  const [signIn, setSignedIn] = useState();
  const router = useRouter();
  auth.onAuthStateChanged((user) => {
    setSignedIn(user);
  });

  async function handleMeetup(meetup) {
    const response = await fetch("/api/new-location", {
      // no file extension
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json(); // handles response
    console.log(data);
    router.push("/");
  }
  return (
    <div>
      {signIn ? <Form addMeetup={handleMeetup} /> : <SignIn />}
      {/* <Form addMeetup={handleMeetup} /> */}
    </div>
  );
}

export default FormPage;
