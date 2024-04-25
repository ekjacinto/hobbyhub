import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortSelect = () => {
  return (
    <Select>
      <SelectTrigger className="font-open font-bold text-lg w-[12rem] border-none border-white rounded-md text-white bg-[#0d0e11] shadow-sm shadow-[#cfcfcf] mb-8">
        <SelectValue placeholder="Order By:" />
      </SelectTrigger>
      <SelectContent className="text-md text-white font-bold bg-[#0d0e11] border-none">
        <SelectGroup>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="mostPopular">Most Popular</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
