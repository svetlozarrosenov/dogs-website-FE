import { SubmitHandler } from "react-hook-form";

interface CustomFormInterface {
    fields: [any]
    onSubmit: SubmitHandler<any>
    button: string;
    title: string;
}
  
export default CustomFormInterface;