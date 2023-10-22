import CreateForm from "../components/CreateForm";
import Navbar from "../components/Navbar";
import notesStore from "../stores/notesStore";

const NewLoanPage = () => {
  const store = notesStore();

  if (store.updateForm._id) return <></>;
  return (
    <div>
      <Navbar />
      <CreateForm />
    </div>
  );
};

export default NewLoanPage;
