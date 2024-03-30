import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className="flex items-center gap-x-2 p-3 bg-destructive/15 rounded-md text-destructive">
            <ExclamationTriangleIcon className="w-5 h-5"/>
            <p>{message}</p>
        </div>
    );
}