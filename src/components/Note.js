import notesStore from "../stores/notesStore";

export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div
      key={note._id}
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      {/* <button onClick={() => store.deleteNote(note._id)}>Delete note</button>
      <button onClick={() => store.toggleUpdate(note)}>Update note</button> */}

      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Amount to be repaid - ₹{note.title}
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">₹</span>
        <span class="text-5xl font-extrabold tracking-tight">{note.body}</span>
        <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /week
        </span>
      </div>
      <ul role="list" class="space-y-5 my-7">
        <li class="flex space-x-3 items-center">
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            - Weekly payment pending
          </span>
        </li>
      </ul>

      <button
        class="text-white bg-orange-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        onClick={() => store.toggleUpdate(note)}
      >
        Make payment
      </button>
    </div>
  );
}
