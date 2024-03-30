import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;
    return (
        <div className="flex items-center gap-x-2 p-3 bg-emerald-500/15 rounded-md text-emerald-500">
            <CheckCircledIcon className="w-5 h-5"/>
            <p>{message}</p>
        </div>
    );
}