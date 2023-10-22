import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import Navbar from "../components/Navbar";

const NotesPage = () => {
  const store = notesStore();

  // Use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);
  return (
    <div>
      <Navbar />
      <Notes />
      <UpdateForm />
      {/* <CreateForm /> */}
    </div>
  );
};

export default NotesPage;
