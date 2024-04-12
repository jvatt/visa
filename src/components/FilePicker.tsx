import { ChangeEvent } from "react";

type Props = {
  onSelect: (file: File) => void;
};
function FilePicker({ onSelect }: Props) {
  function fileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      onSelect(event.target.files[0]);
    }
  }
  return (
    <div className="items-center flex flex-col space-y-2">
      <label className="text-lg" htmlFor="quizfile">
        Drag & drop file or click to browse
      </label>
      <div>↓</div>
      <input
        id="quizfile"
        type="file"
        className="inputFile block items-center flex cursor-pointer border bg-gray-700 border border-gray-500 rounded-sm p-10"
        name="file"
        onChange={fileSelected}
        accept=".json"
        placeholder="Drag file here or click to browse"
      />
    </div>
  );
}

export default FilePicker;
