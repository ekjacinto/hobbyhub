import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectProps {
  changeEvent: (option: string) => void;
}

const LanguageSelect = ({ changeEvent }: LanguageSelectProps) => {
  return (
    <Select onValueChange={changeEvent}>
      <SelectTrigger className="font-open font-bold text-lg w-[12rem] border-[2px] border-white rounded-md text-white bg-[#0d0e11] hover:bg-[#292a2c]">
        <SelectValue placeholder="Language:" />
      </SelectTrigger>
      <SelectContent className="text-md text-white font-bold bg-[#0d0e11] border-none">
        <SelectGroup>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="javascript">Javascript</SelectItem>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="rust">Rust</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
