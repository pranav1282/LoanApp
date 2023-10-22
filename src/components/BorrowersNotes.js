import BorrowersNote from "../components/BorrowersNote";
import notesStore from "../stores/notesStore";
import Note from "./Note";

export default function Notes() {
  const store = notesStore();

  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {store.notes &&
          store.notes.map((note) => {
            return <BorrowersNote note={note} key={note._id} />;
          })}
      </div>
    </div>
  );
}
