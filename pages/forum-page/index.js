import { useRouter } from "next/router";
import Form from "../../components/ui/Form";

function FormPage() {
  const router = useRouter();

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
      <Form addMeetup={handleMeetup} />
    </div>
  );
}

export default FormPage;
