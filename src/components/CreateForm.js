import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" onSubmit={store.createNote}>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Add new loan
        </h5>
        <div>
          <label
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.title}
            name="body"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter total amount
          </label>
          <input
            onChange={store.updateCreateFormField}
            value={store.createForm.title}
            name="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="amount"
            required
          />
        </div>

        <div>
          <label
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.title}
            name="body"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weekly amount
          </label>
          <input
            onChange={store.updateCreateFormField}
            value={store.createForm.body}
            name="body"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="amount"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
}
