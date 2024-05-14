import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
message?: string;

}
export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null;
    }
    return (
        <div className="bg-b p-3 text-center rounded-md flex items-center gap-x-2 text-sm ">
          <CheckCircledIcon className="w-5 h-5 "/>
        <p>
        {message}
            </p>  
        </div>
    );
}